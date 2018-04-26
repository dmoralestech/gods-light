import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './img/logo1.png';
import jesus from './img/jesus.svg';
import family from './img/family.svg';
import familyBlack from './img/family_black.svg';
import familyWhite from './img/family_white.svg';
import church from './img/church.svg';
import pray from './img/pray.svg';
import './App.css';

const Cover = () => (
  <div className="cover">
    <div className="header-title-container">
      <img src={logo} alt="logo" height="150px" width="125px"/>
      <h1>GOD'S LIGHT</h1>
      <h1>SYDNEY</h1>
      <h4>“You are the light of the world.” (Matthew 5: 14)</h4>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer-row">
    God's Light 2004-2018
    <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a
      href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
      href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </div>
  </div>
);

const WhoAreWe = () => (
  <div className="section-row">
    <div className="page-title">
      Who Are We
    </div>
    <p>
      We are a community of disciples in mission. Having received the call in to be “the salt of the earth and
      light of the world,” we have come to be known
      as God’s Light.
    </p>

    <p>
      Having received the call in to be “the salt of the earth and light of the world,” we have come to be known
      as God’s Light. Symbolised by the “bridge” that has become an icon for Sydney, God’s Light sees itself as
      being a B-R-I-D-G-E.
    </p>

    <p>
      We acknowledged that we were Broken individuals, Restored by Christ, and now living In the Spirit as
      Disciples with
      God being at the centre of our lives. As such, we are called to be Evangelists - witnesses to God’s work
      in our individual lives. Together we shall bring God’s Light to others.
    </p>
  </div>
);

const OurCovenant = () => (
  <div className="section-row">
    <div className="page-title">
      Our Covenant
    </div>
    <p>In Christ, God has made a covenant with God's Light, a covenant which God's
      Light members have joyfully
      received and entered into by faith and baptism. </p>

    <p>
      He has called God's Light members to express in a special way this
      covenant established by His Son, Jesus, through His sacrifice on the cross. He has joined the members
      together in the bond of steadfast love and faithfulness, and has given them a particular call and
      mission.
    </p>

    <p>In response, God's Light members desire:</p>

    <ul>
      <li>To love and serve Him in lives of daily prayer and service;</li>
      <li>To praise and worship Him always;</li>
      <li>To ever seek His face;</li>
      <li>To know and serve the truth of His Word in the joy, peace, and love of the Holy Spirit;</li>
      <li>To believe what He speaks to God's Light and to be obedient to the truth of his Word and the guidance
        of
        His Spirit;
      </li>
      <li>To offer hospitality to those whom He sends to God's Light;</li>
      <li>To widen our hearts to receive those he adds to God's Light, and</li>
      <li>To carry out the mission that He is entrusting to God's Light.</li>
    </ul>
  </div>
);


const SectionRow = (props) => (
  <div className="section-row">
    {props.icon && <img src={props.icon} style={{width: '100px', height: "100px"}}/>}
    <div className="section-title">
      {props.title}
    </div>
    <div className="section-text">
      {props.text}
    </div>
  </div>
);


const Panel = ({className, title, text, buttonLink, buttonLabel}) => (
  <header className={className}>
    <div>
      <span><h2>{title}</h2></span>
    </div>
    <div className="box-text-area">
      <p className="box-text">
        {text}
      </p>
    </div>
    {buttonLink && <button type="button" className="btn">
      <Link to={buttonLink}>{buttonLabel}</Link>
    </button>}

  </header>
);

const EventList = () => (
  <ul>
    <li>1st April - Easter Celebration</li>
    <li>6th/7th April - Bible Study</li>
  </ul>
);

const ContactUs = () => (
  <p>
    Please email <a className="email" href="mailto:jawo@ginebra.com?Subject=Ginebra">Robert
    Jaworski</a> for more info:
  </p>
);

const Main = () => (
  <div className="main">
    <SectionRow title='God’s Light is a family-based covenant community in Sydney, Australia'
                text='Having received the call in to be “the salt of the earth and light of the world,” we have come to be known as God’s Light. Symbolised by the “bridge” that has become an icon for Sydney, God’s Light sees itself as being a B-R-I-D-G-E.'/>

    <div className="wrapper">
      <Panel title="WHO ARE WE" className="panel1"
             text="We are a community of disciples in mission. Having received the call in to be “the salt of the earth and light of the world,” we have come to be known as God’s Light."
             buttonLink="/who-are-we" buttonLabel="Read More"/>
      <Panel title="Our Covenant" className="panel2"
             text="In Christ, God has made a covenant with God's Light, a covenant which God's Light members have joyfully received and entered into by faith and baptism. "
             buttonLink="/our-covenant" buttonLabel="Read More"/>
      <Panel title="Lorem Ipsum" className="panel5" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua." buttonLink="/our-covenant" buttonLabel="Read More"/>
    </div>

    <SectionRow title="God's Light is a community of disciples"
                text="We have made our commitment to God and each other. We gather together to share our faith and fellowship allowing the Light of our Lord to shine brightly in us and in the way we live."/>

    <div className="wrapper">
      <Panel title="Announcements" className="panel4"
             text="Easter celebration would be this Sunday 1st April at 11:30am at Epping."/>
      <Panel title="What's coming up?" className="panel4" text={<EventList/>} buttonLink="" buttonLabel/>

    </div>

    <SectionRow title="Come! You are welcome to join us"
                text="We meet twice a month, 1st and 3rd Sunday of the week. Hope to see you there!"/>

    <div className="wrapper">
      <Panel title="Leader's Corner" className="panel1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
       ea commodo consequat." buttonLink="/missing" buttonLabel="Read More"/>
      <Panel title="Sharings & Reflections" className="panel3"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" buttonLink="/missing"
             buttonLabel="Read More"/>
      <Panel title="Contact Us" className="panel5" text={<ContactUs/>} buttonLink="" buttonLabel/>
    </div>

  </div>
);

const App = () => (
  <div>
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#who-are-we">Who Are We</a>
      <a href="#our-covenant">Our Covenant</a>
      <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
    </div>
    <Cover />
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/home' component={Main}/>
      <Route path='/who-are-we' component={WhoAreWe}/>
      <Route path='/our-covenant' component={OurCovenant}/>
    </Switch>
    <Footer />
  </div>
);


export default App;

