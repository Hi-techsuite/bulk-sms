import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  const [info, setInfo] = useState({
    from: '12345',
    message: '',
  });

  const setData = (e) => {
    setInfo({
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = () => {
    alert('response');
  };

  return (
    <div>
      <Header />

      <section className="section-main">
        <main className="main">
          <div>
            <div className="form-group">
              <label htmlFor="from"> From: </label>
              <input
                id="from"
                type="text"
                name="from"
                placeholder="from"
                value={info.from}
                onChange={(e) => setData(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="heading"> Heading: </label>
              <input id="heading" type="text" placeholder="heading" />
            </div>

            <div className="form-group">
              <label htmlFor="numbers"> Number(s): </label>
              <input type={'text'} />
            </div>

            <div className="form-group">
              <label htmlFor="message"> Message body: </label>
              <input
                id="message"
                type={'text'}
                name="message"
                value={info.message}
                onChange={(e) => setData(e)}
              />
            </div>

            <div>
              <button>Cancel</button>
              <button onClick={sendMessage}> Preview</button>
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
