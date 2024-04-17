<template>
  <div class="container">
      <div>
          <h1>Общая информация</h1>
          <div class="form-group">
              <label for="firstName">Фамилия *</label>
              <input type="text" class="form-control" id="firstName" v-model="user.firstName" :class="{ 'is-invalid': submitted && !$v.user.firstName.required }" />
              <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">Обязательное поле</div>
          </div>
          <div class="form-group">
              <label for="lastName">Имя *</label>
              <input type="text" class="form-control" id="lastName" v-model="user.lastName" :class="{ 'is-invalid': submitted && !$v.user.lastName.required }" />
              <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Обязательное поле</div>
          </div>
          <div class="form-group">
              <label for="patronymic">Отчество</label>
              <input type="text" class="form-control" id="patronymic" v-model="user.patronymic"/>
          </div>
          <div class="form-group">
              <label for="birthDate">Дата рождения</label>
              <input type="date" class="form-control" id="birthDate" v-model="user.birthDate"/>
          </div>
          <div class="form-group">
              <label for="phoneNumber">Номер телефона *</label>
              <input type="tel" class="form-control" id="phoneNumber" v-model="user.phoneNumber" placeholder="+7 (###) ###-##-##"/>
          </div>
          <div class="form-group">
              <label>Пол</label>
              <div class="d-flex"> 
                  <input type="radio" id="male" v-model="user.gender" value="male">
                  <label for="male">Мужчина</label>
                  <input type="radio" id="female" v-model="user.gender" value="female">
                  <label for="female">Женщина</label>
              </div>
          </div>
          <div class="form-group">
            <label for="clientGroups">Группа клиентов *</label>
            <select multiple class="form-control" id="clientGroups" v-model="selectedClientGroups">
              <option value="VIP">VIP</option>
              <option value="Проблемные">Проблемные</option>
              <option value="ОМС">ОМС</option>
            </select>
          </div>        
          <div class="form-group">
              <label for="attendingDoctor">Лечащий врач</label>
              <select class="form-control" id="attendingDoctor" v-model="user.attendingDoctor">
                  <option value="Иванов">Иванов</option>
                  <option value="Захаров">Захаров</option>
                  <option value="Чернышева">Чернышева</option>
              </select>
          </div>
          <div class="form-group d-flex align-items-center">
            <div>
              <input type="checkbox" id="noSMS" v-model="user.noSMS">
              <label for="noSMS" class="ml-2">Не отправлять СМС</label>
            </div>
          </div>
      </div>
      <div >
          <h1>Адрес</h1>
          <div class="form-group">
              <label for="index">Индекс</label>
              <input type="text" class="form-control" id="index" v-model="user.address.index"/>
          </div>
          <div class="form-group">
              <label for="country">Страна</label>
              <input type="text" class="form-control" id="country" v-model="user.address.country"/>
          </div>
          <div class="form-group">
              <label for="region">Область</label>
              <input type="text" class="form-control" id="region" v-model="user.address.region"/>
          </div>
          <div class="form-group">
              <label for="city">Город*</label>
              <input type="text" class="form-control" id="city" v-model="user.address.city" :class="{ 'is-invalid': submitted && !$v.user.address.city.required }" />
              <div v-if="submitted && !$v.user.address.city.required" class="invalid-feedback">Обязательное поле</div>
          </div>
          <div class="form-group">
              <label for="street">Улица</label>
              <input type="text" class="form-control" id="street" v-model="user.address.street"/>
          </div>
          <div class="form-group">
              <label for="house">Дом</label>
              <input type="text" class="form-control" id="house" v-model="user.address.house"/>
          </div>
      </div> 
      <div>
          <h1>Паспорт</h1>
          <div class="form-group">
              <label for="passportType">Тип документа *</label>
              <select class="form-control" id="passportType" v-model="user.passport.type" :class="{ 'is-invalid': submitted && !$v.user.passport.type.required }">
                  <option value="Паспорт">Паспорт</option>
                  <option value="Свидетельство о рождении">Свидетельство о рождении</option>
                  <option value="Вод. удостоверение">Вод. удостоверение</option>
              </select>
              <div v-if="submitted && !$v.user.passport.type.required" class="invalid-feedback">Обязательное поле</div>
          </div>
          <div class="form-group">
              <label for="passportSeries">Серия</label>
              <input type="text" class="form-control" id="passportSeries" v-model="user.passport.series"/>
          </div>
          <div class="form-group">
              <label for="passportNumber">Номер</label>
              <input type="text" class="form-control" id="passportNumber" v-model="user.passport.number"/>
          </div>
          <div class="form-group">
              <label for="issuedBy">Кем выдан</label>
              <textarea class="form-control" id="issuedBy" v-model="user.passport.issuedBy"></textarea>
          </div>
          <div class="form-group">
              <label for="issueDate">Дата выдачи</label>
              <input type="date" class="form-control" id="issueDate" v-model="user.passport.issueDate"/>
          </div> 
      </div> 
      <div class="center">
        <button type="button" class="btn btn-primary" @click="submitClick()">Сохранить</button>
      </div>
      <div class="invalid-feedback">
        <span>*Поле обязательное для заполнения</span>
      </div>
  </div>
</template>


<script>
import { required} from "vuelidate/lib/validators";

export default { 
 
  data() {
      return {
          user: {
              firstName: '',
              lastName: '',
              patronymic: '',
              birthDate: '',
              phoneNumber: '',
              gender: '',
              clientGroups: [],
              attendingDoctor: '',
              noSMS: false,
              address: {
                  index: '',
                  country: '',
                  region: '',
                  city: '',
                  street: '',
                  house: '' 
              },
              passport: {
                  type: '',
                  series: '',
                  number: '',
                  issuedBy: '',
                  issueDate: ''
              }
          },
          submitted: false
      }
  },
  validations: {
      user: {
          firstName: { required },
          lastName: { required },
          patronymic: {}, 
          birthDate: {},
          phoneNumber: { required },
          gender: {},
          clientGroups: { required },
          attendingDoctor: {},
          noSMS: {},
          address: {
              index: {},
              country: {},
              region: {},
              city: { required },
              street: {},
              house: {}
          },
          passport: {
              type: { required },
              series: {},
              number: {},
              issuedBy: {},
              issueDate: {}
          }
      }
  },
  methods:{
      submitClick(){
          this.submitted = true;
          this.$v.$touch();
          if (this.$v.$invalid) {
              return;
          }
          // Здесь вы можете добавить логику для отправки данных
      }
  }
}
</script>

<style scoped>
.invalid-feedback{
  color: #EB5757;
  margin: 10px 0 0 0;
}

.text-center {
  text-align: center;
}

.d-flex {
  display: flex;
  align-items: center;
}

.form-group{
  margin-right: 10px;
}

.d-flex label{
  margin: 0 10px 0 0;
}

.d-flex input{
  margin: 0;
}
</style>
