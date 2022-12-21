export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /*use the const */
    const task = true;
    const task2 = false;
    /*use the const */
  }

  return [task, task2];
}
