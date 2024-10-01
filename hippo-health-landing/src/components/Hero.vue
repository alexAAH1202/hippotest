<template>
  <section class="hero">
    <h1>Welcome to Hippo Health</h1>
    <p>Revolutionizing healthcare with innovative solutions</p>
    <button>Get Started</button>
    <div class="signup-form">
      <h3>Stay Updated</h3>
      <form @submit.prevent="submitEmail">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Enter your email" 
          required
        >
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitEmail() {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', this.email);
      // Reset the email input
      this.email = '';
      // You might want to show a success message to the user
      alert('Thank you for signing up!');
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
.signup-form {
  margin-top: 20px;
}

.signup-form input {
  margin-right: 10px;
  padding: 5px;
}
</style>
