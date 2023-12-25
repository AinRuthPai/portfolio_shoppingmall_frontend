import { useRef } from 'react';
import { LinkDefaultStyle } from './style/MainPage.style';
import { AccountContainer, AccountForm } from './style/Login.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let emailRef: any = useRef();
    let passwordRef: any = useRef();
    const navigate = useNavigate();

    function handleLoginForm(event: any) {
        event.preventDefault();

        // 각각의 input의 현재 값을 저장
        let emailValue = emailRef.current.value;
        let passwordValue = passwordRef.current.value;

        // 이메일, 비밀번호 둘 중 하나의 input이 비워져 있는지 확인
        if (!emailValue || !passwordValue) {
            alert('이메일이나 비밀번호를 입력해주세요.');
        } else {
            axios
                .post('http://localhost:5000/api/users/login', {
                    email: emailValue,
                    password: passwordValue,
                })
                .then((res) => {
                    // console.log(res.data.token);
                    console.log(res.data);
                    navigate('/shoeshop/');
                })
                .catch((error) => {
                    console.log(`Login Error : ${error}`);
                });
        }
    }

    return (
        <>
            <AccountContainer>
                <h2>Login Account</h2>
                <AccountForm>
                    <input type='text' placeholder='email' ref={emailRef} />
                    <input type='password' placeholder='password' ref={passwordRef} />
                    <button onClick={handleLoginForm}>로그인</button>
                </AccountForm>
                <footer>
                    <span>{`아직 계정이 없으신가요?`} </span>
                    <LinkDefaultStyle to='/shoeshop/signup'>회원가입</LinkDefaultStyle>
                </footer>
            </AccountContainer>
        </>
    );
}
