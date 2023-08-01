import React from 'react'
import classes from './View.module.scss'
import BGPatternTop from '../../images/bg-pattern-top.svg'
import BGPatternBottom from '../../images/bg-pattern-bottom.svg'
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const View = () => {
  return (
    <div className={classes.view}>
    <img src={BGPatternTop} alt='Top background pattern' className={classes.bg__top}/>
    <Card/>
    <img src={BGPatternBottom} alt='Bottom background pattern' className={classes.bg__bottom}/>
    <Footer />
    </div>
  )
}

export default View