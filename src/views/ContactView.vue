<template>
  <div
    class='bg-root-color-litledark dark:bg-slate-50 text-gray-100 shadow px-8 py-12'>
    <div
      class='animate__animated animate__fadeInUp max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-2xl'>
      <div class='flex flex-col justify-between'>
        <div>
          <h2 class='text-4xl lg:text-5xl font-bold leading-tight'>
            Vamos conversar um pouco!
          </h2>
          <div class='text-gray-700 mt-8 text-lg'>Entre em contato comigo</div>

          <small></small>
          <ul class='mt-10 list-none'>
            <li class='text-2xl mb-2'>
              <a
                href='https://www.linkedin.com/in/coelho-luan/'
                target='_blank'>
                <font-awesome-icon icon='fa-brands fa-linkedin' size='xl' />
                Linkedin
              </a>
            </li>
            <li class='text-2xl mb-2'>
              <a href='https://t.me/luancoelhoS' target='_blank'>
                <font-awesome-icon icon='fa-brands fa-telegram' size='xl' />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <span class='uppercase text-sm text-gray-600 font-bold'
          >Nome Completo</span
          >
          <input
            v-model='emailRequest.ownerRef'
            class='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            type='text'
            required />
        </div>
        <div class='mt-8'>
          <span class='uppercase text-sm text-gray-600 font-bold'>Email</span>
          <input
            v-model='emailRequest.subject'
            class='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            type='email'
            required />
        </div>
        <div class='mt-8'>
          <span class='uppercase text-sm text-gray-600 font-bold'
          >mensagem</span
          >
          <textarea
            v-model='emailRequest.text'
            class='w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            required />
        </div>
        <div class='mt-8'>
          <button
            @click='sendEmail'
            :disabled='desableButton'
            class='uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-blue-800'>
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import EmailRequest from '@/model/EmailRequest';
  import toast from '@/model/message/message';
  import { MessageType } from '@/model/message/messageType';
  import axios from 'axios';
  import { defineComponent } from 'vue';

  export default defineComponent({
    title: 'Contato',
    data() {
      return {
        emailRequest: {
          emailTo: 'luancoelho.dev@gmail.com',
          emailType: 'DEFAULT'
        } as EmailRequest,
        desableButton: false,
        toast
      };
    },
    methods: {
      sendEmail(): void {
        this.desableButton = true;
        axios
          .post(
            'https://ms-microservice.herokuapp.com/mse/send-email',
            this.emailRequest
          )
          .then(() => {
            this.toast(MessageType.SUCESS, 'Mensagem enviada com sucesso!');
          })
          .catch(() => {
            this.toast(
              MessageType.DANGER,
              'Algo de errado aconteceu. Tente novamente mais tarde.'
            );
          })
          .finally(() => {
            this.cleanForm();
            this.desableButton = false;
          });
      },
      cleanForm() {
        this.emailRequest = {} as EmailRequest;
      }
    }
  });
</script>

<style scoped></style>
