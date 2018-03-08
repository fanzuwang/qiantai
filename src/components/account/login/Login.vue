<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="abc" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user_name">
                <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('abc')">提交</el-button>
                <el-button @click="resetForm('abc')">重置</el-button>
            </el-form-item>
        </el-form>
        </section>
    </div>
</template>

<script>
  export default {
         
     
         data() {
 
             return {
 
                 // 这里的字段要按照接口文档进行修改
                 ruleForm2: {
                     user_name: "",
                     password: ""
                 },
 
                 // 这里添加的校验规则, 每个字段可以加多个, 所以是个数组
                 rules2: {
                     user_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                     password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                 }
             };
         },
 
         methods: {
 
             login() {
                 // post请求的第二个参数是发送的数据, 这里直接把data里的表单对象传过去
                 this.$http.post(this.$api.login, this.ruleForm2).then((res) => {
                    //  console.log(res);
                     if(res.data.status==0){
                         this.$alert('登录成功','登录提示',{
                             confirmButtonText: '确定登录',
                             
                             callback:()=>{
                                 localStorage.setItem('user_name',res.data.message.user_name);
                                 this.$router.push({path:this.$route.query.next||'/goods/list'})
                             }
                         });
                     }else{
                         this.$alert(res.data.message);
                     }
                 });
             },
 
             // 登陆按钮方法
             // this.$refs用来获取页面中的元素或组件, 这里通过它拿到form表单组件, 调用validate方法, 给所有表单进行校验
             submitForm(formName) {
                 // validate传入一个回调, 如果valid为true, 证明通过校验, 否则不通过
                 this.$refs[formName].validate(valid => {
                     if (valid) {
                    // console.log(123132);
                     this.login();
                     } else {
                     this.$alert("账号或密码不合格!");
                     }
                 });
             },
 
             // 重置按钮方法
             resetForm(formName) {
                 this.$refs[formName].resetFields();
             }
         }
     };
</script>

<style scoped lang='less'>
    .login{
         background-color: aqua;
         height: 100%;  
    }
    section{
         width: 400px;
        margin: 0 auto;
        padding-right: 60px;
        padding-top: 30px;
        border: 2px solid #fff;
        border-radius: 5px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
   
</style>