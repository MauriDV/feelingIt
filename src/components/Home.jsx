import '../styles/Home.css';
import loginpic from '../assets/loginpic.png';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import plant3 from '../assets/plant3.png';
import plant4 from '../assets/plant4.png';

function Home() {
  return (
    <div>
        <main>
            <div class='img-container'>
                <div class='img-phone'>
                    <img src={loginpic} alt="jeje"/>
                </div>
                <div class='img-plant-1'>
                    <img src={plant1} alt=""/>
                </div>
                <div class='img-plant-2'>
                    <img src={plant2}alt=""/>
                </div>
                <div class='img-plant-3'>
                    <img src={plant3} alt=""/>
                </div>
                <div class='img-plant-4'>
                    <img src={plant4} alt=""/>
                </div>
            </div>
            <div class='login'>
                <div class='login-form'>
                    <h1>Login de usuario</h1>
                    <div class='user-data'>
                        <form action="../form-result.php" target="_blank">
                            <p>
                                <input type="text" name="username" placeholder="Nombre de usuario"/>
                                <input type="password" name="password" placeholder="Contraseña"/>
                                <input type="submit" value="login"/>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}

export default Home;