import React from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckConfirm from './CheckConfirm'
import PropTypes from 'prop-types'
import styles from '../../styles/Form.module.scss'

interface dataType {
  creator: string
  avatar_url: string
  content: string
}

export default function FormMessage({ hidden }) {
  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = {} as dataType
    formData.forEach(function (value, key) {
      data[key] = value
    })

    data.creator = data.creator.trim()
    if (!data.creator) return console.log('Error: No creator')

    data.avatar_url = data.avatar_url.trim()

    if (!data.content) return console.log('Error: No content')

    if (!confirmation) return console.log('Error: Not confirmed')

    console.log(data)
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={onSubmit}
    >
      <TextInput name="creator" label="My name is ..." />
      <TextInput
        name="avatar_url"
        label="A link to my profile picture is here (optional) ..."
      />
      <TextArea name="content" label="My message to Coco is ...." />
      <h2>Preview</h2>

      {/*ToDo remove when preview component donk*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>
      <CheckConfirm name="confirmation" />
      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

FormMessage.propTypes = {
  hidden: PropTypes.bool,
}
