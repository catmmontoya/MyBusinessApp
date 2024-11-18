function Inquire() {
  return (
    <>
    <div className="wrapper">
    <h2>INQUIRE</h2>
    <p>Do you have a very specific idea in your head and want someone to create it for you? I&apos;m your girl.</p>
      <form> 
          <div>
        <label htmlFor="name"></label>
        <input name="name" type="text" placeholder="NAME"></input>

        <label htmlFor="email"></label>
        <input name="email" type="email" placeholder="EMAIL"></input>
          </div>
        <label htmlFor="password"></label>
        <input className="password" name="password" type="password" placeholder="PASSWORD"></input>

        <textarea className="text-area">MESSAGE</textarea>
        <button type="submit">SUBMIT</button>
        </form>
        <p>Disclaimer: I will be honest if I feel that I can&apos;t give you the results you&apos;re looking for.</p>
        </div>
    </>
  )
}

export default Inquire