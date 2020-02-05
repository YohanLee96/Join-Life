<template>
    <div class="kd-content-wrap">
        <div class="kd-txt-center kd-container-650">
            <span class="kd-logo"><router-link to="/">JoinLife</router-link></span>
        </div>
        <div class="kd-container-650 kd-login-box">
            <h3 class="kd-login-tit">로그인</h3>
            <form @submit="onSubmit">
                <div class="kd-login-inputs">
                    <input type="text" id="userId" placeholder="이메일을 입력해주세요." v-model="uid">
                    <label for="userId"></label>
                    <input type="password" id="userPwd" placeholder="비밀번호를 입력해주세요." v-model="password">
                    <label for="userPwd"></label>
                </div>
                <div class="kd-login-btns">
                    <button type="submit" class="kd-login-btn">로그인</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({
            uid: '',
            password: ''
        }),
        methods: {
            onSubmit () {
                console.log(this.uid)
                console.log(this.password)
            }
        }
    }
</script>