import { SubmissionError } from 'redux-form';
import ContactPage from "./reduxForm/contactPage";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = (values) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['manikonda', 'malakondaiah', 'mani12345', 'mmk123456'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== '123456789') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

export default submit