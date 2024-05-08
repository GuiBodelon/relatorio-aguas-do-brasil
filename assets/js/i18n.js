// Criando um objeto de tradução
const resources = {
	pt: {
		translation: {
			//Navbar
			titleHeader: "Relatório de Sustentabilidade 2023",
			// Menu Links
			menuLink1: "",
			menuLink2: "",
			menuLink3: "",
			menuLink4: "",
			menuLink5: "",
			menuLink6: "",
			menuLink7: "",
			//Header
			headerTitle: "Relatório de<br /> Sustentabilidade<br /> <b>2023</b>",
			
			//Footer
			footerText: "Conheça o nosso relatório completo",
			footerBtnDownload: "Download do Relatório",
			footerBtnVoltarTopo: "Voltar ao topo<i class='ms-2 fa-solid fa-arrow-up'></i>",
		}
	},
	en: {
		translation: {
			//Navbar
			titleHeader: "Sustainability Report 2023",
			//Menu Links
			menuCTGBrasil: "CTG Brazil",
			menuOperacoes: "Operations",
			menuDestaques: "Highlights",
			menuExcelenciaGeracao: "Excellence in Generation",
			menuGovernanca: "Governance",
			menuSeguranca: "Security",
			menuResponsabilidadeSocioambiental: "Social and Environmental Responsibility",
			//Header
			headerTitle: "Sustainability<br /> Report<br /> 2023",
			//Footer
			footerText: "Discover our full report",
			footerBtnDownload: "Download the Report",
			footerBtnVoltarTopo: "Back to top<i class='ms-2 fa-solid fa-arrow-up'></i>",
		}
	},
};
// Função para atualizar o conteúdo da página com a tradução atual
const updateContent = async (currentLang) => {
	Object.keys(currentLang).forEach((key) => {
		const element = document.getElementById(key);
		if (element) {
			element.innerHTML = i18next.t(key);
		}
	});
};
// Inicializando o i18next
i18next.init(
	{
		lng: "pt",
		resources,
	},
	function (err, t) {
		// Inicialização completa
		updateContent(resources.pt.translation);
	}
);
// Alterando o idioma
document.getElementById("change-language-pt").addEventListener("click", function () {
	i18next.changeLanguage("pt", function (err, t) {
		// Idioma alterado, atualizando o conteúdo da página
		updateContent(resources.pt.translation);
	});
});
document.getElementById("change-language-en").addEventListener("click", function () {
	i18next.changeLanguage("en", function (err, t) {
		// Idioma alterado, atualizando o conteúdo da página
		updateContent(resources.en.translation);
	});
});