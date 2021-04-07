export default function error(dialog, err, info) {
  dialog.error({
    title: err.toString(),
    text: `Autoscriber encountered an error: ${info}`
  });
}