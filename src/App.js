import React, {Component} from 'react';
import logo from './img/logo1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/*<div class="cover" style={ {backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' } }>*/}
        <div className="cover">
          <div className="header-title-container">
            <img src={logo} alt="logo" height="150px" width="125px"/>
            <h1>GOD'S LIGHT SYDNEY</h1>
            <h4>“You are the light of the world.” (Matthew 5: 14)</h4>
          </div>
        </div>
        <div className="wrapper">
          <header className="panel1">
            <h2>WHO ARE WE</h2>
            <div className="edge-title-area">
              <p className="edge-title">
                We are a community of disciples in mission. Having received the call in to be “the salt of the earth and
                light of the world,” we have come to be known
                as God’s Light.
              </p>
            </div>
            <button
              type="button"
              className="btn"
            >
              Read More
            </button>

            {/*<p>*/}
            {/*Having received the call in to be “the salt of the earth and light of the world,” we have come to be known*/}
            {/*as God’s Light. Symbolised by the “bridge” that has become an icon for Sydney, God’s Light sees itself as*/}
            {/*being a B-R-I-D-G-E.*/}
            {/*</p>*/}

            {/*<p>*/}
            {/*We acknowledged that we were Broken individuals, Restored by Christ, and now living In the Spirit as*/}
            {/*Disciples with*/}
            {/*God being at the centre of our lives. As such, we are called to be Evangelists - witnesses to God’s work*/}
            {/*in our individual lives. Together we shall bring God’s Light to others.*/}
            {/*</p>*/}
          </header>

          <header className="panel2"><h2>Our Covenant</h2>
            <div className="edge-title-area">
              <p className="edge-title">In Christ, God has made a covenant with God's Light, a covenant which God's
                Light members have joyfully
                received and entered into by faith and baptism. </p>
            </div>

            <button
              type="button"
              className="btn"
            >
              Read More
            </button>

            {/*<p>*/}
            {/*He has called God's Light members to express in a special way this*/}
            {/*covenant established by His Son, Jesus, through His sacrifice on the cross. He has joined the members*/}
            {/*together in the bond of steadfast love and faithfulness, and has given them a particular call and*/}
            {/*mission.*/}
            {/*</p>*/}
            {/*<p>In response, God's Light members desire:</p>*/}

            {/*<ul>*/}
            {/*<li>To love and serve Him in lives of daily prayer and service;</li>*/}
            {/*<li>To praise and worship Him always;</li>*/}
            {/*<li>To ever seek His face;</li>*/}
            {/*<li>To know and serve the truth of His Word in the joy, peace, and love of the Holy Spirit;</li>*/}
            {/*<li>To believe what He speaks to God's Light and to be obedient to the truth of his Word and the guidance*/}
            {/*of*/}
            {/*His Spirit;*/}
            {/*</li>*/}
            {/*<li>To offer hospitality to those whom He sends to God's Light;</li>*/}
            {/*<li>To widen our hearts to receive those he adds to God's Light, and</li>*/}
            {/*<li>To carry out the mission that He is entrusting to God's Light.</li>*/}
            {/*</ul>*/}
          </header>

          <header className="panel3">
            <h2> Announcements</h2>
            <div className="edge-title-area">
              <p className="edge-title">
                Easter celebration would be this Sunday 1st April at 11:30am at Epping.
              </p>
            </div>
          </header>
          <header className="panel4">
            <h2> Events </h2>
            <div className="edge-title-area">
                <ul>
                  <li>1st April - Easter Celebration</li>
                  <li>6th/7th April - Bible Timeline</li>
                </ul>
            </div>
          </header>
          <header className="panel5">
            <h2> Contact Us </h2>
            <div className="edge-title-area">
            <p className="edge-title">
              Please email <a href="mailto:jawo@ginebra.com?Subject=Ginebra" style={{color: 'black'}}>Robert
              Jaworski</a> for more info:
            </p>
              </div>
          </header>


        </div>
      </div>
    );
  }
}

export default App;
