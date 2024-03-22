import Link from 'next/link';

function Home() {
    return (
        <div>
            <Link href="/">
                <button id="b">BACK</button>
            </Link>

            <form action="" method="post" enctype="multipart/form-data">

                <label for="">UPLOAD IMAGE:</label>
                <input type="file" name="photo"/><br/>

                <h1>TEACHER REGISTRATION PAGE</h1>
                <label for="">ID :</label>
                <input type="text" name="name1"/><br/>
                <label for="">NAME :</label>
                <input type="text" name="name2"/><br/>
                <label for="">DEPARTMENT:</label>
                <input type="text" name="name3"/><br/>
                <label for="">QUALIFICATIONS:</label>
                <input type="text" name="name4"/><br/>
                <label for="">EMAIL:</label>
                <input type="text" name="name5"/><br/>
                <label for="">PHONE NUMBER:</label>
                <input type="number" name="name6"/><br/>
                <label for="">USERNAME:</label>
                <input type="text" name="name7"/><br/>
                <label for="">PASSWORD:</label>
                <input type="password" name="name8"/><br/>
                <label for="">CONFIRM PASSWORD:</label>
                <input type="password" name="name9"/><br/>
                <input id="ab" type="submit" value="submit"/>
                <Link href="trlogin.html">login</Link>
            </form>
        </div>
    );
}

export default Home;
