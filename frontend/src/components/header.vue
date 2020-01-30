<template>
  <div class="kd-header-wrap kd-mgn-b30">
    <header class="kd-height-80 kd-flex-y-center kd-mgn-b50">
      <div class="kd-container-1170 kd-header">
        <section class="kd-header-left">
          <span class="kd-logo kd-mgn-r10">JoinLife</span>
        </section>
        <section class="kd-header-right">
          <a href="#" class="kd-font15 kd-mgn-r10" v-on:click="linkAccess('login')">로그인</a>
          <a href="#" class="kd-font15 kd-btn kd-bg-purple kd-color-white" v-on:click="linkAccess('signUp')">회원가입</a>
        </section>
      </div> 
    </header>
    <div class="kd-search kd-container-650">
        <p class="kd-font17 kd-txt-center">동아리 개설, 구인, 구직 새로운 프로그램을 체험하세요</p>
        <p class="kd-font40 kd-txt-center kd-mgn-b10">Join Life 동아리 구인 홈페이지</p>
        <div>
            <section class="kd-input-icon">
            <input type="text" class="kd-w100 kd-height-60" placeholder="검색어를 입력하세요!!">
            <i class="material-icons">search</i>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods : {
      linkAccess : function(link){  //링크이동
        let router = this.$router;
          router.push({
              name : link,
          })
      } 
    }
  }
</script>