
const Layout = (props) => {
  
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
  
          :root{

            --test-background : #ff00000;

            --primary-background : #4343a8;
            --primary-page-background : #f0f0f0;

            --primary-error-colour : red;
            --primary-error-background : white;
            
            --primary-warning-colour : yellow;
            --primary-warning-background : green;
          }
  
          body {
            background-color: #f0f0f0;
            
          }

          .page-layout {
            display: grid;
            grid-template-columns: 4rem auto;
          }

          .page {
            grid-column: 2 / 3;
            padding-left: 3rem;
          }

          .container {
            width: 80vw;
            margin: auto;
          }

        `}
        </style>
      </div>
    )
  }

  export default Layout