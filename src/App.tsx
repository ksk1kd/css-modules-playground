import style from './style.module.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className={style.title}>CSS Modules Playground</h1>
        <h2 className={style.subtitle}>Sub Title</h2>
        <p>
          <a className={style.link} href="/">
            Sample Link
          </a>
        </p>
      </div>
    </>
  )
}

export default App
