const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/uc-gundam.jpg" alt="unicorn gundam" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@hkyu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hkyu Wu</a> on <a href="https://unsplash.com/photos/5Dh7rb6HB0A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

