import './home.scss'
import data from '../../data.js'
const highlighted_works = data.highlighted_works
const social_media = data.social_media
function home() {
  const handleClick = () => {
    
  }
  return (
    <div className='home' id='home'>
      <div className='left'>
        <div className='intro'>
          <h4>Ajay Kushwaha</h4>
          <h6>A Full Stack Developer & Problem Solver</h6>
        </div>
        <div className='aboutMe' onClick={handleClick}>
          <h5 onClick={handleClick}>About Me</h5>
        </div>
        <div className='down_arrow' onClick={handleClick}>
          <img src='src\assets\images\down.png' alt='About Me' />
        </div>
        <div className='social_media'>
          {social_media.map((social) => {
            return (
              <div className='social' key={social.id}>
                <a href={social.link}>
                  <img src={social.image} alt={social.name} className={`colors${social.id}`} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <h3>
          {' '}
          <span>Highlighted works</span>
        </h3>
        <div className='project_container'>
          {highlighted_works.map((project) => {
            return (
              <div className='project' key={project.id}>
                <a href={project.link}>
                  <img src={project.image} alt={project.name} />
                </a>
                <h6>{project.project_name}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default home
