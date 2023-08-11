import { useRef } from "react";
import axios from "axios";
import { LinkDefaultStyle } from "./MainPage";
import { FormContainer, FormStyle } from "./Login";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  let emailRef: any = useRef();
  let nameRef: any = useRef();
  let passwordRef: any = useRef();
  const navigate = useNavigate();

  function handleSignUpForm(event: any) {
    event.preventDefault();

    // 각각 input의 현재 값을 변수에 저장
    let emailValue = emailRef.current.value;
    let nameValue = nameRef.current.value;
    let passwordValue = passwordRef.current.value;

    // 이메일 형식 검사
    const emailCheck = /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/;

    // input 값이 전부 채워져 있을 때
    if (emailValue && nameValue && passwordValue) {
      // 이메일 형식 검사를 통과할 때
      if (emailCheck.test(emailValue)) {
        axios
          .post("http://localhost:5000/api/users/register", {
            email: emailValue,
            name: nameValue,
            password: passwordValue,
          })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "회원 가입이 완료되었습니다!",
            });
            console.log(res);
            navigate("/shoeshop/login");
          })
          .catch((error) => {
            console.log(`Login Error : ${error}`);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "이메일을 정확히 입력해주세요. or 중복된 이메일입니다.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "빈 칸을 모두 작성해주세요.",
      });
    }
  }

  return (
    <FormContainer>
      <FormStyle>
        <input type='email' placeholder='email' ref={emailRef} />
        <input type='text' placeholder='name' ref={nameRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button onClick={handleSignUpForm}>회원가입</button>
        <div>
          <span>{`이미 계정이 있나요?`} </span>
          <LinkDefaultStyle to='/shoeshop/login'>로그인하기</LinkDefaultStyle>
        </div>
      </FormStyle>
    </FormContainer>
  );
}
