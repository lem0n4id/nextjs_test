import Link from 'next/link'

export default function Home() {
  return (
    <>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          background-color: rgb(95, 181, 218);
          box-sizing: border-box;
          text-align: center;
          background-image: url(/1.png);
        }

        h1 {
          color: #000000;
          margin-top: 50px; /* Adjust the margin as needed */
        }

        div {
          width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 250px; /* Makes the container take the full viewport height */
          margin-top: 150px;
          margin-left: 500px;
          background-color: rgb(243, 244, 215);
          border-radius: 10px;
          box-shadow: 5px 5px 5px 5px rgb(29, 111, 146);
        }

        button {
          height: 200px;
          width: 200px;
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          text-decoration: none;
          color: #dee856;
          background-color: rgb(137, 228, 67);
          border: none;
          border-radius: 5px;
          box-shadow: 20px black;
          box-shadow: 2px 2px 2px 2px rgb(106, 104, 104);
        }

        Link {
          margin-top: 100px;
          margin-top: 200px;
          text-decoration: none;
          color: #fff;
        }
        `}
      </style>
      <h1>STUDENT - TEACHER PORTAL</h1>
      <div>
        <Link href="/trreg"><button><span style={{ color: 'white' }}>TEACHER REGISTRATION</span></button></Link>
        <Link href="/stureg"><button><span style={{ color: 'white' }}>STUDENT REGISTRATION</span></button></Link>
      </div>
    </>
  );
}
