document.addEventListener("DOMContentLoaded", () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./sw.js").catch(() => {
			// Ignore registration failures in environments without SW support.
		});
	}

	const i18n = {
		es: {
			pageLang: "es",
			pageTitleHome: "TrackFlow | Logistica B2B y Gestion de Almacenes",
			pageTitleReg: "Registro B2B | TrackFlow",
			brandAria: "Inicio TrackFlow",
			navContact: "Contacto",
			navRegister: "Registro B2B",
			heroTag: "Logistica B2B de alto rendimiento",
			heroTitle: "Tu operacion logística completa entre Los Angeles y Zaragoza, sin friccion.",
			heroDesc: "En TrackFlow almacenamos inventario, preparamos pedidos, coordinamos transportistas y gestionamos devoluciones para que las marcas de e-commerce escalen con control y visibilidad real.",
			heroCtaPrimary: "Comenzar onboarding",
			heroCtaSecondary: "Ver como trabajamos",
			whatTitle: "Que hacemos y por que elegir TrackFlow",
			whatDesc: "Somos el socio operativo de marcas B2B y e-commerce que necesitan velocidad, trazabilidad y consistencia. Unificamos procesos en dos paises, con datos compartidos y automatizaciones que reducen errores manuales en toda la cadena logística.",
			feature1Title: "Inventario unificado",
			feature1Desc: "Visibilidad de stock en tiempo real entre almacenes para evitar rupturas y ventas perdidas.",
			feature2Title: "Ultima milla optimizada",
			feature2Desc: "Seleccion de transportista segun coste, urgencia y rendimiento historico por ruta.",
			feature3Title: "Devoluciones inteligentes",
			feature3Desc: "Flujos de aprobacion y reacondicionamiento con reglas por cliente para ahorrar tiempo operativo.",
			benefitsTitle: "Beneficios clave para marcas y operaciones B2B",
			benefit1Title: "Escalabilidad",
			benefit1Desc: "Aumenta volumen de pedidos sin duplicar friccion operativa.",
			benefit2Title: "Control",
			benefit2Desc: "KPIs de entrega, coste y devoluciones centralizados en un solo panel.",
			benefit3Title: "Experiencia cliente",
			benefit3Desc: "Seguimiento claro y respuesta rapida para marcas y destinatarios finales.",
			benefit4Title: "Confianza",
			benefit4Desc: "Procesos estandarizados y trazables en Estados Unidos y Espana.",
			contactTitle: "Contacta a nuestro equipo B2B",
			contactDesc: "Comparte tu operacion y te proponemos una estrategia de fulfillment y transporte alineada a tus objetivos.",
			contactAria: "Informacion de contacto de TrackFlow",
			contactEmailLabel: "Email:",
			contactPhoneLabel: "Telefono:",
			contactOfficeLabel: "Sedes:",
			contactFormTitle: "Solicita una llamada comercial",
			legendContactDetails: "Datos de contacto",
			legendRequestDetails: "Detalles de la solicitud",
			labelName: "Nombre",
			labelPhone: "Telefono",
			labelEmail: "Correo electronico",
			labelMessage: "Mensaje",
			placeholderName: "Tu nombre completo",
			placeholderPhone: "+34 600 000 000",
			placeholderEmail: "nombre@empresa.com",
			placeholderMessage: "Describe tu operacion y tus necesidades",
			buttonSubmitRequest: "Enviar solicitud",
			buttonReset: "Limpiar formulario",
			footerMain: "TrackFlow Tech | Logistica y gestion de almacenes para marcas B2B.",
			footerCopy: "© 2026 TrackFlow. Todos los derechos reservados.",
			backToSite: "Volver al sitio",
			registrationTag: "Registro empresarial",
			registrationTitle: "Formulario de alta para clientes B2B",
			registrationDesc: "Completa los datos para analizar tu operacion y proponerte una configuracion logistica optima en Los Angeles o Zaragoza.",
			formTitle: "Datos de registro",
			legendPersonalInfo: "Informacion personal",
			legendBusinessInfo: "Informacion de marca",
			legendLogisticsInfo: "Informacion logistica",
			labelFullName: "Nombre completo",
			placeholderFullName: "Tu nombre y apellidos",
			labelBrand: "Marca o empresa",
			placeholderBrand: "Nombre comercial",
			labelSector: "Sector",
			optionSectorDefault: "Selecciona un sector",
			optionSectorFashion: "Moda",
			optionSectorBeauty: "Belleza y cuidado personal",
			optionSectorElectronics: "Electronica",
			optionSectorFood: "Alimentacion",
			optionSectorOther: "Otro",
			labelProductType: "Tipo de producto",
			placeholderProductType: "Ej: cosmetica, accesorios",
			labelAverageWeight: "Peso medio por pedido (kg)",
			placeholderAverageWeight: "1.5",
			labelSalesVolume: "Volumen de ventas mensual",
			optionSalesDefault: "Selecciona un rango",
			optionSales1: "Hasta 10.000 EUR/USD",
			optionSales2: "10.000 - 50.000 EUR/USD",
			optionSales3: "50.000 - 200.000 EUR/USD",
			optionSales4: "Mas de 200.000 EUR/USD",
			labelMonthlyOrders: "Cantidad de pedidos mensuales",
			placeholderMonthlyOrders: "500",
			legendLocation: "Ubicacion de operacion principal",
			locationLA: "Los Angeles",
			locationZGZ: "Zaragoza",
			labelShippingType: "Tipo de envio de preferencia",
			optionShippingDefault: "Selecciona una opcion",
			optionShippingAir: "Aereo",
			optionShippingLand: "Terrestre",
			optionShippingSea: "Maritimo",
			buttonSubmit: "Enviar formulario",
			validationField: "Este campo",
			validationRequired: "{label} es obligatorio.",
			validationName: "{label} debe incluir al menos 2 caracteres validos.",
			validationPhone: "{label} debe tener un formato valido.",
			validationEmail: "{label} no tiene un formato valido.",
			validationMessage: "{label} debe tener al menos 10 caracteres.",
			validationBrand: "{label} debe tener al menos 2 caracteres.",
			validationWeight: "{label} debe ser mayor a 0.",
			validationOrders: "{label} debe ser un entero mayor a 0.",
			statusError: "Todos los campos deben validarse nuevamente. Revisa los campos resaltados.",
			statusSuccess: "Formulario enviado correctamente. Nuestro equipo se pondra en contacto contigo."
		},
		en: {
			pageLang: "en",
			pageTitleHome: "TrackFlow | B2B Logistics and Warehousing",
			pageTitleReg: "B2B Registration | TrackFlow",
			brandAria: "TrackFlow Home",
			navContact: "Contact",
			navRegister: "B2B Registration",
			heroTag: "High-performance B2B logistics",
			heroTitle: "Your full logistics operation between Los Angeles and Zaragoza, friction-free.",
			heroDesc: "At TrackFlow, we store inventory, prepare orders, coordinate carriers, and handle returns so ecommerce brands can scale with control and real visibility.",
			heroCtaPrimary: "Start onboarding",
			heroCtaSecondary: "See how we work",
			whatTitle: "What we do and why choose TrackFlow",
			whatDesc: "We are the operations partner for B2B and ecommerce brands that need speed, traceability, and consistency. We unify processes in two countries with shared data and automations that reduce manual errors across the logistics chain.",
			feature1Title: "Unified inventory",
			feature1Desc: "Real-time stock visibility across warehouses to prevent stockouts and missed sales.",
			feature2Title: "Optimized last mile",
			feature2Desc: "Carrier selection based on cost, urgency, and historical route performance.",
			feature3Title: "Smart returns",
			feature3Desc: "Approval and reconditioning flows with client-specific rules to save operational time.",
			benefitsTitle: "Key benefits for B2B brands and operations",
			benefit1Title: "Scalability",
			benefit1Desc: "Increase order volume without multiplying operational friction.",
			benefit2Title: "Control",
			benefit2Desc: "Delivery, cost, and returns KPIs centralized in one dashboard.",
			benefit3Title: "Customer experience",
			benefit3Desc: "Clear tracking and fast responses for brands and end recipients.",
			benefit4Title: "Trust",
			benefit4Desc: "Standardized and traceable processes in the United States and Spain.",
			contactTitle: "Contact our B2B team",
			contactDesc: "Share your operation and we will propose a fulfillment and transportation strategy aligned with your goals.",
			contactAria: "TrackFlow contact information",
			contactEmailLabel: "Email:",
			contactPhoneLabel: "Phone:",
			contactOfficeLabel: "Offices:",
			contactFormTitle: "Request a commercial call",
			legendContactDetails: "Contact details",
			legendRequestDetails: "Request details",
			labelName: "Name",
			labelPhone: "Phone",
			labelEmail: "Email",
			labelMessage: "Message",
			placeholderName: "Your full name",
			placeholderPhone: "+1 000 000 0000",
			placeholderEmail: "name@company.com",
			placeholderMessage: "Describe your operation and requirements",
			buttonSubmitRequest: "Send request",
			buttonReset: "Clear form",
			footerMain: "TrackFlow Tech | Logistics and warehousing for B2B brands.",
			footerCopy: "© 2026 TrackFlow. All rights reserved.",
			backToSite: "Back to site",
			registrationTag: "Business registration",
			registrationTitle: "B2B client onboarding form",
			registrationDesc: "Complete your details so we can assess your operation and propose the best logistics setup in Los Angeles or Zaragoza.",
			formTitle: "Registration details",
			legendPersonalInfo: "Personal information",
			legendBusinessInfo: "Brand information",
			legendLogisticsInfo: "Logistics information",
			labelFullName: "Full name",
			placeholderFullName: "Your full name",
			labelBrand: "Brand or company",
			placeholderBrand: "Business name",
			labelSector: "Industry",
			optionSectorDefault: "Select an industry",
			optionSectorFashion: "Fashion",
			optionSectorBeauty: "Beauty and personal care",
			optionSectorElectronics: "Electronics",
			optionSectorFood: "Food",
			optionSectorOther: "Other",
			labelProductType: "Product type",
			placeholderProductType: "Ex: cosmetics, accessories",
			labelAverageWeight: "Average order weight (kg)",
			placeholderAverageWeight: "1.5",
			labelSalesVolume: "Monthly sales volume",
			optionSalesDefault: "Select a range",
			optionSales1: "Up to 10,000 EUR/USD",
			optionSales2: "10,000 - 50,000 EUR/USD",
			optionSales3: "50,000 - 200,000 EUR/USD",
			optionSales4: "More than 200,000 EUR/USD",
			labelMonthlyOrders: "Monthly order quantity",
			placeholderMonthlyOrders: "500",
			legendLocation: "Main operation location",
			locationLA: "Los Angeles",
			locationZGZ: "Zaragoza",
			labelShippingType: "Preferred shipping type",
			optionShippingDefault: "Select an option",
			optionShippingAir: "Air",
			optionShippingLand: "Ground",
			optionShippingSea: "Sea",
			buttonSubmit: "Submit form",
			validationField: "This field",
			validationRequired: "{label} is required.",
			validationName: "{label} must include at least 2 valid characters.",
			validationPhone: "{label} must have a valid format.",
			validationEmail: "{label} has an invalid format.",
			validationMessage: "{label} must be at least 10 characters long.",
			validationBrand: "{label} must be at least 2 characters long.",
			validationWeight: "{label} must be greater than 0.",
			validationOrders: "{label} must be an integer greater than 0.",
			statusError: "All fields must be validated again. Please review highlighted fields.",
			statusSuccess: "Form submitted successfully. Our team will contact you shortly."
		}
	};

	const langButtons = document.querySelectorAll("[data-lang-toggle]");
	const forms = document.querySelectorAll("[data-validate-form]");
	const pageType = document.getElementById("registrationForm") ? "reg" : "home";

	const getCurrentLang = () => localStorage.getItem("trackflow-lang") || "es";
	const setCurrentLang = (lang) => localStorage.setItem("trackflow-lang", lang);

	const t = (key) => {
		const lang = getCurrentLang();
		return i18n[lang]?.[key] || i18n.es[key] || "";
	};

	const applyI18n = () => {
		const lang = getCurrentLang();
		document.documentElement.lang = i18n[lang].pageLang;
		document.title = pageType === "reg" ? i18n[lang].pageTitleReg : i18n[lang].pageTitleHome;

		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			el.textContent = t(key);
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
			const key = el.getAttribute("data-i18n-placeholder");
			el.setAttribute("placeholder", t(key));
		});

		document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
			const key = el.getAttribute("data-i18n-aria");
			el.setAttribute("aria-label", t(key));
		});

		langButtons.forEach((btn) => {
			const isActive = btn.getAttribute("data-lang-toggle") === lang;
			btn.classList.toggle("border-amber-400", isActive);
			btn.classList.toggle("text-amber-300", isActive);
			btn.classList.toggle("bg-zinc-900", isActive);
		});

		// Update per-language field labels used by validation messages.
		const labelMap = {
			fullName: t("labelFullName"),
			contactName: t("labelName"),
			phone: t("labelPhone"),
			contactPhone: t("labelPhone"),
			email: t("labelEmail"),
			contactEmail: t("labelEmail"),
			brand: t("labelBrand"),
			sector: t("labelSector"),
			productType: t("labelProductType"),
			averageWeight: t("labelAverageWeight"),
			salesVolume: t("labelSalesVolume"),
			monthlyOrders: t("labelMonthlyOrders"),
			shippingType: t("labelShippingType"),
			contactMessage: t("labelMessage")
		};

		Object.entries(labelMap).forEach(([id, label]) => {
			const field = document.getElementById(id);
			if (field && label) field.dataset.label = label;
		});

		const radio = document.querySelector('input[name="location"]');
		if (radio) radio.dataset.label = t("legendLocation");
	};

	applyI18n();

	langButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			setCurrentLang(btn.getAttribute("data-lang-toggle") || "es");
			applyI18n();
		});
	});

	if (!forms.length) return;

	forms.forEach((form) => {
		const controls = Array.from(form.querySelectorAll("input, select, textarea"));
		const statusEl = document.getElementById(`${form.id}Status`);

		const clearFieldError = (field) => {
			if (field.type === "radio") {
				const errorEl = document.getElementById(`${field.name}Error`);
				if (errorEl) {
					errorEl.textContent = "";
					errorEl.classList.add("hidden");
				}
				const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);
				radioGroup.forEach((radio) => {
					radio.dataset.invalid = "false";
					radio.setAttribute("aria-invalid", "false");
				});
				return;
			}

			const errorId = field.getAttribute("aria-describedby");
			const errorEl = errorId ? document.getElementById(errorId) : null;
			field.dataset.invalid = "false";
			field.setAttribute("aria-invalid", "false");

			if (errorEl) {
				errorEl.textContent = "";
				errorEl.classList.add("hidden");
			}
		};

		const setFieldError = (field, message) => {
			if (field.type === "radio") {
				const errorEl = document.getElementById(`${field.name}Error`);
				const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);

				radioGroup.forEach((radio) => {
					radio.dataset.invalid = "true";
					radio.setAttribute("aria-invalid", "true");
				});

				if (errorEl) {
					errorEl.textContent = message;
					errorEl.classList.remove("hidden");
				}
				return;
			}

			const errorId = field.getAttribute("aria-describedby");
			const errorEl = errorId ? document.getElementById(errorId) : null;

			field.dataset.invalid = "true";
			field.setAttribute("aria-invalid", "true");

			if (errorEl) {
				errorEl.textContent = message;
				errorEl.classList.remove("hidden");
			}
		};

		const getFieldValue = (field) => {
			if (field.type === "radio") {
				const selected = form.querySelector(`input[name="${field.name}"]:checked`);
				return selected ? selected.value : "";
			}
			return field.value.trim();
		};

		const f = (template, label) => template.replace("{label}", label);

		const validateField = (field) => {
			const label = field.dataset.label || t("validationField");
			const rule = field.dataset.rule || "text";
			const value = getFieldValue(field);

			if (field.required && !value) {
				setFieldError(field, f(t("validationRequired"), label));
				return false;
			}

			if (!value) {
				clearFieldError(field);
				return true;
			}

			let error = "";

			switch (rule) {
				case "name": {
					const isValidName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]{2,}$/.test(value);
					if (!isValidName) error = f(t("validationName"), label);
					break;
				}
				case "phone": {
					const isValidPhone = /^[+]?\d[\d\s()-]{7,}$/.test(value);
					if (!isValidPhone) error = f(t("validationPhone"), label);
					break;
				}
				case "email": {
					const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
					if (!isValidEmail) error = f(t("validationEmail"), label);
					break;
				}
				case "message": {
					if (value.length < 10) error = f(t("validationMessage"), label);
					break;
				}
				case "brand": {
					if (value.length < 2) error = f(t("validationBrand"), label);
					break;
				}
				case "weight": {
					const number = Number(value);
					if (Number.isNaN(number) || number <= 0) error = f(t("validationWeight"), label);
					break;
				}
				case "orders": {
					const number = Number(value);
					if (!Number.isInteger(number) || number <= 0) error = f(t("validationOrders"), label);
					break;
				}
				default:
					break;
			}

			if (error) {
				setFieldError(field, error);
				return false;
			}

			clearFieldError(field);
			return true;
		};

		const validateForm = () => {
			let isValid = true;
			const processedRadioGroups = new Set();
			let firstInvalidField = null;

			controls.forEach((field) => {
				if (field.type === "radio") {
					if (processedRadioGroups.has(field.name)) return;
					processedRadioGroups.add(field.name);
				}

				const fieldValid = validateField(field);
				if (!fieldValid) {
					isValid = false;
					if (!firstInvalidField) {
						firstInvalidField = field.type === "radio"
							? form.querySelector(`input[name="${field.name}"]`)
							: field;
					}
				}
			});

			return { isValid, firstInvalidField };
		};

		const setFormStatus = (message, isError) => {
			if (!statusEl) return;
			statusEl.textContent = message;
			statusEl.classList.remove("hidden", "border-rose-400/40", "bg-rose-500/10", "text-rose-200", "border-emerald-400/40", "bg-emerald-500/10", "text-emerald-200");

			if (isError) {
				statusEl.classList.add("border-rose-400/40", "bg-rose-500/10", "text-rose-200");
			} else {
				statusEl.classList.add("border-emerald-400/40", "bg-emerald-500/10", "text-emerald-200");
			}
		};

		controls.forEach((field) => {
			if (field.type === "radio") {
				field.addEventListener("change", () => validateField(field));
			} else {
				field.addEventListener("input", () => validateField(field));
				field.addEventListener("blur", () => validateField(field));
			}
		});

		form.addEventListener("reset", () => {
			const preserveStatus = form.dataset.preserveStatus === "true";
			form.dataset.preserveStatus = "false";

			window.requestAnimationFrame(() => {
				controls.forEach((field) => clearFieldError(field));
				if (statusEl && !preserveStatus) {
					statusEl.textContent = "";
					statusEl.className = "mt-4 hidden rounded-lg border px-3 py-2 text-sm";
				}
			});
		});

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const { isValid, firstInvalidField } = validateForm();

			if (!isValid) {
				setFormStatus(t("statusError"), true);
				if (firstInvalidField) firstInvalidField.focus();
				return;
			}

			form.dataset.preserveStatus = "true";
			form.reset();
			setFormStatus(t("statusSuccess"), false);
		});
	});
});
