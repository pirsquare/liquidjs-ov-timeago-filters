import { format } from 'timeago.js';

function formatTimeago(ts) {
  const dt = new Date(ts * 1000);
  const nowTs = Math.floor(Date.now() / 1000);
  const diff = nowTs - ts;
  if (nowTs > ts && 60 > diff) return 'Just Now';
  return format(dt);
}

export function timeagoFiltersPlugin(Liquid) {
  this.registerFilter('timeago', formatTimeago)
}
