<template>
    <div>
        <form @submit.prevent="onSubmit" id="signup-form" class="mb-5">
            <div class="row">
                <div class="col-12 form-group text-start field-item mb-3 field__header">
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-0 ">
                    <div class="box  box1 p-3">
                        <h1 class="text__title">Thông tin liên hệ</h1>
                        <p>Thiết kế website liên hệ đặt quảng cáo google.com</p>
                    </div>
                    <hr />
                    <p class="text-danger p-3">*Bắt buộc</p>
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-0">
                    <div class="box p-3">
                        <label class="col-form-label  mb-3">Tên<span class="text-danger">*</span></label>
                        <input type="text" class="form-control border-0 border-bottom"
                            placeholder="câu trả lời của bạn" v-model.trim="contact.name"
                            v-bind:class="{ 'is-invalid': errors.name }" autocomplete="on" autofocus="on" />
                        <div class="invalid-feedback">
                            {{ errors.name }}
                        </div>
                    </div>
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-3">
                    <label class="col-form-label mb-3">Email<span class="text-danger">*</span></label>
                    <input type="email" name="email" class="form-control border-0 border-bottom"
                        placeholder="câu trả lời của bạn" autocomplete="on" v-model.trim="contact.email"
                        v-bind:class="{ 'is-invalid': errors.email }">
                    <div class="invalid-feedback">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-3">
                    <label class="col-form-label mb-3">Địa chỉ<span class="text-danger">*</span></label>
                    <input type="text" class="form-control border-0 border-bottom full__width"
                        placeholder="câu trả lời của bạn" v-model.trim="contact.address"
                        v-bind:class="{ 'is-invalid': errors.address }">
                    <div class="invalid-feedback">
                        {{ errors.address }}
                    </div>
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-3">
                    <label class="col-form-label mb-3">Số điện thoại <span class="text-danger">*</span></label>
                    <input type="number" class="form-control border-0 border-bottom"
                        placeholder="câu trả lời của bạn" v-model.trim="contact.phone"
                        v-bind:class="{ 'is-invalid': errors.phone }">
                    <div class="invalid-feedback">
                        {{ errors.phone }}
                    </div>
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-3">
                    <label class="col-form-label mb-3">Website</label>
                    <input type="text" class="form-control border-0 border-bottom "
                        placeholder="câu trả lời của bạn" v-model.trim="contact.webside">
                </div>
                <div class="col-12 form-group text-start field-item mb-3 p-3">
                    <label class="col-form-label mb-3">Ghi chú</label>
                    <textarea type="text" class="form-control border-0 border-bottom full__width"
                        placeholder="câu trả lời của bạn" v-model.trim="contact.note"
                        v-bind:class="{ 'is-invalid': errors.note }"></textarea>
                    <div class="invalid-feedback">
                        {{ errors.note }}
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center p-0">
                    <button class="btn btn-vue" type="submit" :disabled="isLoading">{{ isLoading ? 'loading' : 'gửi' }}
                        <div class="spinner-grow spinner-grow-sm" v-if="isLoading" role="status">
                        </div>
                        <div class="spinner-grow spinner-grow-sm" v-if="isLoading" role="status">
                        </div>
                    </button>
                    <button class="btn-empty" :disabled="isLoading" type="button" @click="resetForm">xóa hết
                        câu
                        trả lời</button>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import REX from '../components/constant/constant'
export default {
    name: 'FormRegister',
    data() {
        return {
            errors: {
                name: '',
                email: '',
                address: '',
                phone: '',
                webside: '',
                note: ''
            },
            contact: {
                name: '',
                email: '',
                address: '',
                phone: '',
                webside: '',
                note: ''
            },
            isLoading: false,
        }
    },
    methods: {
        validate() {
            let isValid = true
            const { NAME_REX, EMAIL_REX, PHONE_REX, } = REX
            this.errors = {
                name: '',
                email: '',
                address: '',
                phone: '',
                webside: '',
                note: ''
            }

            if (!NAME_REX.test(this.contact.name)) {
                this.errors.name = 'ten qua ngan vui lòng nhập tên !!'
            }
            if (!this.contact.name) {
                this.errors.name = 'vui lòng nhập tên!!'
            }

            if (!EMAIL_REX.test(this.contact.email)) {
                this.errors.email = 'email không hợp lệ!'
            }
            if (!this.contact.email) {
                this.errors.email = 'vui lòng nhập email!!'
            }

            if (!this.contact.address) {
                this.errors.address = 'vui lòng nhập địa chỉ!!'
            }
            if (!PHONE_REX.test(this.contact.phone) || this.contact.phone < 0) {
                this.errors.phone = 'Số điện thoại của bạn không đúng định dạng!'
            }
            if (!this.contact.phone) {
                this.errors.phone = 'vui lòng nhập số điện thoại!!'
            }
            if (this.contact.note.length > 150) {
                this.errors.note = 'ghi chú không quá 150 kí tự!'
            }
            for (const key in this.errors) {
                if (this.errors[key] !== '') {
                    return false
                }
            }
            return isValid
        },
        resetForm() {
            this.contact = {
                name: '',
                email: '',
                address: '',
                phone: '',
                webside: '',
                note: ''
            }

        },
        onSubmit() {
            if (this.validate()) {
                let contactList = localStorage.getItem('contact') ? JSON.parse(localStorage.getItem('contact')) : [];
                this.isLoading = true;
                setTimeout(() => {
                    localStorage.setItem('contact', JSON.stringify([...contactList, this.contact]))
                    this.isLoading = false
                    this.resetForm()
                    this.$toast.success(`đăng kí thành công!`, {
                        // override the global option
                        position: "top-right",
                    });
                }, 3000)
            } else {
                for (const key in this.errors) {
                    if (this.errors[key] !== '') {
                        this.$toast.error(`${this.errors[key]}!`, {
                            // override the global option
                            position: "bottom-right",
                        });
                    }
                }

            }
        }
    }
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
