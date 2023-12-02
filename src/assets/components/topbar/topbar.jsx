import './topbar.scss'
export default function topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro'>
            <img src='/ak.png' alt='AK' className='logo' />
          </a>
        </div>
        <div className='right'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#works'>Works</a>
            </li>

            <li>
              <a href='#articles'>Articles</a>
            </li>
            <li>
              <a href='#aboutme'>About</a>
            </li>
            <li>
              <a href='#contactme'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
