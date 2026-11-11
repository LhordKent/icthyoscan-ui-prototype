const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const source = fs.readFileSync(__dirname + '/app.js', 'utf8');
for (const origin of ['file:///C:/project/index.html', 'http://localhost:4173/']) {
  let current = new URL(origin), opened;
  const events = {}, root = { innerHTML: '' };
  const document = {
    currentScript: { src: new URL('app.js', origin).href },
    querySelector: selector => selector === '#gallery-app' ? root : null,
    querySelectorAll: () => [],
    body: { classList: { toggle: () => {} } },
    addEventListener: (name, fn) => { events['document:' + name] = fn; },
  };
  const context = vm.createContext({ URL, URLSearchParams, document,
    get location() { return current; },
    history: { pushState: (_, unused, path) => {
      assert.notEqual(current.protocol, 'file:', 'File navigation must not push website paths');
      current = new URL(path, current);
    } },
    window: { addEventListener: (name, fn) => { events[name] = fn; },
      open: url => { opened = new URL(url); } },
    requestAnimationFrame: fn => fn(),
  });
  vm.runInContext(fs.readFileSync(__dirname+'/aligned-ui.js','utf8'), context);
  vm.runInContext(source, context);
  assert.match(root.innerHTML, /catalogue-hero/);
  const inventory = vm.runInContext('screens', context);
  assert.equal(inventory.length,22);
  assert.equal(new Set(inventory.map(x=>x.path)).size,22);
  assert.equal(inventory[0].figure,6);
  assert.equal(inventory[21].figure,27);
  assert.doesNotMatch(vm.runInContext("mobileScreen('history')",context),/Image needs recapture/);
  assert.doesNotMatch(vm.runInContext("webScreen('web-history')",context),/IS-1104/);
  assert.doesNotMatch(vm.runInContext("webScreen('dashboard')",context),/Pending automatic sync/);
  assert.doesNotMatch(vm.runInContext("mobileScreen('sample')",context),/Inspection context|data-action="m:sample-result"/);
  assert.match(vm.runInContext("mobileScreen('quality')",context),/Preview analysis result/);
  vm.runInContext('state.qualityRejected=true',context);
  assert.match(vm.runInContext("mobileScreen('quality')",context),/Replace image/);
  assert.doesNotMatch(vm.runInContext("mobileScreen('quality')",context),/Preview analysis result/);
  vm.runInContext("state.recordId='IS-1028'",context);
  for(const ui of ["mobileScreen('details')","webScreen('web-details')"]){
    assert.match(vm.runInContext(ui,context),/IS-1028/);
    assert.match(vm.runInContext(ui,context),/Oct 28, 2026/);
    assert.match(vm.runInContext(ui,context),/Red spots or hemorrhagic discoloration/);
    assert.match(vm.runInContext(ui,context),/bangus-demo-observation.png/);
  }
  assert.match(vm.runInContext("assessment({findings:[]})",context),/does not establish.*disease-free/);
  vm.runInContext("demoAccount.name='Example Farmer'",context);
  assert.match(vm.runInContext("mobileScreen('profile')",context),/Example Farmer/);
  assert.match(vm.runInContext("webScreen('web-profile')",context),/Example Farmer/);
  for (const screen of inventory) {
    context.itemToTest = screen;
    vm.runInContext('navigate(itemToTest)', context);
    if (current.protocol === 'file:') events.hashchange();
    assert.ok(root.innerHTML.includes(screen.name), screen.id);
    const target = {
      dataset: {}, matches: selector => selector === '[data-screenshot],[data-capture]',
    };
    events['document:click']({ target: { closest: () => target } });
    assert.ok(opened);
    if (current.protocol === 'file:') assert.equal(opened.pathname, '/C:/project/index.html');
    current = opened;
    vm.runInContext('renderGallery()', context);
    assert.match(root.innerHTML, /screenshot-page/);
    assert.doesNotMatch(root.innerHTML, /gallery-sidebar|gallery-toolbar/);
    current = new URL(origin);
  }
  console.log(origin.split(':')[0] + ': all 22 screen routes and screenshot views pass');
}
