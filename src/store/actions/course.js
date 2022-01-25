export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON', // indica a ação que vai ser realizada, e deve ser única no app
    module,
    lesson
  }
}