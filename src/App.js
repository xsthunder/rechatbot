import React, { Component } from 'react';

import ChatBot from './components/ChatBot';

import './app.pcss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  addMessage(obj) {
    this.setState({
      messages: [...this.state.messages, obj]
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <div className="info">
            <div className="info__center">
              <h1>React Chatbot</h1>
              <p>
                This is a ready-made simple chat bot component, to develop your own chat bots for
                the site.
              </p>
              <div className="info__buttons">
                <a
                  href="https://github.com/Archakov06/react-chatbot#usage"
                  className="button button--doc"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/Archakov06/react-chatbot"
                  className="button button--git"
                >
                  GitHub
                </a>
              </div>
              <div className="info__github">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=Archakov06&repo=react-chatbot&type=star&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="125px"
                  height="30px"
                />
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=Archakov06&repo=react-chatbot&type=fork&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="125px"
                  height="30px"
                />
              </div>
            </div>
          </div>
          <ChatBot
            welcomeMessage={0}
            delay={800}
            messages={messages}
            onSendMessage={this.addMessage.bind(this)}
            avatars={{
              user: 'https://pp.userapi.com/c834104/v834104145/5ca01/AsZGGgLNr-4.jpg',
              bot: 'https://pp.userapi.com/c631216/v631216247/21c8b/qF8SubyAdsU.jpg'
            }}
            options={[
              {
                text: 'Welcome, to React ChatBot!',
                handle: 'welcome',
                buttons: [
                  {
                    label: 'Help',
                    value: 'help'
                  },
                  {
                    label: 'Docs',
                    value: 'docs'
                  },
                  {
                    label: 'Github',
                    callback: () => {
                      global.location.href = 'https://github.com/Archakov06/react-chatbot';
                    }
                  }
                ]
              },
              {
                handle: 'docs',
                buttons: [
                  {
                    label: 'Open documentation',
                    callback: () => {
                      global.location.href = 'https://github.com/Archakov06/react-chatbot#usage';
                    }
                  }
                ]
              },
              {
                handle: 'cats',
                buttons: [
                  {
                    label: 'I need more cats!!!',
                    callback: () => {
                      global.location.href =
                        'https://www.google.ru/search?q=sweet+cats&newwindow=1&source=lnms&tbm=isch';
                    }
                  }
                ],
                image: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg'
              },
              {
                text: (
                  <div>
                    <ul>
                      <li>
                        Get help information — "<b>help</b>".
                      </li>
                      <li>
                        Get docs link — "<b>docs</b>".
                      </li>
                      <li>
                        Welcome message — "<b>welcome</b>".
                      </li>
                      <li>
                        Get cat image — "<b>cats</b>".
                      </li>
                      <li />
                    </ul>
                    <img src="http://www.iconhot.com/icon/png/bunch-cool-bluish-icons/512/info-blog.png" />
                  </div>
                ),
                handle: 'help'
              },
              {
                text: 'Sorry, I can not understand what you mean.',
                handle: null
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
