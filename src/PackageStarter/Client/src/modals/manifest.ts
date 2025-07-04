
const modals = [
  {
    type: 'modal',
    alias: 'member.custom.modal',
    name: 'Member custom modal',
    js: () => import('./modal-element.js')
  }
];

export const manifests = [...modals];
