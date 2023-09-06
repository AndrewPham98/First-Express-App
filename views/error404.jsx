const React = require('react')
const Def = require('./places/default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/blow-up-gunpla.jpeg" alt="gunpla pieces" />
                </div>
              <div>
              Photo by <a href="https://unsplash.com/@insungyoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">insung yoon</a> on <a href="https://unsplash.com/photos/O87H2Hb_0pM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
  
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
