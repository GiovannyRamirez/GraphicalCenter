export async function fileUpload (file) {
  
  const cloudUrl = process.env.REACT_APP_CLOUDINARY_CLOUD_URL

  const formData = new FormData()
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET)
  formData.append('file', file)

  try {
    const response = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    })

    if(response.ok) {
      const cloudResponse = await response.json()
      return cloudResponse.secure_url
    } else {
      throw await response.json()
    }
  }
  catch (err) {
    throw err
  }
}