<template>
  <div>
    <p>count: {{count}}</p><br>
    <p>counts: {{counts}}</p><br>
    <p>firsName: {{firsName}}</p><br>
    <p>jsonData: {{jsonData}}</p><br>
    <p>token: {{token}}</p><br>
    <p>roles: {{roles}}</p><br>
    <p>isMasterAccount: {{isMasterAccount}}</p><br>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count: '',
      counts: '',
      firsName: '',
      jsonData: '',
      token: '',
      roles: '',
      isMasterAccount: '',
    }
  },
  mounted(){
    const { count, counts, firsName, token, roles, isMasterAccount, jsonData } = this.$store.getters
    this.count = count;
    this.firsName = firsName;
    this.counts = counts;
    this.token = token;
    this.roles = roles;
    this.isMasterAccount = isMasterAccount;
    this.jsonData = JSON.stringify(jsonData);
  }
}
</script>

<style>

</style>