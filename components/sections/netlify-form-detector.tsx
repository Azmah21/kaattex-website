export function NetlifyFormDetector() {
  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      hidden
      aria-hidden="true"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <input name="companyName" />
      <input name="customerName" />
      <input name="email" />
      <input name="phoneNumber" />
      <textarea name="projectDetails" />
      <input type="file" name="attachment" />
    </form>
  )
}
