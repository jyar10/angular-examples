# Angular Reactive Forms: Deep Dive

## What is ReactiveFormsModule?

`ReactiveFormsModule` is an Angular module that provides a **model-driven** approach to building forms. It allows you to define form structure, state, and validation entirely within your component class — offering fine-grained control.

Unlike `FormsModule` (template-driven forms), Reactive Forms are **explicit and predictable**, especially good for complex or dynamic forms.

---

## Key Building Blocks of Reactive Forms

### 1. ReactiveFormsModule

- Must be imported in your standalone component or NgModule.
- Enables usage of reactive directives like `formGroup`, `formControlName`.

```ts
imports: [ReactiveFormsModule]
```

2. FormBuilder
Angular service that simplifies form construction syntax.

Helps create FormGroup and FormControl instances more concisely.

```ts
constructor(private fb: FormBuilder) {}
```

3. FormGroup
A container for multiple FormControl instances.

```ts
Represents the entire form and tracks its overall validity and state.
this.contactForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  message: ['', Validators.required]
});
```

4. FormControl
Tracks the value and validation state of a single form input.

Implicitly created by FormBuilder.group(...) above.

You can also create it manually like:

```ts
name = new FormControl('', Validators.required);
```

5. Validators
Functions that check a control's value and return errors if invalid.

Examples:

- Validators.required
- Validators.email
- Validators.minLength(5)

```ts
email: ['', [Validators.required, Validators.email]]
```

6. Template Binding
In the HTML template:

```ts
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <input formControlName="name" />
  <input formControlName="email" />
  <textarea formControlName="message"></textarea>
  <button type="submit">Send</button>
</form>

```

7. Handling Form Submission
In the component:
```ts
onSubmit() {
  if (this.contactForm.valid) {
    console.log(this.contactForm.value);
  }
}
```