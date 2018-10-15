<template>
  <div class="feedback page">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="E-maili aadress:"
                    label-for="exampleInput1"
                    description="Me ei jaga sinu e-maili aadressi teiste osapooltega.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Sisesta e-mail">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Sinu nimi:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Sisesta oma ees- ja perenimi">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Kommentaar:"
                    label-for="exampleInput3">
        <b-form-textarea id="exampleInput3"
                    type="textarea"
                    v-model="form.comment"
                    required
                    placeholder="Lisa kommentaar">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Saada</b-button>
      <b-button type="reset" variant="danger">Tühjenda</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "tagasiside",
  data() {
    return {
      form: {
        email: "",
        name: "",
        comment: null,
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      this.form.comment = "";
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/custom-bootstrap.scss";
</style>
