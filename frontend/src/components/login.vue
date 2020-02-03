<template>
    <div class="kd-content-wrap">
        <div class="kd-txt-center kd-container-650">
            <span class="kd-logo"><router-link to="/">JoinLife</router-link></span>
        </div>
        <div class="kd-container-650 kd-login-box">
            <h3 class="kd-login-tit">로그인</h3>
            <div class="kd-login-inputs">
                <input type="text" id="userId" placeholder="이메일을 입력해주세요.">
                <label for="userId"></label>
                <input type="password" id="userPwd" placeholder="비밀번호를 입력해주세요.">
                <label for="userPwd"></label>
            </div>
            <div class="kd-login-btns">
                <button type="button" class="kd-login-btn">로그인</button>

            </div>
        </div>
    </div>
</template>