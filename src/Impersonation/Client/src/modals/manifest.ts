const modals = [
  {
    type: 'modal',
    alias: 'member.impersonation.modal',
    name: 'Member custom modal',
    js: () => import('./modal-element.js')
  }
];

export const manifests = [...modals];
