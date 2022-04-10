import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = ({ user }) => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg', 'image/jpg']
    const changeHandler = e => {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Select a valid image type')
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && (
                    <ProgressBar file={file} setFile={setFile} user={user} />
                )}
            </div>
        </form>
    )
}

export default UploadForm