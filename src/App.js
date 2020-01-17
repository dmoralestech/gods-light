import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import jesus from './img/jesus.svg';
import family from './img/family.svg';
import familyBlack from './img/family_black.svg';
import familyWhite from './img/family_white.svg';
import church from './img/church.svg';
import pray from './img/pray.svg';
import spiritual from './img/spiritual.svg';
import commandments from './img/commandments.svg';
import './App.css';

const Nav = () => (
  <div class="topnav" id="myTopnav">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
);

const Cover = () => (
  <div id="home" className="cover">
    <div className="header-title-container">
      <h1>GOD'S LIGHT</h1>
      <h1>SYDNEY</h1>
      <h4>“You are the light of the world.” (Matthew 5: 14)</h4>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer-row">
    God's Light 2004-2020
    <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a
      href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
      href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </div>
  </div>
);

const WhoAreWe = () => (
  <div id="who-are-we" className="section-row">
    <img src={spiritual} style={{width: '100px', height: "100px"}}/>
    <div className="page-title">
      Who Are We
    </div>
    <p className="section-text">
      We are a community of disciples in mission. Having received the call in to be “the salt of the earth and
      light of the world,” we have come to be known
      as God’s Light.
    </p>

    <p className="section-text">
      Having received the call in to be “the salt of the earth and light of the world,” we have come to be known
      as God’s Light. Symbolised by the “bridge” that has become an icon for Sydney, God’s Light sees itself as
      being a B-R-I-D-G-E.
    </p>

    <p className="section-text">
      We acknowledged that we were Broken individuals, Restored by Christ, and now living In the Spirit as
      Disciples with
      God being at the centre of our lives. As such, we are called to be Evangelists - witnesses to God’s work
      in our individual lives. Together we shall bring God’s Light to others.
    </p>
  </div>
);

const Schedule = () => (
  <div class="section-row" id="schedule">
    <div class="section-title">Schedule</div>
    <embed src="./calendar.pdf" width="100%" height="500px" type="application/pdf"/>
  </div>
)

const OurCovenant = () => (
  <div className="section-row" id="covenant">
    <img src={commandments} style={{width: '100px', height: "100px"}}/>
    <div className="page-title">
      Our Covenant
    </div>
    <p className="section-text">In Christ, God has made a covenant with God's Light, a covenant which God's
      Light members have joyfully
      received and entered into by faith and baptism. </p>

    <p className="section-text">
      He has called God's Light members to express in a special way this
      covenant established by His Son, Jesus, through His sacrifice on the cross. He has joined the members
      together in the bond of steadfast love and faithfulness, and has given them a particular call and
      mission.
    </p>

    <p className="section-text">In response, God's Light members desire:</p>

    <ul>
      <li>To love and serve Him in lives of daily prayer and service;</li>
      <li>To praise and worship Him always;</li>
      <li>To know and serve the truth of His Word in the joy, peace, and love of the Holy Spirit;</li>
      <li>To believe what He speaks to God's Light and to be obedient to the truth of his Word and the guidance of His
        Spirit;
      </li>
      <li>To offer hospitality to those whom He sends to God's Light;</li>
      <li>To widen our hearts to receive those he adds to God's Light, and</li>
      <li>To carry out the mission that He is entrusting to God's Light.</li>
    </ul>
  </div>
);


const SectionRow = (props) => (
  <div className="section-row" id={props.id}>
    {props.icon && <img src={props.icon} style={{width: '100px', height: "100px"}}/>}
    <div className="section-title">
      {props.title}
    </div>
    <div className="section-text">
      {props.text}
    </div>
    {props.children}
  </div>
);


const Panel = ({className, title, textArray, buttonLink, buttonLabel}) => (
  <header className={className}>
    <div>
      <span><h2>{title}</h2></span>
    </div>
    <div className="box-text-area">
      {textArray.map((text) => (<p className="box-text">
        {text}
      </p>))}

    </div>
    {buttonLink && <button type="button" className="btn">
      <Link to={buttonLink}>{buttonLabel}</Link>
    </button>}

  </header>
);

const Main = () => (
    <div className="main">

      <SectionRow id="about" title='God’s Light is a family-based covenant community in Sydney, Australia' icon={family}
                  text='Having received the call in to be “the salt of the earth and light of the world,” we have come to be known as God’s Light. Symbolised by the “bridge” that has become an icon for Sydney, God’s Light sees itself as being a B-R-I-D-G-E.'/>
      <WhoAreWe/>

      <OurCovenant/>

      <SectionRow id="about2" title="God's Light is a community of disciples" icon={jesus}
                  text="We have made our commitment to God and each other. We gather together to share our faith and fellowship allowing the Light of our Lord to shine brightly in us and in the way we live."/>

      <SectionRow title="Come! You are welcome to join us" icon={pray}
                  text="We meet twice a month, *normally* 2nd and 4th Sunday of the week. Hope to see you there!"/>

      <Schedule/>
    </div>
  )
  ;

const App = () => (
  <div>
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#about">About</a>
      <a href="#who-are-we">Who Are We</a>
      <a href="#covenant">Our Covenant</a>
      <a href="#schedule">Schedule</a>
    </div>
    <Cover />
    <Main />
    <Footer />
  </div>
);

export default App;

