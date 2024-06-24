import {getPostgresDatabaseManager} from '~/common--database-manager--postgres/postgresDatabaseManager.server';

const footerComponents = [
    'dac41596-505e-4bb6-9a66-9889ae7aaedf',
    '85780b59-0ef1-4aa5-b5a4-03f67b4610da',
    'df275923-01c5-4c0c-8255-3d7cbd39ae33',
    'b2407ee8-a1bc-4e70-a603-421b17c51c40',
    'ed7614e1-8772-40d7-adb4-7aa4b11197dc',
    '66e14d86-92fc-428d-9b3c-651d6755ddb6',
    '9bd47e89-a883-45b2-ba8f-6f8cd721e1ee',
    '71131a25-3c9b-437e-b802-2442caf119cf',
    '7656ee64-ee38-40bd-97cc-b11bca2590c1',
    '01e7e4a8-dc12-4916-bab6-3afe5ee56365',
    '71f79217-521a-49dd-b7f8-99fcf8c5b48f',
    '06a37dfb-57c3-4f22-a967-14e031c5c450',
    'b63c302b-0f25-4e27-be0b-a1952397a46c',
    '50179052-5f06-444e-9374-e61d0487fb8e',
    '550851ba-dcfd-4aa5-a04d-e76b41e3d430',
    '12e3553b-da7f-4d49-9125-bf3c9ca15b3d',
    'bfb2f99b-9a11-429a-8b7f-6405e36a259a',
    '626498be-2d60-430e-b1be-efe48c8c7900',
    'e10e8f36-176b-4db2-ae57-f35a4f7affae',
    'ef4741fe-bbd8-4c78-ae09-eb679df95397',
    '112ad47f-1cbd-4191-86b4-460d1a5a8c10',
    'bd692edc-1ce8-4efe-a4c2-575dfe49b713',
    'be6c493d-c568-4410-8bf9-8f3eadd51fd4',
    'a928b10b-628e-47c1-9cc7-f4bc76812a14',
    '5de0e0b5-9d47-49c2-9b97-354d4fd64769',
    'd15600e6-d87c-4804-ac60-2d8f447ff5ca',
    'f0b529ec-e05a-4425-a182-7ad387faafef',
    '76faf409-fb05-4845-b2ab-7dd2632f0cf8',
    'e003fc74-47bd-43d4-95cd-cda39f301b5f',
    '97f31122-1ff8-4fe3-a9a8-86d9ab8e8bf9',
    '284f49b3-47a1-4cb6-a2f8-e7593b734e3c',
    '689f2e1a-18f4-4a89-adf6-49d3fbb01216',
    '1ada4b59-f2ad-4fcf-948a-a221577fe83b',
    'ca2cda32-32a0-4a73-b942-44c7ed72712b',
    'bef9908f-3d79-4a68-8ad5-186aeef0d757',
    '38d5d280-2792-4129-bfa3-5dc70c645806',
    'b01aa581-1171-4dfc-8e31-62bc0d695980',
    '179d756b-e8df-4a1c-9879-89cbc09d052e',
    '214f5e34-1143-424e-9199-75ba7e9f41df',
    'ee765c3b-2057-422a-ba04-a71d8b6ce342',
    'd6009009-6b8a-4f3c-be4b-3c67684bdab1',
    'aa557a1b-b158-4059-845a-c1f4bb3e16d6',
    'fff77d51-7ecd-4567-86f1-9c4c8ecc2a1b',
    'd2a61e8f-dd59-47d0-91e4-c9249ff774c5',
    '70b2c4f5-5750-47fa-85b4-738437329a64',
    'c660f7aa-091c-4ab2-8084-0e5ab67bd8ed',
    '9dd860ac-40ab-4d6e-8d5c-513983771954',
    '24a6c84c-e716-4f6b-867f-9e7323e8327b',
    'e73fa2ef-c040-424f-a814-870f408606cf',
    '2834dd3f-a96d-44a9-bd99-a30ce4de44e3',
    'a1eda80b-b330-45de-acb4-5453ab79a5b0',
    '1a34d067-8791-44c3-b6a3-b0c1b7459d97',
    'e61e2f9f-b989-43f2-9d3d-d8e08909bcb1',
    'aafa29bb-bcf2-4f10-b24b-533995b7c1f9',
    '51581679-411f-4060-b3bd-33f45172d8e4',
    '826ce734-3ab4-4a27-be96-d787a5816547',
    'f7b1550a-0460-44e1-8bfc-adf1bc1907df',
    '704bccb8-56f5-4255-aa49-3485c88d1e7c',
    '6fbba50b-2e5d-4524-a7f5-d3658552c7c0',
    '47f739e1-7e1b-479d-a07c-a6ce0fc8e008',
    '3f4def69-f4a0-4c87-a2b4-61d0e81048d5',
    '895b3673-d6e5-40d1-b5e0-f2aa0ead7c5a',
    '267269af-39bc-4215-b475-4dfa342785da',
    '77db889e-a6ba-4eea-87f3-9b7c813714a6',
    'b1ea5b54-b8b7-4419-8015-340d9bb3ea10',
    'b7bc6ee8-b69e-4ed1-a14b-cdc7a9c7f2f8',
    'f5e09c37-0f22-4f60-b213-e70330d83761',
    '62186aef-712f-410d-8e36-cb94b395dc7d',
];

const needHelp = [
    '19f2d4c2-c283-4487-b630-4211490f56bb',
    '4d37f5c2-5fa0-417a-93a5-cb0a7c120c75',
    '32a4b1e1-0dd1-4faf-8942-1625f921edf6',
    '525b1b32-8b55-4ab5-8264-429319252d7b',
    '9f40bee5-a8a1-4b34-bc80-77b7e73fd02b',
    'bb67455d-4f1e-4b4e-87f8-4e165597ccd3',
    '7a659e01-1231-48bb-9be7-84a781d15f7f',
    'bf5e333f-d062-44fa-89ae-ebb3b0584b85',
    '830a213b-2da7-4e78-9721-2e86b3344e0c',
    '548ba16c-fd16-4622-b51e-2656a4e959b9',
    'eb268dbd-cf19-4690-b0d1-ca219c5160ee',
    'cdac2c71-4b62-4a2a-8fd4-e1a7aa60231b',
];

const downloadOurApp = [
    '750d9db7-8c90-40da-b561-fcf2d932cedb',
    '0a3e0e6a-2984-46f1-8e82-b6599631b0fc',
    '8817b542-af7a-4ca8-be67-7d50d9632f28',
    'c5bc92aa-66d9-4102-80ef-e4980ba6fcd1',
    'acead166-4c2c-484e-a463-dff4f1f46e9e',
    '9e1abca9-ca47-4ed4-8a10-4a3801d45016',
    '3b06322c-1d05-44e1-bbba-620e84e8dc41',
    'f5f5a508-c205-43c6-8971-d4c5e3771c6e',
    '6fde484e-cb6c-44f8-ba06-0d38fc0dadde',
    'd09b1745-78aa-4fba-b030-e8afd45d7812',
    '1086512a-398b-4ffc-ad2e-9e81ef0379ca',
    '7f0f81ce-a277-4206-bac7-b789b987bc61',
];

const customerPortal = [
    'd2ec9d6a-52af-4122-8b1e-ed28e881de61',
    '0af6ea53-d4f8-41cd-8a78-581137bc84fa',
    '3d1e7a59-d1cc-4725-b17a-f8cdf550f702',
];

const calculatorStrings = [
    'b8201b12-dba2-431b-8359-3ef4d39972cf',
    '14cd7ae9-79aa-41bd-9d49-d8a68129d0f3',
];

export const contentDataLatest = {
    homePage: [
        ...needHelp,
        ...footerComponents,
        'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
        '75c5ee28-86db-4127-a427-602cef517463',
        'fab53f5a-f3b1-450a-81f8-ef2e74d38be8',
        '14c3a1d5-e17f-4cee-8f82-8b6e563645db',
        'f96a837a-1c1b-48e5-9ff9-e437b203ae92',
        'e8104804-fce1-4b93-8749-f1da33644c73',
        '38f93439-2755-431e-979c-41ab7b18654e',
        'a161dccd-f469-4538-9546-7ecd1fa2420c',
        'df203937-f12e-4208-92f1-2d10068d8064',
        'a161dccd-f469-4538-9546-7ecd1fa2420c',
        '2129f676-25b4-4282-aad9-bf9f796d6e58',
        'df203937-f12e-4208-92f1-2d10068d8064',
        '11ad9afc-c831-43cd-b523-76744f2e62b6',
        'c3b80b1d-6c2d-4d4b-8e1e-0241ffb0a3d0',
        'c7a5b21a-1f55-410f-b092-ad7cf3879c93',
        '0c309f95-fd15-475b-9d53-0beb752a7794',
        '6d466aa1-1dd0-425e-849b-39089a7cfaf1',
        '94291849-1c26-45c8-a527-449b337d8ef9',
        '96a8f4fa-f30a-4dd1-aa40-592874da4e56',
        '5a1f78e7-f471-4841-a5e9-cc44821257ac',
        '381c2343-4917-42b2-9a51-48d6eae9b732',
        '38644fdb-7d36-48a5-921f-12b6067d5ccf',
        'fe47c71f-f525-4e39-8f3e-1df500f9b8e8',
        '44f97c6a-9ce9-4b87-b3d5-5fdc87499501',
        '755fe310-0224-4dfb-a4f0-4968cc6401ec',
        '8b7ad7da-866b-45b9-b4bd-bba950537383',
        '205c7ad0-cc1f-47f6-b6df-2862fa270bf1',
        '54bc344d-b81d-4b34-a3c3-a7bb70625d39',
        'ae050ac5-d8fb-4f52-9cc0-86f6bdd11b69',
        '064ffad3-01c1-4d53-b5a4-1c70569f1002',
        '3559e940-90c7-4186-9aa3-464392477f2a',
        '41bcc9c4-31ab-4850-9fba-dacbc52e9f05',
        '9c5129d8-eee4-442a-b7cf-e28474542443',
        '42addcc8-ea7c-45ab-9892-5c0a65b4a8e7',
        '71a67e1f-1422-4ba3-b301-372fc2d4bd1b',
        '22dd9460-ba57-4315-8565-a2cf0c372ddf',
        'ef8a5280-9547-4d8e-a154-59f4a3423770',
        '90ca6617-6317-4f40-87ca-05797017706d',
        '9a639bdc-f26f-45e2-8e98-1874602a48b7',
        'a7f2b19d-e861-4495-9c9d-5520e21b786c',
        '832476e4-2837-4a46-8d95-8dd379b6b425',
        '6258ec54-b231-4992-a305-6336ee2b24f4',
        '8f24bcf4-5880-4139-9a1e-aa679c66d04d',
        '750d9db7-8c90-40da-b561-fcf2d932cedb',
        '0a3e0e6a-2984-46f1-8e82-b6599631b0fc',
        '8817b542-af7a-4ca8-be67-7d50d9632f28',
        'c5bc92aa-66d9-4102-80ef-e4980ba6fcd1',
        'acead166-4c2c-484e-a463-dff4f1f46e9e',
        '9e1abca9-ca47-4ed4-8a10-4a3801d45016',
        '3b06322c-1d05-44e1-bbba-620e84e8dc41',
        'f5f5a508-c205-43c6-8971-d4c5e3771c6e',
        '6fde484e-cb6c-44f8-ba06-0d38fc0dadde',
        'd09b1745-78aa-4fba-b030-e8afd45d7812',
        '1086512a-398b-4ffc-ad2e-9e81ef0379ca',
        '7f0f81ce-a277-4206-bac7-b789b987bc61',
    ],
    partnerWithUs: [
        ...footerComponents,
        '176f406b-1675-4368-a558-5f9ed76f50ec',
        '057606b7-2da4-46fd-b45c-a01c6b897825',
        'c44d71ba-b4d4-4f0f-89ca-bf80f68af2b5',
        '71f3e7cb-e2f1-4647-915d-a9ad32585041',
        'c3071f25-7391-4de0-80ca-6e677accb5a0',
        '3ed02ca6-3d84-4c30-bf32-cc4e229531d7',
        'df167c0b-06e3-423c-8bf1-f70aae212858',
        'c3405e8b-601b-4ab7-98c9-9efd27db92bc',
        'b61904f2-595b-496e-94f7-47e32a185702',
        'e682b8a7-5eed-4b09-a8fe-906d33ea9e5e',
        'b927a309-174a-4398-8909-34996eec1fe4',
        '35837ec0-4312-4575-98a0-1737bc735de9',
        '6f6d5a04-eac3-4803-964c-2bb5746d3f4a',
        '4994811d-c2e1-4615-8826-3685c6f138c8',
        'cbd5b808-b64a-4cec-95b4-2b53bf191e8a',
        '60064f89-f7eb-4a75-b8ef-cec284326209',
        '22d18e14-07be-4aaa-9f37-13855a16c4cb',
        '60df7d37-d752-4fb5-8c3f-ae035e049dd2',
        'ea9fca5b-982f-4d1e-a095-1f750a10cf85',
        'c67b24e8-3abe-4158-96a0-2d8674bd8560',
        'b9b8d061-a511-4244-a494-1be436c5413a',
        '1fc18eac-2c21-457e-9608-5f7aa3077a97',
        '1d54d198-3354-4205-9453-645daf5a9bdf',
        '82640601-fbba-4aa7-801e-6989508bebd8',
        '9d6f5db5-d5a3-47ac-9869-c69b5e456e4b',
        '143cb849-485e-4823-ae0e-87605a275e0b',
        'bd36c536-2a5c-4eae-95ef-76345345fc95',
        '898adcb7-bd6e-40c0-bcb3-fe758960373d',
        'f4c3ecd4-bb96-4913-ac28-a3186539efb0',
        '4b387c63-4027-417d-84d0-b0410222b2be',
        '41af1863-b4ef-4eb6-ac45-ce4ee5c1ea45',
        '66af83d1-dde1-4575-becb-accf49675eba',
        '6ea0f7ab-1f03-4694-b78d-b31cb9b1e2f1',
        'f6898a61-cf8a-4fbc-8426-00063d893b7b',
        '3bd752e8-05b5-43cf-8934-444600f367c8',
        '5d5071da-e87b-4349-81a5-ac89d6c0f33b',
        '4c98f3ee-98b2-4a36-a176-28a7b4cdccba',
        '696bf110-98db-4315-b596-a90a991995d1',
        '27ca3ea0-2705-4f8c-ae3e-7305459c72fd',
        '4f45ffbc-37ed-4b37-94ba-b7ea9de0b2c0',
        '606c434a-7491-4966-a29c-c2ebdc136660',
        '5c0be715-054b-43b2-88eb-6e12c5f273e5',
        '06882644-d2d5-478b-b5f1-393e8a1062cc',
        'f4baa5ee-1314-479f-9a8e-9032c665d420',
        '28300889-6131-4e0c-aa6f-8dc916a5c426',
        '1c7baf48-8159-413f-b5cd-8e1cf1dd37dd',
        'f8faf691-b023-492f-b8aa-db27994387c2',
        '8488159f-97c6-4a21-aebb-fd2a9cfbfe5f',
        'eafd3cbb-12a8-443b-a402-dd56fb626e13',
        'dfce781c-224a-4c7e-8f9c-fc4273c2e3f1',
        'e3c5a91f-da90-405b-a934-d3a2655d3b07',
        'b24da723-5049-4e4b-81d2-1fa107318177',
        '0a7fd173-6bf1-4256-a2fd-984e8dc203c7',
        'ca5690bb-710b-4555-b651-e2df054c1dde',
        '47130c42-07db-45c1-8e43-6adc72ee7089',
        '348fe890-5c34-428b-a2cd-388884ce1b58',
        'de179005-a481-49bf-aa22-2b0eb2be40c0',
        '8cb51d7e-9324-4285-8686-15f4ab472e7e',
        '63466f4a-fcef-4bd6-9e1f-d1af112a9c38',
        '9c7d49ed-294c-4079-afb9-5aa4af368f5b',
        '303ea41f-86cc-47f5-a2fd-c56ea9e51794',
        'ca95937e-b583-4775-8270-72f2fd0fab48',
        '50ad339a-c706-43f2-8838-0285bd1d6c71',
        '23983611-b6a6-4b25-9fd8-47f667c96479',
        '53651138-f403-4e79-827d-fe0536540d55',
        'e02d9aef-695a-4991-b942-76b97fd22024',
        '8ff6d273-0ac4-4a3d-95f0-77542e53b515',
        '1e455064-7b68-46e8-838d-518edffd5568',
        '0d258982-7d29-48e7-9081-ac3bb2fb7bdb',
    ],
    eclgs: [
        ...footerComponents,
        'b27952cf-42e5-4fdc-8bc4-ee402f959c23',
        'fcb9ed2a-81ed-493e-be9c-16d8c3bd82c9',
        '50060663-78ac-4577-ae7d-bdd99eb9d79d',
    ],

    roiRange: [
        ...footerComponents,
        '6dccffd8-a883-43d6-bae8-2ff20a6847a3',
        'fab90640-287e-4386-a3fe-63bfab0e3662',
        '833eeb4d-f9c0-4182-8e63-d7ae0f319e80',
        'ad7ad3e9-3556-4299-b9da-b617ede4070c',
        '54f37973-848d-4f5c-a250-f46b81959902',
        'e2cd4318-d8a2-4bc6-8642-84afbc3af1da',
        'af8335da-4128-46fb-b496-f86f3c3f1e6a',
        'b9af7fe3-8460-4cb0-8f42-56f492d78c06',
        'a902f2f2-5665-4b43-9c57-6df0086b3147',
        '97a6f9b1-e80e-4af8-a7e7-22c71af19e6c',
        '1cb95e28-0f39-49ae-b280-57853fb49bfb',
        'd22b9e15-a77f-4f4b-a8f9-001edf4ba79f',
        'd759d722-ec40-49e1-9c13-76461adb6f7f',
        '1fd49280-73b3-42e7-aae1-f49ddc5add2a',
        '3afecd67-2af7-413c-abad-2b69bbba66d1',
        '6c2a293e-9e23-43bb-b14f-ae427926aa73',
        '13f1e738-247d-4af2-973e-d98a184dfd98',
    ],
    roiSwitchPolicy: [
        ...footerComponents,
        '2eb400b9-5895-4fd8-b785-8f59d823c6f3',
        'e42231c9-1e23-4fa5-a929-9a17ed4a85e6',
    ],
    grp: [
        ...footerComponents,
        '370e8699-c80e-41db-b437-3da9b4d44650',
        '84b43b79-0b50-4e15-aba4-a710100d08ba',
        '124260ee-16f9-4998-9120-323626824ead',
        'fdb0a88e-efde-4e17-b189-8f13216595e0',
    ],
    careerWithUs: [
        ...footerComponents,
        'e2e7c9fc-7025-48ff-98da-ce816a6e048b',
        'c792abeb-e6e7-4cde-a31e-070315803079',
        '3932ab57-805a-4752-865a-b4923ef0e9de',
        'da1da3c6-1cd6-44b8-9506-1ee9fac68903',
        '4227ddd5-25c1-4507-8cc7-aba9034ee3c9',
        '5fafadcb-5f90-41cd-8d8e-f6d066c7c179',
        '8f98e855-878f-45bb-aee3-ba97d11b473e',
        'c6cde0c6-bd55-404e-b0c9-8b9fca3d6692',
        '7cbf39c8-6da2-4bf5-9cd3-ba50a391d650',
        '4023a687-fa40-4fbf-b6aa-3b217dcb45bd',
        '8dd673ae-ca60-4ead-800e-8ff693fdffb1',
        '55a5672a-5b06-4933-b20a-3206eb18e03b',
        '5f98f7fb-1156-4ac9-a098-b43d8575e70a',
        '0322c948-e517-45f9-882e-0e9069cb9d29',
        'f9d60b4a-3451-42b7-9822-1b35e46925d1',
        'f849c7a3-7467-4414-a78c-1b9c6a61eb42',
        '66e4fb40-7134-4c3d-88b0-90ebc7aa5e7f',
        'ef2a0da1-28b3-4827-bbc6-f9696419291c',
    ],
    customerSupport: [
        ...footerComponents,
        'b87279fe-8c08-44f7-a4cf-d7748a2fb67e',
        '0012f856-da17-455c-a355-0f07d943f91d',
        'b236e207-b46d-4867-8ca0-20d47a63820d',
        '7c2e9353-46b5-4ced-8e90-e7c2578ada68',
        '937e4c0a-2d2b-49fe-9f60-08ef88716cf7',
        'c58d33c5-f6e5-4c82-a524-35fad9377bd2',
        '0983d602-e6e2-4a1e-a746-88c5e1eec7bb',
        'f3587150-c05f-4555-b9de-56f024d945f3',
        '107c9e9c-7eb1-4466-9d0a-16a318929911',
        '14b7fb4c-de1d-432a-bd52-c414ff0e33a5',
        'a1bd487f-090c-40c4-b7d5-01e71b73cf0d',
        'bee6b51e-26c7-4fb0-a77e-8fb875b08160',
        'a6a98fad-c63c-4347-b9ba-0fc9c39e9b0f',
        '6ea620cc-2b1d-4628-a04f-c06f4c0884e9',
        '70a6f62c-8dc4-4608-a266-ec5ce6f2dcbe',
        'f895bf5d-77fd-40d1-ad5c-b77e0134fe50',
        'f130e4f6-0ed3-4a4e-af6b-c41d5bbed225',
        '295fbe5c-b426-41de-a69e-894c3afec9f4',
        '858a49f7-708e-429d-913b-e424810b39e2',
        'eb9622ba-9ed1-47da-9faa-8f3936c84bb6',
        '32026100-49ed-4a1a-a5cc-81d6b78e7301',
    ],
    locateUs: [
        ...footerComponents,
        '7318d167-990c-42ba-9bb0-a147f99a277a',
        '75cd8937-8232-4660-a50d-bca28c922cee',
        '98b682d4-677d-455a-8d73-ee7246897147',
        "5ec4f853-5003-445f-b2dd-0fb2df5786b0",
        '58f3cae9-f314-4099-9474-ffd22ac28516',
        '0c869f44-abf4-4990-8590-9dc7a717b7ea',
        'b2f12e97-f95a-4ce1-a73f-1aedc8acd25c',
        '3764919d-2880-4c40-a963-3e69999ee6fe',
        'cd4e15e2-4f38-48db-a3fb-e349c3eb49cf',
        'e9c2ed29-89a6-4b75-9d5c-ffe51d0d0f6a',
        '3e5b1418-e98c-423a-b2ab-bcf9d4c3544e',
        '7686f795-f464-4f6c-b521-4b2b8d37ce3a',
        '86478602-aff8-4dbf-b0dc-002d6db53102',
        '76d6e279-859d-4a2f-a12c-809305343f21',
        '661293a3-776f-48ac-98bc-319efe4c02ff',
        'b26b54ee-8891-42a3-9fb3-722d5b597c8b',
        'c920b62b-bdae-4ca8-8c75-c2f0f295c491',
        '90aaca0a-ff09-4679-ac54-040d94525343',
    ],
    feedbackQueryform: [
        ...footerComponents,
        '6db20e5e-ad18-4362-a869-8b539d900910',
        'ead9d0e2-e849-4fd6-a7fa-435a33566ba2',
        'd3c303f2-ebc6-4b0a-8ff2-6a42113a8683',
        'f6e3ef9b-a993-4141-908e-ce4e9b1eb608',
        '2221792d-c8d4-48f0-aef5-b7fb37929a26',
        '87e2d29c-8cc3-4623-9e69-a2fcd03be143',
        '850f1918-3aac-44ed-b79d-29680b977e53',
        '17b7c145-161e-4274-a213-01fb2a78bfb5',
        '564af2b0-053e-40a8-8ca3-22faba936de0',
        'aa034259-b52b-412c-944a-8d12eae08399',
        '94e994c0-5702-45bf-bc61-a1a5c0f77918',
        '1fe938a0-af12-42a5-96bf-3fbf9687e077',
        '14c3bd14-85c7-4f4e-a37c-3a5fddcf93a3',
        '2056357a-60cc-4316-aab4-540585c22e5c',
        '6d8ec230-cf1d-4d40-8152-d7ee54f05ad7',
        '8c76e59c-965d-416c-8cfc-c3d6984f3546',
        'ab2fd13d-6711-44e6-9b4f-a055d75d6f02',
        '3c5cff57-1049-4d39-a524-86dee56b949a',
        'b5824002-198e-4b8a-8405-bd8d59d2b655',
        'ff326c1a-2617-466e-9c89-14a3f6c264d4',
        '45f57903-79d4-416d-8229-39a9071baf12',
        'ab77e3ba-3d2f-4d6a-ad00-ba309e16ab6e',
        '0a6d1407-7c8b-4309-8023-47ab4b5b408b',
    ],
    lapPrePaymentCharges: [
        ...footerComponents,
        'cb16a51c-b1e6-4012-87dd-c0567c55af18',
        '60a9a7f7-9b8b-48af-84db-eda184fe4072',
        '7bd62704-64b0-47ab-aea4-491f2ebfbf39',
        '7bf7293d-83ef-44d1-af85-529b878e464f',
        'da459aec-7ac6-4969-ac9c-8a791882bf4d',
        'b0ca3271-3233-4a82-aafe-bf5127fa4745',
        'bbd51cdc-84e6-4dbb-9f0c-07e8fe07ba86',
        '5a1bbe91-cd72-42c0-851c-457ca15444b4',
        '272e1aa0-92c8-4b62-8770-dad616cd90f3',
        '54c812f1-0550-42d9-a8c5-a163960cec52',
        '4c3e77f1-2432-4979-aaf8-62ee0b6e8b24',
    ],
    homeLoanPrepaymentCharges: [
        ...footerComponents,
        'cb16a51c-b1e6-4012-87dd-c0567c55af18',
        '7bd62704-64b0-47ab-aea4-491f2ebfbf39',
        '60a9a7f7-9b8b-48af-84db-eda184fe4072',
        'e92619bd-850b-45b5-9c29-5ecfa8dd684f',
        'da459aec-7ac6-4969-ac9c-8a791882bf4d',
        '260399e1-c299-4d72-b5e7-cccf17c33f36',
        '795f7ef1-d41e-4fc0-adbf-1a3cd41d7232',
        '5a1bbe91-cd72-42c0-851c-457ca15444b4',
        'df431e0b-f4f2-40ba-82d5-b19d8dab14c2',
        '36f85c14-9da0-4bec-b71c-d47e475a3b9b',
    ],
    homeLoanInIndia: [
        ...footerComponents,
        '603fab22-7e54-47d7-908f-ce684bfccaa7',
        'bb14c68a-5972-4ead-8c19-bb880c2d5be3',
        'b2bc3a38-8716-472e-99cf-3a8e6a9385b6',
        '399b8d86-2f9c-496a-8e78-9c35c6f48288',
        '8568826e-f849-4aa6-9938-e88a5d97abae',
        'f9bbb86b-e88a-4bc9-b7e4-1a0004b63a7b',
        'e5d1f416-c384-47bb-bfcd-e93a9a2ac75b',
    ],
    homeLoanInDelhi: [
        ...footerComponents,
        ...needHelp,
        '956035a8-8a98-42c7-9f6d-3c401e961ea1',
        '479e88c5-edbd-445c-a3e5-90c1a0b49ba9',
        '2166b39f-c403-487c-8eb3-ee3e96a7d11c',
        'f4483ffd-d0bf-4526-be3c-a74f9ea39b32',
        '6c64efd5-074d-4318-ae8d-dc65556941a4',
        'b12a7600-71f0-49bd-b9e2-db1802c4c9a9',
        '0f415ec3-9c08-4ff8-af69-a03afb3cfb15',
        'cd9f5856-fe89-4c93-907c-0e97a4086961',
        '066dc516-05e7-449b-97f3-cc5b95b11f1e',
        '82a919d8-c9b4-4fc5-9986-cb437ca052b5',
        '17c18f74-6ac3-4bb1-8d67-c64fce269411',
        '9ae91a08-3e2d-481e-9a89-c7a89d590d89',
        '3be3763f-3e36-4fe5-b50b-9976f7b7d589',
        'fbd15115-0442-4cd2-9e90-2396c2f80432',
        '7ae93250-573b-45b0-b50b-4c034102fc69',
        '00899fd2-25a6-4614-bbdb-382502387e57',
        '067e8cff-3da6-4629-8ad6-c2e5a82532ee',
        '625a8751-ab4e-48a4-aec5-ad351c23ab3c',
        '04fceaf5-6e5f-47da-a9cf-552e8d6c28ad',
        'b645d628-70db-4b78-acd9-62b5dee662c9',
        '0eefbde7-05ed-4088-911e-2ff41d5228b4',
        'f8b03914-ae9f-46bc-a9b6-41ba1bbce434',
        '8f2efaeb-a3d3-4ff9-891d-c14cd536483f',
        'b9cce67b-677e-42e8-ac6b-d737534077ad',
        'cf56a411-8190-4384-9d00-f0eeda6f969f',
        '7eeb2ae4-db50-4966-a1fa-fc5403104ecc',
        '6229d63a-3605-4382-a232-f4383f94f763',
        '98e1f4db-0683-48b5-ac68-d63f2f04e619',
        '44409371-bfd5-4c70-975b-cdf2e6bce5d9',
        '2cb75c1d-b221-4178-8a23-dbeedaf59cdd',
        '0fdeb70d-9b47-447b-bbed-31f867e82281',
    ],
    disclaimer: [
        ...footerComponents,
        '025ae533-9031-4c50-8fc1-6956f66c149e',
        '7404ab91-02b5-4c0a-baca-272f2a90bb6d',
    ],
    loanAgainstProperty: [
        ...footerComponents,
        ...needHelp,
        ...calculatorStrings,
        ...downloadOurApp,
        ...customerPortal,
        'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
        '0875ac0b-ee9f-4cbf-85dc-05ffbb90404a',
        '58f3cae9-f314-4099-9474-ffd22ac28516',
        '616ec46c-593c-4803-b35c-088cd0ced772',
        'e3697c29-6bd9-487c-bc09-8f5ff95c1d48',
        'be3c6c2e-4dfe-4af1-a08d-fc068df23eab',
        '9b5c0909-ee44-48f4-9143-8a4114f2e213',
        '7e99da23-d5bb-453b-90f6-1cd2be636624',
        '6846bdc7-2269-48ac-8e35-8b821d52615c',
        'db936b4a-0845-4ecc-b898-d3438d83c828',
        '236870c6-706b-4302-b8a8-165be38f0081',
        '3fed5e93-4389-4a51-87d5-b580e49430e7',
        '637200fd-b66c-4d49-8a52-86a1a58ab1b8',
        '088ee4c5-e2b8-4566-a0d4-3f857ae2bf3b',
        '6c429dca-728b-4cb3-bd15-a51f854fd9e2',
        '2b5ac34d-b2e1-427b-be6f-6bcb7e61ae25',
        '70999711-4753-4ad7-853c-459750d7459f',
        '245ab4b7-6426-42c2-8704-68758a414527',
        'd0115816-ffc6-4618-a60d-a43e989b6fc9',
        '080f3c12-8ce9-453e-aa18-6667a4b7b671',
        'd0427ba4-1161-4827-80d3-6bb5c3bd44d5',
        '4e5b76ad-4940-43d7-887a-b545572d0a92',
        '96b6e16a-7f7b-42cb-bf12-705d3904faa7',
        'f8310c34-7522-4900-b5b6-3ab7bdf972a8',
        '80b79cff-bd0a-474f-9c8b-b7f28c465f8d',
        '0c9fa9f7-eabe-4463-a5a5-9b216150707c',
        '7ebf85ed-5a11-42dd-840c-33f4dd0cdc66',
        '8aedc93d-47b8-4399-b98d-29c32bc2e23c',
        '3175bd4e-1250-4afe-abec-abbf7e8caa61',
        '1df42065-7fe1-4a9d-b028-f9b17bf11000',
        '3de6d502-8b3b-4814-af5c-f80d199158fe',
        '4b8f4ea8-f933-42ac-a1d4-6b523d840bc0',
        '0f2a0f90-fb1c-4874-8fbc-eb80ac9d45ee',
        '624f5345-6e65-41b8-9d1c-98a275eb93b6',
        'dcd2a8cc-2efa-4a91-a2a5-9b64757956a4',
        '2cd9f0f1-f65f-4041-832a-4e41188a3038',
        '7e5e286c-f060-41a8-b676-e072bf01eae7',
        '9e689efb-ee52-4501-8ce2-07812723fab5',
        '44e44ab5-8cd4-4b77-ab5a-5f14d39f0784',
        'fd484260-b761-425b-95fb-cb93dddd064a',
        'afbc6910-cfab-4581-9ba3-4360927fdba2',
        '9f507889-082b-4ae0-9580-b14be7cc8f20',
        '4947dc71-bb90-469d-b989-671346c4a84c',
        'd776df41-c4ee-4778-a625-72ca3a80d89b',
        'f9120cd9-ecff-478f-9db8-4bac4cecc8ba',
        '4b4a8860-61b8-446a-ac84-c5329901a5dd',
        '193a160c-4696-460a-946f-5ff5795cf652',
        'cd78ae99-1740-48fd-93b7-2cd24477fe8e',
    ],
    homeLoan: [
        ...needHelp,
        ...downloadOurApp,
        ...customerPortal,
        'f5106bbb-9ce1-428c-9b42-c4c3b9639f40',
        '75c5ee28-86db-4127-a427-602cef517463',
        '37b23412-19ab-48c7-8491-3570f4e2ae84',
        '7e99da23-d5bb-453b-90f6-1cd2be636624',
        '6846bdc7-2269-48ac-8e35-8b821d52615c',
        'db936b4a-0845-4ecc-b898-d3438d83c828',
        '8cfe3398-b37e-468f-8bcc-49653cfe1b6b',
        'fef5f24b-f995-47b2-8970-d21a93b59272',
        '160aebf2-0352-4699-b05b-3967cb3e672b',
        '16ddba8c-2238-4d0b-967e-f9d253fafec1',
        '0bbd06f3-67fc-4793-a26c-2004f22ebfd8',
        'f89b7e1a-8c17-4993-b78b-3ba843d2c79c',
        '096e67af-21c5-4cb2-9c67-96ebc4d38bc8',
        '792826ca-de17-4f8c-937b-8dc5cb26e296',
        '616ec46c-593c-4803-b35c-088cd0ced772',
        '7a020b38-ac6a-465b-99c3-b28aa2c906d9',
        '8a027155-32eb-47e3-b3d2-525b21b422f8',
        '282d5612-28d9-4875-877b-6711eb2a0ac5',
        'dec1ecc4-7f1b-4fd0-ad9b-ec4813ad0cb5',
        'b31063a2-8345-46a5-a272-d6247ab11175',
        'e2249e5d-79c9-4c8f-8321-8c51a75d6403',
        '24e133ba-71bb-44b2-96e5-b2fcae25744e',
        '24b4d93b-2c35-4387-b3ba-4af3b3215bec',
        'f85bf82f-98c8-4a08-be17-44474d1c9321',
        '8fa8907b-874c-4152-9a10-6cebeb1eb62f',
        'e3697c29-6bd9-487c-bc09-8f5ff95c1d48',
        'dda169ad-3c88-49b0-aa77-e3ac7e3b4fa7',
        'bb4bf20d-fafe-4164-8aba-56912b9d3103',
        '0875ac0b-ee9f-4cbf-85dc-05ffbb90404a',
        'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
        'c401cec2-edb9-48d9-af75-9cf874b8c9cb',
        '58f3cae9-f314-4099-9474-ffd22ac28516',
        '1c1f8ed7-6041-4885-9e44-fe5b7630e74b',
    ],
    investorAndMediaRelations: [
        ...footerComponents,
        'ade5e1c6-523e-429c-916b-72ad9a499a43',
        '9aa8b8a8-c073-44ac-9ec1-849690119a63',
        '7abca889-5bee-407d-a716-99f0c664fd5f',
        'ac39f713-73c9-40de-8639-e0032c19ec17',
        'd096e2be-a098-4bf4-bf74-673ad18f0e02',
        '5b08d2f4-ded5-4752-b8d0-2fab4c416ae7',
        '3c2f4b57-4215-4faa-a15e-eb75077fbe46',
        '13bbb4e6-03e9-4c7e-aec4-367fcb3b24a7',
        'e16dfc84-c112-43c3-bf44-06a3d55dab80',
        '8d2d87b6-6210-426d-8e92-bc3ef6e16d5c',
        'a145d2c7-5747-4489-b83d-97c8aca83375',
    ],
    csrPolicy: [
        ...footerComponents,
        'a95b4de7-6d8e-406f-b921-82b7f030c64f',
        '4aff118d-28aa-4074-9976-8e51202a7530',
        '38afe56a-680c-4d35-97f4-6d2c2f2e8969',
        '67147dc7-16fb-4548-b7ee-0428c4f70ac7',
    ],
    existingCustomerBenefits: [
        ...footerComponents,
        'bcdfd437-2137-40e0-98d0-3a0703b55969',
        'f3ec4c47-e0ab-41ce-bbe2-08efe9296858',
        '32111c92-6668-4b57-a813-5cf1130b608d',
        '2926adfd-3659-44dc-b325-31ec926dd7c9',
        'ddfcac78-f392-4697-9f69-7a01659aa9b4',
        '491f7831-7aba-45d4-9c86-89f9149286c6',
    ],
};

const headerStrings = [
    {
        id: 'ad890c17-1d54-4730-941b-5818dee32576',
        text: 'Lorem ipsum dolor sit amet. Et ipsa sunt non dolores libero et maxime velit',
    },
    {
        id: '4ea5f527-4a58-4404-a7a3-9b2da34102df',
        text: 'What are you looking for',
    },
    {
        id: '3a5e1f9c-db8a-44a5-8a38-7ea5a0d76333',
        text: 'Home Loan',
    },
    {
        id: 'daa2c91d-1a3e-4268-997f-183501da9303',
        text: '#',
    },
    {
        id: '980c425d-e5c4-4caf-8448-b1c2c8debe8f',
        text: 'LAP',
    },
    {
        id: 'a929479b-f37c-4d6f-8a17-dd756d813ecb',
        text: '/product/loan-against-property',
    },
    {
        id: '21ae9c09-8a3a-4355-807c-38cb168b5331',
        text: 'Calculator',
    },
    {
        id: '8c32fffb-d873-487d-ab81-e07c51f8f25f',
        text: '#',
    },
    {
        id: '9abd122e-a285-4007-b9c1-89b41ed5c3f4',
        text: 'Contact Us',
    },
    {
        id: 'f5dabef1-70da-4ed7-aa58-72f7a9cdb9ef',
        text: '#',
    },
    {
        id: '5c42a5aa-9d4e-4fb3-9c75-a9eba168be3f',
        text: 'Become a Partner',
    },
    {
        id: 'eaa51450-6402-43bc-89e0-9631d4a9915f',
        text: '/become-a-partner',
    },
    {
        id: 'b0bbc4ea-43a5-4f17-b5e0-7ba000c30345',
        text: 'Loan Against  Property',
    },
    {
        id: '908649cd-fbac-40b1-99a7-2d3acf87cc2e',
        text: '/product/loan-against-property',
    },
    {
        id: '6cf3b32b-7320-4ae3-846c-ac757af68d86',
        text: 'New Home Loan',
    },
    {
        id: 'cecfbedc-d44e-48ce-9423-dd27d4c27b0e',
        text: '/product/home-loan',
    },
    {
        id: '01a05870-41e2-480e-b244-3d8b3cd593ae',
        text: 'Home Loan For NRI',
    },
    {
        id: 'acc709f0-bf92-4369-9a91-ac4502435bf4',
        text: '#',
    },
    {
        id: '6d02fba7-487a-4313-bce8-b003ae471945',
        text: 'Rural Home Loan',
    },
    {
        id: 'b86b6c5d-49df-442f-ba69-d320d0d234ad',
        text: '#',
    },
    {
        id: '7baa48b3-df82-46dc-8df5-0f5b168b35be',
        text: 'Home Extension Loan',
    },
    {
        id: 'a4f99a4e-e436-45fd-9ec8-060af2a79aba',
        text: '#',
    },
    {
        id: '7bc359bc-061b-444e-9ff3-644e19314ae3',
        text: 'Home Renovation Loan',
    },
    {
        id: 'f6e3e960-a6e1-4b91-b708-ab2ae78f7cb3',
        text: '#',
    },
    {
        id: '92638394-ec9a-4d79-8903-34a0f5c5c12d',
        text: 'EMI Calculator',
    },
    {
        id: '0b6da32f-168e-4c00-a51a-b1b244d4cd6d',
        text: '/emi-calculator',
    },
    {
        id: '2a86175b-1b2a-4390-833f-5e6f1bec8320',
        text: 'Eligibility Calculator',
    },
    {
        id: 'cf39411c-2eca-4fec-abec-ef59818bf047',
        text: '#',
    },
    {
        id: '48056ad6-9f3e-4e2b-9279-1abad7cf4d69',
        text: 'English',
    },
    {
        id: '6b142d16-8fa3-427a-8347-ec6cb3f9d61c',
        text: '#',
    },
    {
        id: '02f16f8e-dcfc-4494-897e-fa65309b31ee',
        text: 'Hindi',
    },
    {
        id: 'a58b1604-35a2-4ec7-9be9-845c001d6353',
        text: '#',
    },
    {
        id: '6d102708-6337-4d7d-8b39-b2248bc21802',
        text: 'Punjabi',
    },
    {
        id: 'f2b029bb-9056-427d-9bdd-d4c9bb535526',
        text: '#',
    },
    {
        id: 'd0e02010-0361-4b1c-95a0-38c79a433c12',
        text: 'About us',
    },
    {
        id: 'af150078-09fa-4d47-b032-4d853902def7',
        text: '/about-us/overview',
    },
    {
        id: '88cf5cb8-3b80-4458-a7a2-549867a9c151',
        text: 'Management Team',
    },
    {
        id: 'bc2e691a-bf5a-4970-9d30-c380a1d974af',
        text: '/about-us/management-team',
    },
    {
        id: '5764ad99-f008-428e-9987-1f1101898d6c',
        text: 'Board of Directors',
    },
    {
        id: '5bf42cb8-fda5-40f8-8342-5c71ce8e5633',
        text: '/about-us/board-of-directors',
    },
    {
        id: 'a3e284d1-8773-4868-b61b-736e6b68bcae',
        text: 'ESG Profile',
    },
    {
        id: '85288d0f-deec-446c-908b-47b05da71c9a',
        text: '#',
    },
    {
        id: '04082d5d-2725-4c8b-a8f5-57a454fd9129',
        text: 'WhatsApp - +91-8929899391',
    },
    {
        id: 'ea019036-6e15-4fd5-8a43-db78d1d7e278',
        text: 'https://wa.me/8929899391',
    },
    {
        id: 'c32993b8-787c-4a32-9be2-d92b7ae7fb2c',
        text: 'Quick Searches',
    },
    {
        id: '2019a034-396c-4e92-b276-27d71267228b',
        text: 'Login',
    },
    {
        id: 'a0358400-d94e-46e9-8005-543bb2f5cd77',
        text: 'Apply Now',
    },
    {
        id: '1229fb51-37c4-4a9f-8d9b-26cb1d559da7',
        text: 'En',
    },
    {
        id: '727468af-f148-458d-bc97-6c3fcb8c3047',
        text: 'About Us',
    },
    {
        id: '992861c8-cc68-4f9b-b119-5e4336cf30f8',
        text: '/about-us/overview',
    },
    {
        id: '8e4c05c6-deee-4c07-b2d4-969b7bb19d9c',
        text: 'Affordable Calculator',
    },
    {
        id: 'ea05ffb8-0480-439f-8552-55dbbfb676e6',
        text: '/affordable-calculator',
    },
    {
        id: '74897f04-b443-4ae8-9e44-804faf2662c0',
        text: 'Awards And Accolades',
    },
    {
        id: 'c4fc9e60-ccab-43ae-b9ab-662b5c641895',
        text: '/about-us/awards-and-accolades',
    },
    {
        id: 'da27d46d-6c36-43b4-8548-276b52752797',
        text: 'Become a Partner',
    },
    {
        id: '443fc295-e2d2-4ef8-9348-01da574512d0',
        text: '/become-a-partner',
    },
    {
        id: '8b37a786-be17-4997-9e1c-61b3b7da7291',
        text: 'Board Of Directors',
    },
    {
        id: '2a937150-20aa-41c1-8f50-9c789e5cf155',
        text: '/abour-us/board-of-directors',
    },
    {
        id: '41d5b5cf-9155-4f5f-b822-2a099a1ca4c5',
        text: 'Career With Us',
    },
    {
        id: '744232e4-88ab-4792-96c1-24cb2c80f076',
        text: '/career-with-us',
    },
    {
        id: 'a97d8143-09ee-4723-a37f-879fde361631',
        text: 'Cookie Policy',
    },
    {
        id: '9bee6b87-be87-474f-b8ef-b2e09a0d1993',
        text: '/cookie-policy',
    },
    {
        id: '44c3fe2c-0de9-4181-8055-8c5da043dbd7',
        text: 'Customer Support',
    },
    {
        id: 'e3957e79-7047-40f6-80fa-936ac47cda98',
        text: '/contact-us/customer-support',
    },
    {
        id: '9400a512-e9c4-42c1-af6f-cf4024e29e0a',
        text: 'Feedback And Query Form',
    },
    {
        id: 'c864a3b2-e000-4bf7-8029-98989fec6142',
        text: '/customer-support/feedback-query-form',
    },
    {
        id: 'f82ffb95-d076-4d4c-be56-204c504db31a',
        text: 'Grievance Form',
    },
    {
        id: 'fc5bf2d1-95ac-486a-8c3b-b6eaef01adb6',
        text: '/customer-support/grievance-form',
    },
    {
        id: '89227a48-9041-45f2-afc1-3e64d13c2d4d',
        text: 'Home',
    },
    {
        id: '2210ce84-e029-484a-afc4-d6020f22a345',
        text: '/',
    },
    {
        id: '5e99e476-bdd0-4795-a545-5fe73c86c92b',
        text: 'Home Loan in Delhi',
    },
    {
        id: '557d35cd-030c-4f7e-be8f-8d7861d6f9d9',
        text: '/seo/home-loan-in-delhi',
    },
    {
        id: 'd25433c7-a064-4047-a77b-3bf3422c2633',
        text: 'Locate Us',
    },
    {
        id: '0f6004d9-e7f9-495d-8dc5-7154a0eff7b0',
        text: '/contact-us/locate-us',
    },
    {
        id: 'f4bc4689-1ab7-4a0c-92a7-0eedc2681ada',
        text: 'Management Team',
    },
    {
        id: '0c7787c1-6600-4eac-9c4a-8077751b1855',
        text: '/about-us/management-team',
    },
    {
        id: 'c0aae03b-94b0-4075-9eb0-09b5b3e69ee0',
        text: 'PMAY Calculator',
    },
    {
        id: '2b098eee-9ad2-45e3-bce6-b29e2c8ffceb',
        text: '/pmay-calculator',
    },
    {
        id: 'f63c2cee-f793-4e98-8854-c9b3500fdda3',
        text: 'Home Loan',
    },
    {
        id: '3798a7f0-b975-4875-9e0a-91ea88a9c693',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'bb629615-075e-4e83-a201-57254403c357',
        text: '',
    },
    {
        id: 'a91dba33-ac34-4206-84df-e4ed83824064',
        text: '/product.home-loan',
    },
    {
        id: '070d4d0d-3d69-45a1-8ea5-2f2cce2b6fc2',
        text: 'Home Loan Balance Transfer',
    },
    {
        id: '17049759-0fe7-4db2-b68f-bc6fd0773fed',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '61eccd00-b91d-4d29-80e5-26cbab0c1cca',
        text: '',
    },
    {
        id: '5daa6505-3359-43a6-8666-ea447357d1ed',
        text: '#',
    },
    {
        id: '0e22ccc5-fbc6-4328-89a8-f6250155d93a',
        text: "Home Loan for NRI's",
    },
    {
        id: 'b6ced495-27a2-4006-a5d1-c0cf8088746c',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '9d2f6116-5f5f-4831-bcce-e0c373bcaed9',
        text: '',
    },
    {
        id: '354ade57-fd8a-47c3-bfa6-fb67f6e2b403',
        text: '#',
    },
    {
        id: '73fa877d-ab25-43f3-82a8-a47358d2254e',
        text: 'Home Renovation Loan',
    },
    {
        id: '14cd2491-7200-4635-8cb5-f8ac5e8454bc',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'c44bdc52-53c7-4da4-95b4-67ad250121c6',
        text: '',
    },
    {
        id: '963ec677-f5d8-4294-96cb-d7539c8743ff',
        text: '#',
    },
    {
        id: '3d9689ee-f12c-44f2-beee-14ae591829c1',
        text: 'Home Extension Loan',
    },
    {
        id: '44b06ff5-fc4b-4aba-a745-8a68f632f77e',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '7af6bc8a-50e3-478b-9a19-7a1d0502447e',
        text: '',
    },
    {
        id: 'ac54ce7e-41d3-42a3-ba63-bdf4eb46ef15',
        text: '#',
    },
    {
        id: '1cc5b3f3-fb63-4334-93ec-e622bf7a1052',
        text: 'Rural Home Loan',
    },
    {
        id: '3470e2f5-f964-4336-a88a-0af0fed65c18',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'b9956b4f-491e-4b67-a37a-ce06dcff7d02',
        text: '',
    },
    {
        id: 'be14d52c-6bd6-4ec6-aeeb-2f9aaad6b04a',
        text: '#',
    },
    {
        id: '94f9aec1-3556-4189-a8f9-60b32ac24f5c',
        text: '',
    },
    {
        id: '286c6d9f-a5f6-4408-aeb3-4a4527ee73ac',
        text: 'Find Your Perfect Home Now',
    },
    {
        id: '64192f06-3c81-473d-87d6-dd63447e8e60',
        text: 'Apply Now',
    },
    {
        id: 'caa34a29-503a-45ed-8c9e-92f55edb015e',
        text: 'EMI Calculator',
    },
    {
        id: '2efddc1d-eb85-46ce-b9e4-5847195ec927',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'fb185d3d-7ad1-4014-bdee-2ddf4279fd71',
        text: '',
    },
    {
        id: '3c651868-9395-428b-a83a-4fd5f0063b36',
        text: '/emi-calculator',
    },
    {
        id: '596db541-1ff2-48e8-ade5-4232a615dde1',
        text: 'PMAY Calculator',
    },
    {
        id: 'a5c2cde7-0ede-42db-a8c4-119a3ee04a38',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '3e479b62-a4c8-4f28-b07c-20a1ad7acabe',
        text: '',
    },
    {
        id: 'f18975d7-9aaa-427d-9d5b-4e82b8a8e211',
        text: '/pmay-calculator',
    },
    {
        id: '93e8322d-cd4f-47f8-be89-2a7efa46836c',
        text: 'Affordability Calculator',
    },
    {
        id: '844f1931-d383-44ac-bc7e-1d1f0a63b373',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'fe8f6545-ea6f-4b32-aab3-908de3211743',
        text: '',
    },
    {
        id: '85f1f669-f6f0-4556-9d95-1f11a0f52dcf',
        text: '/affordability-calculator',
    },
    {
        id: 'eeb42fad-2b3f-474d-b56f-14925681d40d',
        text: 'Eligibility Calculator',
    },
    {
        id: '074da782-deda-4416-a9be-c21760febf61',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '8b90d322-3971-4a46-a053-946a62ba40ef',
        text: '',
    },
    {
        id: 'a2cee9b0-80ed-443c-bbec-9f42125c219e',
        text: '#',
    },
    {
        id: '89a8e29f-d278-46cc-a1a4-b636e83a024a',
        text: 'APR Calculator',
    },
    {
        id: '177cd295-cbfe-4023-a624-1c9557f3d561',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '4653a593-765a-4672-af74-b107ceaf45e1',
        text: '',
    },
    {
        id: '3a84188c-a9a9-4946-8588-b661d64f31ef',
        text: '#',
    },
    {
        id: '63be1d2d-bfa2-4ec3-88ae-500d9e7c020b',
        text: 'Stamp Duty',
    },
    {
        id: '28dae4c0-b5a6-413d-b216-56af78e3402f',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '1c3de5a7-41c9-4a00-bbb2-5c94705b8027',
        text: '',
    },
    {
        id: '094121ca-088b-4eff-9ac8-f70b5a2ebd94',
        text: '#',
    },
    {
        id: '601566f5-2c9f-42f0-8b6d-7e72bde709cb',
        text: 'Tax Benefits',
    },
    {
        id: 'd6cee33d-0792-4c83-b48b-dc579437e0d5',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'eafd7f86-3900-4f8f-86b7-72876431245d',
        text: '',
    },
    {
        id: '4b13a078-7d3d-41f2-8f33-93150f476432',
        text: '#',
    },
    {
        id: '18df915c-5ba3-463d-95a0-ee76713373de',
        text: '',
    },
    {
        id: '3e3d01eb-27d7-4e31-b5d9-ab0c1639c880',
        text: 'Simple Calculations. Clear Decisions.',
    },
    {
        id: 'e5e0e505-53f5-48c1-94d0-2fbe56e7aa66',
        text: 'Apply Now',
    },
    {
        id: '616b4643-0056-4920-b2d7-1d091afd425e',
        text: 'Locate Us',
    },
    {
        id: '1c90bb02-e4d1-4ef8-8bb9-d2566ed78ab5',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: 'ea83541a-6a08-41c7-8c7d-9ea9d20d754f',
        text: '',
    },
    {
        id: 'e7c9c34a-8f9b-4c8f-ac99-744bd35aa7f0',
        text: '/contact-us/locate-us',
    },
    {
        id: '21db7840-59a0-4c64-b929-fcf99e1b2bb3',
        text: 'Customer Support',
    },
    {
        id: 'f04c6e63-0cd5-4549-8f32-8cceca47d761',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '47949db9-b9e8-41c4-a9e2-2e162d59f1f8',
        text: '',
    },
    {
        id: '5cfb5bfa-f438-4b2f-95d0-2947ef0312e9',
        text: '/contact-us/customer-support',
    },
    {
        id: 'b39c29fb-b292-4913-a07e-13c8b10df939',
        text: 'Investor & Media Relations',
    },
    {
        id: '091cc93f-f09f-4d1c-9e13-7a147b6da352',
        text: 'Lorem ipsum dolor sit amet consectetur elit',
    },
    {
        id: '98eaf6fb-6882-4552-85b4-179d4f632772',
        text: '',
    },
    {
        id: 'b08c4ef6-6057-431f-bfe2-1070b1708bed',
        text: '/contact-us/investor-media-relations',
    },
    {
        id: 'e27c3a0a-c414-4f52-adf8-85cb2f7b7736',
        text: '',
    },
    {
        id: 'd0a6729a-cce8-41f4-acd5-c2062a0b7f0b',
        text: 'Connect and Interact With Us Now',
    },
    {
        id: '40c6eb90-9ae8-43aa-a3f9-8d7691d172f6',
        text: 'Apply Now',
    },
];

const footerStrings = [
    {
        id: 'ed7614e1-8772-40d7-adb4-7aa4b11197dc',
        text: 'Our Offerings',
    },
    {
        id: '962896e3-fe8a-4077-833e-957737e893f4',
        text: 'Sammaan',
    },
    {
        id: '380999f3-3655-4d5a-8a56-fc5ea867db61',
        text: 'Capital',
    },
    {
        id: 'dac41596-505e-4bb6-9a66-9889ae7aaedf',
        text: 'GET IN TOUCH',
    },
    {
        id: '85780b59-0ef1-4aa5-b5a4-03f67b4610da',
        text: `Plot no.422, Udyog Vihar,Phase-4, <br/><br /> Gurugram Phase-4-422 (Head Office)`,
    },
    {
        id: 'df275923-01c5-4c0c-8255-3d7cbd39ae33',
        text: '1800-572-7777',
    },
    {
        id: 'b2407ee8-a1bc-4e70-a603-421b17c51c40',
        text: 'homeloans@indiabulls.com',
    },
    {
        id: '06a37dfb-57c3-4f22-a967-14e031c5c450',
        text: 'New Home Loan',
    },
    {
        id: 'b63c302b-0f25-4e27-be0b-a1952397a46c',
        text: 'Home Loan Balance Transfer',
    },
    {
        id: '50179052-5f06-444e-9374-e61d0487fb8e',
        text: 'NRI Home Loan',
    },
    {
        id: '550851ba-dcfd-4aa5-a04d-e76b41e3d430',
        text: 'Home Renovation Loan',
    },
    {
        id: '12e3553b-da7f-4d49-9125-bf3c9ca15b3d',
        text: 'Home Extension Loan',
    },
    {
        id: 'bfb2f99b-9a11-429a-8b7f-6405e36a259a',
        text: 'Rural Home Loan',
    },
    {
        id: '626498be-2d60-430e-b1be-efe48c8c7900',
        text: 'Loan Against Property',
    },
    {
        id: 'fe500149-f6be-4761-927f-4acf448908b5',
        text: '#',
    },
    {
        id: '66e14d86-92fc-428d-9b3c-651d6755ddb6',
        text: 'About Us',
    },
    {
        id: 'e10e8f36-176b-4db2-ae57-f35a4f7affae',
        text: 'Overview',
    },
    {
        id: 'ef4741fe-bbd8-4c78-ae09-eb679df95397',
        text: 'Management Team',
    },
    {
        id: '112ad47f-1cbd-4191-86b4-460d1a5a8c10',
        text: 'Board of Directors',
    },
    {
        id: 'bd692edc-1ce8-4efe-a4c2-575dfe49b713',
        text: 'Awards and Accolades',
    },
    {
        id: 'be6c493d-c568-4410-8bf9-8f3eadd51fd4',
        text: 'EMI Calculator',
    },
    {
        id: 'a928b10b-628e-47c1-9cc7-f4bc76812a14',
        text: 'Eligibility Calculator',
    },
    {
        id: '5de0e0b5-9d47-49c2-9b97-354d4fd64769',
        text: 'Tax Benefit Calculator',
    },
    {
        id: 'd15600e6-d87c-4804-ac60-2d8f447ff5ca',
        text: 'Stamp duty Calculator',
    },
    {
        id: 'f0b529ec-e05a-4425-a182-7ad387faafef',
        text: 'PMAY Subsidy Calculator',
    },
    {
        id: '76faf409-fb05-4845-b2ab-7dd2632f0cf8',
        text: 'Affordability Calculator',
    },
    {
        id: '9bd47e89-a883-45b2-ba8f-6f8cd721e1ee',
        text: 'Calculators',
    },
    {
        id: '71131a25-3c9b-437e-b802-2442caf119cf',
        text: 'Contact Us',
    },
    {
        id: 'e003fc74-47bd-43d4-95cd-cda39f301b5f',
        text: 'Customer Support',
    },
    {
        id: '97f31122-1ff8-4fe3-a9a8-86d9ab8e8bf9',
        text: 'Locate Us',
    },
    {
        id: '284f49b3-47a1-4cb6-a2f8-e7593b734e3c',
        text: 'Investor & Media Relations',
    },
    {
        id: '689f2e1a-18f4-4a89-adf6-49d3fbb01216',
        text: 'ECLGS',
    },
    {
        id: '1ada4b59-f2ad-4fcf-948a-a221577fe83b',
        text: 'ROI Range',
    },
    {
        id: 'ca2cda32-32a0-4a73-b942-44c7ed72712b',
        text: 'ROI Switch Policy',
    },
    {
        id: '7656ee64-ee38-40bd-97cc-b11bca2590c1',
        text: 'Resource Centre',
    },
    {
        id: 'bef9908f-3d79-4a68-8ad5-186aeef0d757',
        text: 'Document Checklist',
    },
    {
        id: '38d5d280-2792-4129-bfa3-5dc70c645806',
        text: 'Interest Rate',
    },
    {
        id: 'b01aa581-1171-4dfc-8e31-62bc0d695980',
        text: 'Fees & Charges',
    },
    {
        id: '179d756b-e8df-4a1c-9879-89cbc09d052e',
        text: 'Prepayment Charges',
    },
    {
        id: '214f5e34-1143-424e-9199-75ba7e9f41df',
        text: 'FAQs',
    },
    {
        id: 'ee765c3b-2057-422a-ba04-a71d8b6ce342',
        text: 'Video Centre',
    },
    {
        id: 'd6009009-6b8a-4f3c-be4b-3c67684bdab1',
        text: 'Blogs',
    },
    {
        id: 'aa557a1b-b158-4059-845a-c1f4bb3e16d6',
        text: 'Downloads',
    },
    {
        id: 'fff77d51-7ecd-4567-86f1-9c4c8ecc2a1b',
        text: 'Financial Reports',
    },
    {
        id: 'd2a61e8f-dd59-47d0-91e4-c9249ff774c5',
        text: 'Investor Presentations',
    },
    {
        id: '01e7e4a8-dc12-4916-bab6-3afe5ee56365',
        text: 'Company',
    },
    {
        id: '70b2c4f5-5750-47fa-85b4-738437329a64',
        text: 'ESG World',
    },
    {
        id: 'c660f7aa-091c-4ab2-8084-0e5ab67bd8ed',
        text: 'Public Issue NCD',
    },
    {
        id: '9dd860ac-40ab-4d6e-8d5c-513983771954',
        text: 'Cancel Mandate',
    },
    {
        id: '24a6c84c-e716-4f6b-867f-9e7323e8327b',
        text: 'Become a Partner',
    },
    {
        id: 'e73fa2ef-c040-424f-a814-870f408606cf',
        text: 'CSR Policy',
    },
    {
        id: '2834dd3f-a96d-44a9-bd99-a30ce4de44e3',
        text: 'Career',
    },
    {
        id: '71f79217-521a-49dd-b7f8-99fcf8c5b48f',
        text: 'Press & Media',
    },
    {
        id: 'a1eda80b-b330-45de-acb4-5453ab79a5b0',
        text: 'News Corner',
    },
    {
        id: '1a34d067-8791-44c3-b6a3-b0c1b7459d97',
        text: 'Sitemap',
    },
    {
        id: 'e61e2f9f-b989-43f2-9d3d-d8e08909bcb1',
        text: 'Fair Practice Code',
    },
    {
        id: 'aafa29bb-bcf2-4f10-b24b-533995b7c1f9',
        text: 'Benchmark Rates',
    },
    {
        id: '51581679-411f-4060-b3bd-33f45172d8e4',
        text: 'KYC Guidelines',
    },
    {
        id: '826ce734-3ab4-4a27-be96-d787a5816547',
        text: 'Downloads',
    },
    {
        id: 'f7b1550a-0460-44e1-8bfc-adf1bc1907df',
        text: 'Sales Notice',
    },
    {
        id: '704bccb8-56f5-4255-aa49-3485c88d1e7c',
        text: 'Sales Login',
    },
    {
        id: '6fbba50b-2e5d-4524-a7f5-d3658552c7c0',
        text: 'Auction Portal',
    },
    {
        id: '47f739e1-7e1b-479d-a07c-a6ce0fc8e008',
        text: 'Cookie Policy',
    },
    {
        id: '3f4def69-f4a0-4c87-a2b4-61d0e81048d5',
        text: 'Privacy Policy',
    },
    {
        id: '895b3673-d6e5-40d1-b5e0-f2aa0ead7c5a',
        text: 'Terms & Conditions',
    },
    {
        id: '267269af-39bc-4215-b475-4dfa342785da',
        text: 'Whistle Blower Policy',
    },
    {
        id: '77db889e-a6ba-4eea-87f3-9b7c813714a6',
        text: 'Grievance Redressal Policy',
    },
    {
        id: 'b1ea5b54-b8b7-4419-8015-340d9bb3ea10',
        text: 'Environment Policy',
    },
    {
        id: 'b7bc6ee8-b69e-4ed1-a14b-cdc7a9c7f2f8',
        text: 'Quality Policy',
    },
    {
        id: 'f5e09c37-0f22-4f60-b213-e70330d83761',
        text: 'Social Media Policy',
    },
    {
        id: '62186aef-712f-410d-8e36-cb94b395dc7d',
        text: '© Livguard 2023. All Rights Reserved',
    },
];

const needHelpString = [
    {
        id: '19f2d4c2-c283-4487-b630-4211490f56bb',
        text: 'a',
    },
    {
        id: '4d37f5c2-5fa0-417a-93a5-cb0a7c120c75',
        text: 'Get In Touch With Us',
    },
    {
        id: '32a4b1e1-0dd1-4faf-8942-1625f921edf6',
        text: 'Full Name',
    },
    {
        id: '525b1b32-8b55-4ab5-8264-429319252d7b',
        text: 'Email ID',
    },
    {
        id: '9f40bee5-a8a1-4b34-bc80-77b7e73fd02b',
        text: 'Phone Number',
    },
    {
        id: 'bb67455d-4f1e-4b4e-87f8-4e165597ccd3',
        text: 'Pincode',
    },
    {
        id: '7a659e01-1231-48bb-9be7-84a781d15f7f',
        text: 'Category',
    },
    {
        id: 'bf5e333f-d062-44fa-89ae-ebb3b0584b85',
        text: 'Tell us the reason',
    },
    {
        id: '830a213b-2da7-4e78-9721-2e86b3344e0c',
        text: 'I agree to Terms & Conditions',
    },
    {
        id: '548ba16c-fd16-4622-b51e-2656a4e959b9',
        text: 'Submit',
    },
];

const calculatorsStrings = [
    {
        id: 'b8201b12-dba2-431b-8359-3ef4d39972cf',
        text: 'EMI',
    },
    {
        id: '14cd7ae9-79aa-41bd-9d49-d8a68129d0f3',
        text: 'Eligibility',
    },
    {
        id: 'a7eb30f6-c8a0-41f2-a3cf-f2c93e47c1a8',
        text: 'Affordability',
    },
    {
        id: 'ff1dfcf5-072a-4665-948d-3c0ea870cf88',
        text: 'PMAY Subsidy',
    },
    {
        id: 'cc8b619f-ab2f-484d-9241-2f948922936b',
        text: 'Stamp Duty',
    },
    {
        id: 'a578ca87-0c37-4c54-9df1-58e281c22fd3',
        text: 'Tax Benefit',
    },
];

const stickyBarString = [
    {
        id: 'ea781c08-8ee5-4ad6-a39b-dcbc958a8963',
        text: 'Home',
    },
    {
        id: 'b171a04d-db3f-4499-b7ff-03c3b7e07c8a',
        text: 'Apply Loan',
    },
    {
        id: '2868a060-1bd7-4ef5-a416-a037f4a5d205',
        text: 'EMI Calculator',
    },
    {
        id: '9ab125df-21f5-4883-a14b-902851ab1cdf',
        text: 'Contact Us',
    },
];

const helpSectionString = [
    {
        id: '428c291a-fdab-47ff-ba90-365b950a312f',
        text: '#',
    },
    {
        id: '9ad6729b-f7b5-4413-b596-1016a158c315',
        text: 'Email us',
    },
    {
        id: 'd8437fd3-044a-48bc-9b4d-b7680c256043',
        text: 'homeloans@indiabulls.com',
    },
    {
        id: '3d0aff17-3e39-4dce-b707-aace3e753f31',
        text: 'mailto: homeloans@indiabulls.com',
    },
    {
        id: 'e6e43db0-b814-4c26-89cb-bd593238b060',
        text: '#',
    },
    {
        id: '3bb25e22-746a-4ece-a82b-deedbdbde98c',
        text: 'Customer care',
    },
    {
        id: '39312ee5-dbe7-4a74-a8ee-9e90d2d85398',
        text: '180000000000',
    },
    {
        id: 'd9e10d5d-7c2a-400f-8cb8-d917d7655568',
        text: 'tel: 180000000000',
    },
    {
        id: '895985de-4170-4c3c-8945-8ee6b54f5fea',
        text: '#',
    },
    {
        id: '436a43ca-59d4-4a34-b5ce-f5db248cee9c',
        text: 'WhatsApp',
    },
    {
        id: '49ced680-6c19-4221-b268-e023be356df7',
        text: 'WhatsApp on 82390199000 or scan the QR code',
    },
    {
        id: '798b26f5-9495-43bb-a288-3dc0752eaea8',
        text: 'https://wa.me/82390199000',
    },
    {
        id: 'd5ee8ad9-8d1a-4f0e-b19d-e058d4da59c0',
        text: '#',
    },
    {
        id: 'a364722c-bbc3-48f9-b42e-efefe800beb5',
        text: 'Branch Locator',
    },
    {
        id: '9a5d5709-0b25-47dc-b256-191ab8a30dee',
        text: 'Locate your nearest branch',
    },
    {
        id: '71baa4ca-fff2-45c5-94e0-5b062ae081a2',
        text: '/contact-us/locate-us',
    },
    {
        id: '7f64eb7e-0531-468a-ad82-de6dac72555c',
        text: 'Connect with Us: Fill the Form Below',
    },
    {
        id: 'd85006aa-c9eb-4a80-b55c-b9c57e40de0d',
        text: 'Mobile Number',
    },
    {
        id: '622ef756-9c3e-4370-9e61-d0ab3379d20c',
        text: 'Full Name',
    },
    {
        id: 'feae508e-4fc3-430a-b382-6dacccee8e1c',
        text: 'Tell us your query',
    },
    {
        id: '741ccc23-cd6f-4302-a11a-65e4adda8ca7',
        text: 'I agree to Terms & Conditions',
    },
    {
        id: 'c7c4328f-1cf3-47f0-8b2b-8cd61338ede7',
        text: 'Submit',
    },
    {
        id: '9c307452-501c-465c-bfa3-1a2f831f1c08',
        text: 'Thank You for Connecting with Us!',
    },
    {
        id: 'e1694c8a-5b67-4049-8370-2c3f26d1e13c',
        text: 'We’ll get back to you in 24-48 hours',
    },
];

export const contentData = {
    homePage: [
        ...footerStrings,
        ...headerStrings,
        ...stickyBarString,
        ...helpSectionString,
        ...calculatorsStrings,
        {
            id: '064ffad3-01c1-4d53-b5a4-1c70569f1002',
            text: 'View All Calculators',
        },
        {
            id: '0b4cf691-66e5-4b27-8415-4c441bb696fa',
            text: 'All',
        },
        {
            id: 'ae050ac5-d8fb-4f52-9cc0-86f6bdd11b69',
            text: 'Calculate Your Loans',
        },
        {
            id: '15a973d8-8ff8-4847-a4c1-7bf3a50a539d',
            text: '',
        },
        {
            id: '4d37f5c2-5fa0-417a-93a5-cb0a7c120c75',
            text: 'Get In Touch With Us',
        },
        {
            id: '32a4b1e1-0dd1-4faf-8942-1625f921edf6',
            text: 'Full Name',
        },
        {
            id: '9f40bee5-a8a1-4b34-bc80-77b7e73fd02b',
            text: 'Phone Number',
        },
        {
            id: '525b1b32-8b55-4ab5-8264-429319252d7b',
            text: 'Email Id',
        },
        {
            id: 'bb67455d-4f1e-4b4e-87f8-4e165597ccd3',
            text: 'PinCode',
        },
        {
            id: '7a659e01-1231-48bb-9be7-84a781d15f7f',
            text: 'Category',
        },
        {
            id: 'bf5e333f-d062-44fa-89ae-ebb3b0584b85',
            text: 'Tell us the Reason',
        },
        {
            id: '548ba16c-fd16-4622-b51e-2656a4e959b9',
            text: 'Submit',
        },
        {
            id: '830a213b-2da7-4e78-9721-2e86b3344e0c',
            text: 'I hereby authorize to call, email, SMS, WhatsApp me in relation to any of the products and override any registration for DNC/NDNC.',
        },
        {
            id: 'e16519d9-4bfe-41a7-a103-a281c3cbfd37',
            text: 'EMI Calculator',
        },
        {
            id: '3dd887d7-6462-4fe2-ac1a-ba658ac5bac3',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '659d11e0-cfcd-40df-b84a-36009969e292',
            text: 'Calculate Now',
        },
        {
            id: 'de203b59-7eea-4d07-8baa-6e801ebdfcfe',
            text: '',
        },
        {
            id: 'c3b80b1d-6c2d-4d4b-8e1e-0241ffb0a3d0',
            text: 'Sammaan is about understanding that everybody has different journeys and dreams. Irrespective of who they are or where they came from. About being inclusive rather than discriminatory.',
        },
        {
            id: '11ad9afc-c831-43cd-b523-76744f2e62b6',
            text: 'Sammaan Capital in Numbers',
        },
        {
            id: 'd71a15c9-6a44-4a63-ab4e-72eb5696ef0b',
            text: '#',
        },
        {
            id: '0c309f95-fd15-475b-9d53-0beb752a7794',
            text: '3rd largest',
        },
        {
            id: '6d466aa1-1dd0-425e-849b-39089a7cfaf1',
            text: 'HFC',
        },
        {
            id: '0d303ee4-6f2c-4ce0-a899-e7146619f5c1',
            text: '#',
        },
        {
            id: '94291849-1c26-45c8-a527-449b337d8ef9',
            text: '1 Million+',
        },
        {
            id: '96a8f4fa-f30a-4dd1-aa40-592874da4e56',
            text: 'Happy Customers',
        },
        {
            id: 'e17a2e7e-2ff0-4fde-b1d4-17582f5dea40',
            text: '#',
        },
        {
            id: '5a1f78e7-f471-4841-a5e9-cc44821257ac',
            text: '200+',
        },
        {
            id: '381c2343-4917-42b2-9a51-48d6eae9b732',
            text: 'Offices across India',
        },
        {
            id: 'b354f603-fee3-488f-8b04-38e872046b75',
            text: '#',
        },
        {
            id: '38644fdb-7d36-48a5-921f-12b6067d5ccf',
            text: '0.70Trillion',
        },
        {
            id: 'fe47c71f-f525-4e39-8f3e-1df500f9b8e8',
            text: 'Balance Sheet Size',
        },
        {
            id: '352ad3d1-8604-4232-81aa-34e80761619f',
            text: 'Loan Humara',
        },
        {
            id: '6a6634c4-e86b-4b49-8255-9c05d6b6d24b',
            text: 'Sammaan',
        },
        {
            id: 'd8edb6b0-1dd6-4b10-b625-a5598cc8c4a0',
            text: 'Aapka',
        },
        {
            id: '8d3b9434-88f5-498c-a529-797124e49e2a',
            text: '',
        },
        {
            id: '29498fec-8093-453b-9040-a6036d247b17',
            text: 'Apply For Home Loan Now',
        },
        {
            id: '979b1844-e996-4415-b18f-8e363eb0d721',
            text: 'Loan Humara 2',
        },
        {
            id: '1fe935c7-eb6b-4ae9-9349-6d5bdd1dbf50',
            text: 'Sammaan 2',
        },
        {
            id: '2129f676-25b4-4282-aad9-bf9f796d6e58',
            text: `Loan Humara <br /> <span class="tw-text-primary-500">Sammaan</span> Aapka`,
        },
        {
            id: 'a161dccd-f469-4538-9546-7ecd1fa2420c',
            text: '',
        },
        {
            id: 'df203937-f12e-4208-92f1-2d10068d8064',
            text: 'Apply For Home Loan Now 2',
        },
        {
            id: '44f97c6a-9ce9-4b87-b3d5-5fdc87499501',
            text: 'Explore our range of home',
        },
        {
            id: '1f60e0e5-1c1a-4de0-95ca-776d4a7e258e',
            text: 'loan products',
        },
        {
            id: 'a586fa9b-34c2-49d8-84e8-ed00e7299d60',
            text: '',
        },
        {
            id: '8b7ad7da-866b-45b9-b4bd-bba950537383',
            text: 'Get the best home loan for your dream home',
        },
        {
            id: '205c7ad0-cc1f-47f6-b6df-2862fa270bf1',
            text: 'Apply Now',
        },
        {
            id: '7b03fe8e-9c32-47ab-847f-50272a06dc3a',
            text: 'Loan Against Property',
        },
        {
            id: '96f11fcb-eb3d-4a50-8820-b122c7731293',
            text: 'Apply Now',
        },
        {
            id: '426225f0-1a38-43dc-8a34-0db070b865c0',
            text: '',
        },
        {
            id: 'fc5daff2-e380-47b5-b4ab-5f2cdfe05268',
            text: 'Home Extension Loan',
        },
        {
            id: '07a7a488-6fb1-4253-9dc8-cdf65621afd8',
            text: 'Apply Now',
        },
        {
            id: 'f47c7d19-ca79-488a-ae80-89cee1f48381',
            text: '',
        },
        {
            id: '5c53817d-6a81-4748-b303-2c4edb987503',
            text: 'Home Loan NRI’s',
        },
        {
            id: 'dc3b9be4-6b60-40ad-9491-bb7c020f53fa',
            text: 'Apply Now',
        },
        {
            id: 'd96fff0d-93be-4be4-8fad-b4d754e28f8a',
            text: '',
        },
        {
            id: '0e62cdee-e4b1-47be-ae95-9f756bc988d1',
            text: 'Home Loan Balance Transfer',
        },
        {
            id: '77959214-62bc-47d4-8413-90a924f26abe',
            text: 'Apply Now',
        },
        {
            id: '82ad4a2d-eda8-4913-a445-7e5315f55564',
            text: '',
        },
        {
            id: '1b8d1e05-05d9-43b1-981d-33d151582578',
            text: 'Home Loan Rural',
        },
        {
            id: 'c71204c2-c30d-461f-8bda-e8b1498d2fe2',
            text: 'Apply Now',
        },
        {
            id: 'fd730d2a-d35e-4e5a-8343-6bae35536b76',
            text: '',
        },
        {
            id: '240b0292-584b-4700-96e9-b2991531c5e7',
            text: 'Home Renovation Loan',
        },
        {
            id: 'e0f72848-11dc-45c0-a276-38b3fc3fff1f',
            text: 'Apply Now',
        },
        {
            id: 'd09f5157-388f-4f33-8bb7-c7a7c630e4f1',
            text: '',
        },
        {
            id: 'af955c11-e4b3-4bb9-a052-182ad042017d',
            text: 'Low Interest',
        },
        {
            id: '41bcc9c4-31ab-4850-9fba-dacbc52e9f05',
            text: 'Why Choose Samman Capital Homeloans?',
        },
        {
            id: '5d30a3bb-d0ec-4871-969b-2b8de018bf52',
            text: '',
        },
        {
            id: '40b45cd8-9fbb-499f-ad80-d23d5c599cd7',
            text: 'Attractive Interest Rates',
        },
        {
            id: 'afe0b05c-e440-4dc5-bb23-6719b9781cf3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'b3c4a95f-757e-4029-9983-7ef95bcbeda8',
            text: '',
        },
        {
            id: '2a0e8bd9-7f97-4f4f-a5b8-8fa601241056',
            text: 'Attractive Interest Rates',
        },
        {
            id: 'c061b140-bede-4809-915e-4121c203b0be',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '6946a5a9-4c73-4380-8d3e-698bc0aa9d6b',
            text: '',
        },
        {
            id: '6abacbd0-ea8b-4f38-b61e-6487d06d5b1a',
            text: 'Attractive Interest Rates',
        },
        {
            id: 'c6a7406d-8a05-4a2c-a96f-5a89e3a99a6b',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '96390ac3-7062-49a5-8fd9-35095faf5731',
            text: '',
        },
        {
            id: '4050f2ec-73bf-42e3-8960-7f2eda3fd1e7',
            text: 'Attractive Interest Rates',
        },
        {
            id: '205e8a7a-8692-47a4-8aa0-625a1d7d345d',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '42addcc8-ea7c-45ab-9892-5c0a65b4a8e7',
            text: 'Our customer’s reviews',
        },
        {
            id: 'a2d59821-795f-42a7-9ab8-3eb9e809f49d',
            text: '',
        },
        {
            id: '15c19222-65f9-41d5-8572-135605404299',
            text: 'Sameer Gehlaut',
        },
        {
            id: 'a848e01b-bdbb-41cd-997f-526e59fb3c9c',
            text: 'Delhi',
        },
        {
            id: 'a9048746-65de-4bda-8bf7-02838bf0f7d1',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '347bef68-b411-4a93-80a1-0d43c3c62b68',
            text: '3',
        },
        {
            id: '5648378e-1e83-4f7c-9bfb-5166c5165d19',
            text: '',
        },
        {
            id: '251d4101-0b50-4ef2-b7d8-da25d2fd285a',
            text: 'Pawan Gehlaut',
        },
        {
            id: '0223fb91-c54a-4411-921a-785711019f43',
            text: 'Jaipur',
        },
        {
            id: '163c57c9-493a-47b4-bfb4-10a49d7f2230',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '75849c3b-2b3e-4916-ad82-f47108277b89',
            text: '2',
        },
        {
            id: '182b5512-948c-4846-bfcf-5ec7f66b04d2',
            text: '',
        },
        {
            id: '5f1d20c2-f891-495c-ab04-0f0be7c23a34',
            text: 'Sameer Gehlaut',
        },
        {
            id: '96a84de9-01e4-415d-8948-dea9a6c7ae9a',
            text: 'Kota',
        },
        {
            id: '590fbc71-836a-441d-9118-5f325096cec5',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: 'edf15749-75fa-428f-8b24-2e458331f964',
            text: '4',
        },
        {
            id: '0e784204-7c57-4d63-a0ba-7375edf51a3e',
            text: '',
        },
        {
            id: 'b3a6229a-345a-4d88-8379-b795a93083e7',
            text: 'Rahul Gehlaut',
        },
        {
            id: '320f0096-b6cf-42bb-9bdc-2adf59f402e5',
            text: 'Raipur',
        },
        {
            id: '305f3a5f-879e-45b5-8247-10aa35d12b80',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '1343eb17-5af1-4510-ac37-72f431cfb094',
            text: '3',
        },
        {
            id: '19df817f-2c34-4a03-a127-612ae10843ea',
            text: '',
        },
        {
            id: 'f7024a10-47b4-4f56-8ccb-2ed221ddc6e1',
            text: 'Roshan Gehlaut',
        },
        {
            id: '3a9db3c7-4dff-47da-a61d-b2dd4a57377c',
            text: 'Mumbai',
        },
        {
            id: '06f60be6-9cf3-41a2-ad8f-7957185e20c8',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '5dd8199a-4564-430c-ba45-8f973ce2e1da',
            text: '3',
        },
        {
            id: '50498a70-b6c5-4426-83b7-580e01bb07e4',
            text: 'Rajiv Gehlaut',
        },
        {
            id: 'f29988db-accd-4c32-baf7-18c78e516dbd',
            text: 'Kolkata',
        },
        {
            id: '7a6d057b-f39d-4288-9c04-7c4af7f27154',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: 'a5c133fb-9cc8-472f-b911-e22a38bd2276',
            text: '4',
        },
        {
            id: '6f992fe9-701a-4987-bafc-d3908f462bec',
            text: 'EMI',
        },
        {
            id: 'c790f7d1-96b0-41a1-abe9-7de8070c5848',
            text: 'Eligibility',
        },
        {
            id: 'd7554d8f-8570-45ef-babc-db2bfb07a6b5',
            text: 'PMAY Subsidy',
        },
        {
            id: '4d9e3dd7-949d-4850-b8f9-7431a7d0315a',
            text: 'Calculate Your Home Loan',
        },
        {
            id: 'e703b024-2cdf-43d6-8ed0-9ac930ac1c75',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '8817b542-af7a-4ca8-be67-7d50d9632f28',
            text: 'Mobile Application',
        },
        {
            id: 'c5bc92aa-66d9-4102-80ef-e4980ba6fcd1',
            text: 'Feature 1',
        },
        {
            id: 'acead166-4c2c-484e-a463-dff4f1f46e9e',
            text: 'Mobile Application',
        },
        {
            id: '9e1abca9-ca47-4ed4-8a10-4a3801d45016',
            text: 'Feature 2',
        },
        {
            id: '3b06322c-1d05-44e1-bbba-620e84e8dc41',
            text: 'Mobile Application',
        },
        {
            id: 'f5f5a508-c205-43c6-8971-d4c5e3771c6e',
            text: 'Feature 3',
        },
        {
            id: '6fde484e-cb6c-44f8-ba06-0d38fc0dadde',
            text: 'Mobile Application',
        },
        {
            id: 'd09b1745-78aa-4fba-b030-e8afd45d7812',
            text: 'Feature 4',
        },
        {
            id: '750d9db7-8c90-40da-b561-fcf2d932cedb',
            text: `Download Our <br /> Sammaan Capital App`,
        },
        {
            id: '38f93439-2755-431e-979c-41ab7b18654e',
            text: 'We’d love to help you.',
        },
        {
            id: '03424087-acb4-4382-bf51-68b3a7b21015',
            text: ' Samman Capital App',
        },
        {
            id: 'f8dc0ca8-5af5-427c-bb8a-1a1b3b8c52f4',
            text: 'Download App',
        },
        {
            id: '427c88de-ca8e-4ad1-bca9-2cf5a778b634',
            text: 'Attractive Interest Rates',
        },
        {
            id: 'e32ee75f-1a7c-4eb4-ad0f-aa7e73ad6bf8',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'b5bce45a-11f0-4aea-b01b-36f1f38b26bb',
            text: 'Attractive Interest Rates',
        },
        {
            id: 'be812222-1bc6-402d-b1e1-2e4fdeb369b9',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'ea2a05ba-e071-47bd-b581-1e2b4ecafeba',
            text: 'Attractive Interest Rates',
        },
        {
            id: '8e7054c2-3fc3-4ca1-806b-f250f711c185',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '990d813d-f4a8-4c89-b1b4-9146775c1ad9',
            text: 'Attractive Interest Rates',
        },
        {
            id: '3c7218d9-a4d2-4b6c-8e7c-0e335f6826d9',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '301b56b4-c9c7-4d8a-af91-45005de0e109',
            text: 'Become Partner With Us',
        },
        {
            id: 'ee12cd16-3cab-4285-8219-549f624b13d2',
            text: "Join us in Building Dreams: Over 10,000 Partners Have Succeeded; You're Next!",
        },
        {
            id: '49eff5f6-2704-402b-a12b-8b365c0dda82',
            text: 'Know More',
        },
        {
            id: 'bda19d68-1bda-40b7-9e89-f2de0fe77843',
            text: '22 june',
        },
        {
            id: 'cd187da7-2d7c-4630-a92b-1dc755521921',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '3e0a0685-52bf-47d4-9353-c295c0501928',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '727af0ba-b18c-43d7-95e5-aa1af4bf6e58',
            text: 'Know more',
        },
        {
            id: 'd849da1e-e3c1-4af0-bd11-62dd37de4182',
            text: '#',
        },
        {
            id: 'd07c3169-ae8d-40b2-8148-bbbc2f0c2bd7',
            text: '22 june',
        },
        {
            id: '554023f2-ecdc-4167-9b7d-56607ec61581',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '5185797f-766e-4073-b80f-569cac73db87',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '7d2ba0aa-7bef-4969-abb5-e8f83b4209ae',
            text: 'Know more',
        },
        {
            id: '285fb989-dafb-418a-87ec-e9b4a2ec718a',
            text: '#',
        },
        {
            id: '116ead9c-0938-413c-bc1a-98c019836d69',
            text: '22 june',
        },
        {
            id: '3463d0f4-03ff-445a-acb0-2bdb38659f32',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '78661781-4e04-4a09-b674-e2af08e3af94',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '87fa4111-4c72-438c-98fd-758f21d0389a',
            text: 'Know more',
        },
        {
            id: '11383653-4646-4554-9bae-c00cd8e929ae',
            text: '#',
        },
        {
            id: '59ee8980-2dc2-496c-b017-1216d848e3af',
            text: '22 june',
        },
        {
            id: '23cba9b3-69d7-45af-997a-f7846f997d6b',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '0f4a8f9b-472c-41a5-9cad-d25c0527f42f',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '157f9178-bb62-4d68-945e-8f8f936393ce',
            text: 'Know more',
        },
        {
            id: '7f3f7c1f-0329-46ec-b38c-885c750b7949',
            text: '#',
        },
        {
            id: 'ea36b9d2-79a8-46fd-bf69-e3661d5dce56',
            text: '22 june',
        },
        {
            id: '64edd5c3-8a0d-4244-93e6-1d9361980bb1',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '68a8a6c6-34a3-4f5a-b577-2f3831c284dd',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'ba4688e2-8d08-43e6-af63-a1fb713d20c3',
            text: 'Know more',
        },
        {
            id: 'e3d0ac60-9763-40f2-8653-f6a17b13e1ab',
            text: '#',
        },
        {
            id: '10046aeb-6d6d-4692-9f08-a13d43372513',
            text: '22 june',
        },
        {
            id: '692a821f-6bdb-4ed6-988f-7a34ad183f03',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '15f77782-237d-44f6-a362-1f89c7964b62',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '515d9d58-1d20-4309-8b68-9c607173abe9',
            text: 'Know more',
        },
        {
            id: '1585d9fc-76c0-4cf6-9ccf-a26ed527c663',
            text: '#',
        },
        {
            id: '6b5fff56-8ba6-45a6-abbc-125273295f31',
            text: '22 june',
        },
        {
            id: 'be8888e1-0f5e-4114-993a-b10759943745',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: 'a9d54c65-59f0-4daa-8f0d-1d5639b86ddf',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '58c563f9-e5e3-4cc7-83fd-f3ab87c6a0dd',
            text: 'Know more',
        },
        {
            id: '2715be0a-eef0-409e-91be-626ca0acd75e',
            text: '#',
        },
        {
            id: '85889be8-bae1-443a-b647-42e717e785e0',
            text: '22 june',
        },
        {
            id: '94110b96-11f4-4bad-b91b-c33aabc707cb',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '9f7adadb-37fe-4b7c-9030-9c73ecf8dcfa',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '568d102a-235f-4d7c-bc7f-37e84c9ee1bd',
            text: 'Know more',
        },
        {
            id: '4ef45b28-8c19-42fd-94d8-bdbbc1a29250',
            text: '#',
        },
        {
            id: 'ff8924bb-85ae-4129-94de-32b924afff20',
            text: '22 june',
        },
        {
            id: '6e3bebda-d00a-4709-96e3-ce9db9523155',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '27768f47-0088-4cac-8c48-3237b112b305',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'f1f1bc87-8fbd-463e-886c-db25a9a24e6d',
            text: 'Know more',
        },
        {
            id: '58ad9881-0289-43ba-93b9-97c47a57f9ee',
            text: '#',
        },
        {
            id: 'ea25255b-2dba-45c8-a764-48ade253e42e',
            text: '22 june',
        },
        {
            id: '3c4fb927-90de-4808-9c6b-bad98cd9cc48',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: 'd03ea34d-b8b6-4974-a92a-2484fcef6b46',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '8f3066e3-6f95-4b58-aeb5-862dd9d86cce',
            text: 'Know more',
        },
        {
            id: 'a066a3ca-c528-4f4f-8221-48e0bcd6a16e',
            text: '#',
        },
        {
            id: '5ed87fc9-b7f6-42c3-be5a-1bc43e708f74',
            text: 'Need help?',
        },
        {
            id: 'e8104804-fce1-4b93-8749-f1da33644c73',
            text: 'Need Help',
        },
        {
            id: '02a75344-1621-41de-8377-0992fef87d22',
            text: 'Investors',
        },
        {
            id: '2813973c-1b2f-496d-97b9-9bd3c16a78c1',
            text: 'Partners',
        },
        {
            id: 'be669251-ec93-403e-92be-0dd4751fef48',
            text: 'Job Seekers',
        },
        {
            id: '16f0bbd0-9d2f-4f25-980c-76257711f4e3',
            text: 'Loan Applicants',
        },
        {
            id: '90ca6617-6317-4f40-87ca-05797017706d',
            text: 'Discover our Blogs',
        },
        {
            id: '625e3124-08c2-4a92-b8bd-270d502061a0',
            text: 'Insights for Astute Investors',
        },
        {
            id: '8f475be4-8429-4013-9c22-ecdbff2f15d9',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius....',
        },
        {
            id: '35061221-a7b2-42a2-84a2-d21a63d9f941',
            text: 'Insights for Astute Investors',
        },
        {
            id: 'a64e98e4-cc1d-4266-bb3a-4eb02f86ce2b',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
        },
        {
            id: '870138b5-3898-47e7-9039-f9810d60b512',
            text: 'Insights for Astute Investors',
        },
        {
            id: '18b080d2-bdde-4ad3-b8b5-4f1d0238be24',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
        },
        {
            id: 'a7f2b19d-e861-4495-9c9d-5520e21b786c',
            text: 'Read More Blogs',
        },
        {
            id: '83defcb9-f30a-4130-884b-d07921c14673',
            text: 'Download the App',
        },
        {
            id: '1086512a-398b-4ffc-ad2e-9e81ef0379ca',
            text: 'Download app from',
        },
        {
            id: '832476e4-2837-4a46-8d95-8dd379b6b425',
            text: 'News Corner',
        },
        {
            id: '6258ec54-b231-4992-a305-6336ee2b24f4',
            text: 'View All',
        },
        {
            id: 'c1d8205d-98f6-4fdd-afee-cbb8df7714c2',
            text: '#',
        },
        {
            id: 'c55d73d4-96d0-4991-9d0b-7e711b2777b3',
            text: 'Become a Sammaan Capital Partner',
        },
        {
            id: '36e7c74c-63e5-46d3-800a-6b373d8c0038',
            text: "Join us in Building Dreams: Over 10,000 Partners Have Succeeded; You're Next!",
        },
        {
            id: 'db0cb343-c338-4f21-b87c-7f3bc9dcfd06',
            text: 'Know More',
        },
        {
            id: 'b1f08429-b3e6-458a-8c4e-d59a98c997b9',
            text: '#',
        },
        {
            id: 'af9cf17a-116f-4c34-a930-922c7d7076a4',
            text: 'Build your career with us',
        },
        {
            id: '51f64b33-64df-4bff-b9bc-9b99901aea04',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros',
        },
        {
            id: '4caa3331-1313-41f0-a352-23cfd08260dd',
            text: 'Explore jobs',
        },
        {
            id: 'a2555d9f-7ef2-40cf-96a4-a1cfc4bbc0fb',
            text: '#',
        },
    ],
    loanAgainstProperty: [
        ...footerStrings,
        ...headerStrings,
        ...helpSectionString,
        ...calculatorsStrings,
        ...needHelpString,
        {
            id: '9f507889-082b-4ae0-9580-b14be7cc8f20',
            text: 'Need help?',
        },
        {
            id: '750d9db7-8c90-40da-b561-fcf2d932cedb',
            text: 'Download Our Sammaan Capital App',
        },
        {
            id: '0a3e0e6a-2984-46f1-8e82-b6599631b0fc',
            text: '',
        },
        {
            id: '8817b542-af7a-4ca8-be67-7d50d9632f28',
            text: 'Mobile Application',
        },
        {
            id: 'c5bc92aa-66d9-4102-80ef-e4980ba6fcd1',
            text: 'Feature 1',
        },
        {
            id: 'acead166-4c2c-484e-a463-dff4f1f46e9e',
            text: 'Mobile Application',
        },
        {
            id: '9e1abca9-ca47-4ed4-8a10-4a3801d45016',
            text: 'Feature 2',
        },
        {
            id: '3b06322c-1d05-44e1-bbba-620e84e8dc41',
            text: 'Mobile Application',
        },
        {
            id: 'f5f5a508-c205-43c6-8971-d4c5e3771c6e',
            text: 'Feature 3',
        },
        {
            id: '6fde484e-cb6c-44f8-ba06-0d38fc0dadde',
            text: 'Mobile Application',
        },
        {
            id: 'd09b1745-78aa-4fba-b030-e8afd45d7812',
            text: 'Feature 4',
        },
        {
            id: '1086512a-398b-4ffc-ad2e-9e81ef0379ca',
            text: 'Download app from',
        },
        {
            id: '7f0f81ce-a277-4206-bac7-b789b987bc61',
            text: 'Download the App',
        },
        {
            id: '4947dc71-bb90-469d-b989-671346c4a84c',
            text: "We'd love to help you",
        },
        {
            id: '0875ac0b-ee9f-4cbf-85dc-05ffbb90404a',
            text: 'Resource Center',
        },
        {
            id: '1df42065-7fe1-4a9d-b028-f9b17bf11000',
            text: 'Steps to take Home Loan',
        },
        {
            id: 'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
            text: 'News Corner',
        },
        {
            id: '58f3cae9-f314-4099-9474-ffd22ac28516',
            text: 'Faqs',
        },
        {
            id: '07295a3b-db93-4532-809e-a02812a3ec02',
            text: '  Hamara Bank',
        },
        {
            id: '616ec46c-593c-4803-b35c-088cd0ced772',
            text: 'Calculate Your EMI',
        },
        {
            id: 'd776df41-c4ee-4778-a625-72ca3a80d89b',
            text: 'Apply For Loan Against Property',
        },
        {
            id: '080f3c12-8ce9-453e-aa18-6667a4b7b671',
            text: 'Unlock <span class="tw-text-primary-500">the value</span> of your property <br/> with a hassle-free loan',
        },
        {
            id: 'd0427ba4-1161-4827-80d3-6bb5c3bd44d5',
            text: 'MSME Loans & LAP',
        },
        {
            id: '4e5b76ad-4940-43d7-887a-b545572d0a92',
            text: `Sammaan Capital Loan Against Property provides a secured option for individuals seeking funds for business expansion or other purposes. By leveraging the value of residential or commercial property, the loan offers maximum finance at competitive interest rates, allowing self-employed individuals to focus on business growth while using their property as collateral. The process is convenient, with doorstep services available for added comfort.`,
        },
        {
            id: '0a565c15-208c-4e61-b130-04875a8db7f0',
            text: 'Loan Against Property ranging from',
        },
        {
            id: '1f38a73e-ba7d-4fe3-ad97-7f175c0c88ff',
            text: '9.75%* onwards',
        },
        {
            id: '80b79cff-bd0a-474f-9c8b-b7f28c465f8d',
            text: 'Apply For Loan Against Property',
        },
        {
            id: '0c9fa9f7-eabe-4463-a5a5-9b216150707c',
            text: '*MSME’s being eligible under Priority Sector Lending',
        },
        {
            id: '7ebf85ed-5a11-42dd-840c-33f4dd0cdc66',
            text: `# The final rate of Interest will depend upon Profile, Loan amount, tenor , underlying security and other risk parameters.`,
        },
        {
            id: '8aedc93d-47b8-4399-b98d-29c32bc2e23c',
            text: 'Why Choose Sammaan Capital?',
        },
        {
            id: '7544d9b8-c717-4427-815c-0fa95066923a',
            text: 'Instant Sanction',
        },
        {
            id: '6af932d4-29de-4dd3-84ae-d59f2d9d230f',
            text: 'Customer Portal',
        },
        {
            id: 'e06dbc5d-736c-4ad8-b6b1-3051fdd484d9',
            text: 'Download Our <br/>Sammaan Capital App',
        },
        {
            id: '3b95edd7-6185-44ce-a2a7-53e18d0ecc5b',
            text: 'Download app from',
        },
        {
            id: 'f9120cd9-ecff-478f-9db8-4bac4cecc8ba',
            text: 'Calculate Your EMI',
        },
        {
            id: '0f2a0f90-fb1c-4874-8fbc-eb80ac9d45ee',
            text: 'Resource Center',
        },
        {
            id: '4b4a8860-61b8-446a-ac84-c5329901a5dd',
            text: 'Our Blogs',
        },
        {
            id: '3b7101ab-d656-442b-a1ab-c32dc5ad82a9',
            text: 'Manage your Home Loan online and with ease after disbursal',
        },
        {
            id: '3c52ad15-93f4-47a6-84c6-96aba4c1d4c2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '3457c52f-4e0c-492c-a686-eb0a4e17c757',
            text: 'Our customer’s reviews',
        },
        {
            id: '1ad87f55-7e2d-429a-b098-39aa10502b2e',
            text: 'Rajiv Gehlaut',
        },
        {
            id: 'f024c0be-f6f3-4534-bd8e-6d96173b69f5',
            text: 'Delhi',
        },
        {
            id: 'd0b3b6cd-d788-42bc-9e67-fe3dd5e3d39b',
            text: '4',
        },
        {
            id: 'b40d3c01-3c3d-48c3-b647-a9be513c1ae4',
            text: 'Download the App',
        },
        {
            id: '39a3c09f-3abf-4487-87a5-cb91ee6dba8f',
            text: `“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”`,
        },
        {
            id: '9926b4a8-9e51-42dc-bcc1-1f13d1d8f8b2',
            text: '01/04',
        },
        {
            id: 'e75d934d-6293-47c6-a250-a64dda815f29',
            text: 'Fill the Loan Application Form',
        },
        {
            id: '415e9b89-9e74-4904-b466-5ef3682a8d51',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'f23916e5-d4ec-471d-9522-1e58199193c3',
            text: '02/04',
        },
        {
            id: '89bc5f2e-5506-4ebc-adcc-98b33f746ba9',
            text: 'Confirm the details with our agent',
        },
        {
            id: '24402210-3d69-475e-9728-67de633d91a2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '73308f6a-98fa-4970-a59a-a1d0fe28d807',
            text: '03/04',
        },
        {
            id: 'fd6bde66-7097-4275-9191-95e6749eeef1',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '50696d5b-6c1e-4070-897f-673f0f46ce3d',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '7807ea72-7a59-4687-aa91-bdd3ee68c65e',
            text: '04/04',
        },
        {
            id: '885c0e0d-1463-429f-8ab7-959590ed3336',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '3535d05c-deac-42e6-b5db-7736bf35e009',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '4fd13c11-2ddf-45a2-82ce-329a89eab96b',
            text: 'Calculate Your Home Loan',
        },
        {
            id: '7da0084b-3819-4637-9e4f-fc5d210f102c',
            text: 'EMI',
        },
        {
            id: 'a251f49a-663c-4bea-8c5b-3b88894c549f',
            text: 'Eligibility',
        },
        {
            id: '78edce48-6fa6-4696-a849-c4ecff020a1a',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: 'e028bdf3-1607-4d02-8fb3-66f08cba3543',
            text: 'Resource Center',
        },
        {
            id: '624f5345-6e65-41b8-9d1c-98a275eb93b6',
            text: 'Key Features',
        },
        {
            id: 'fa3c288c-b681-481a-a7bf-5982171e0768',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '2cd9f0f1-f65f-4041-832a-4e41188a3038',
            text: 'Benefits',
        },
        {
            id: '2cd9f0f1-f65f-4041-832a-4e41188a3038',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '9e689efb-ee52-4501-8ce2-07812723fab5',
            text: 'Eligibility',
        },
        {
            id: '44e44ab5-8cd4-4b77-ab5a-5f14d39f0784',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 'fd484260-b761-425b-95fb-cb93dddd064a',
            text: 'Required Documents',
        },
        {
            id: 'afbc6910-cfab-4581-9ba3-4360927fdba2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '05e98900-cc58-495b-9a69-473d42858547',
            text: 'How It Works',
        },
        {
            id: '5821edcd-f1d3-476a-871b-535cdb441f43',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '72c167f7-05a9-4570-97d5-737815c2d471',
            text: '22 June',
        },
        {
            id: '098ad645-f6fd-4d1d-b00f-77a7a77e6f1f',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '24840675-50e1-441d-b7c3-1b7b793ef844',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '89f93b8c-d403-448c-8c53-4825acd89ec9',
            text: '22 June',
        },
        {
            id: '85224850-b054-4798-8309-52a1a6403d46',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '642c2409-d245-4fc2-9345-d66e1fd41919',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '4a5b3278-2508-415d-aed6-6d068e0988f4',
            text: '22 June',
        },
        {
            id: '352a5ac4-8577-4b87-9b47-ac6560beed24',
            text: 'Refinancing Options',
        },
        {
            id: '92d71179-2398-4795-b9d2-5843d4aeb621',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '4bbd4296-902b-47be-b12e-e43011020448',
            text: '22 June',
        },
        {
            id: 'a9de6acb-1316-405d-9b58-8c47f576c099',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'c43d1864-dbf2-4a36-ba6d-5d67f7ead7fe',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '0223ce2d-eb6c-4389-bc50-7472362b0bb2',
            text: '22 June',
        },
        {
            id: 'abc4d645-9759-4662-a7c8-a993a5934bc0',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'e572dd0e-b115-4744-83ad-be27567610b9',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '9d05e789-6675-4ca2-a4c1-7068852af183',
            text: '22 June',
        },
        {
            id: '9ff9f0f4-8de9-4313-a5a8-e20204623471',
            text: 'Discover Our Blogs',
        },
        {
            id: '5b5153d2-08f1-469d-a6f5-92868c35a701',
            text: '22 June',
        },
        {
            id: '99959057-4337-4be2-a5e7-1bd16d820fdd',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '70e759f5-22cd-45d6-9874-acc4e7fe98a4',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '547f1901-039a-4a8b-a2fb-220cf096c2a8',
            text: 'Know more',
        },
        {
            id: 'ef04276b-8d97-4d21-888f-ab602e6573de',
            text: 'News Corner',
        },
        {
            id: '54c85577-3ec1-439e-8a11-8d70f2d6de6b',
            text: 'What are the stages involved in taking loan?',
        },
        {
            id: '7ea0813f-42ee-4cc4-9844-3bced56a4508',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '7609ada0-1a1a-4cac-8501-e22fd0f3e33a',
            text: 'Who can apply for a home loan?',
        },
        {
            id: 'ed2a81da-bbdd-41a1-a109-20f016e0da59',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 'b58bc06e-61cf-4826-93c5-6a20e10bf447',
            text: 'When can you apply for a loan?',
        },
        {
            id: 'b5bbc800-484d-436a-a4b7-d21dd97928a4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '6c02bb89-52af-45b8-b204-1f82b5751d04',
            text: 'What are the loan tenure options?',
        },
        {
            id: '927f4a5d-0622-4a17-a1b3-9ad08499173e',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '7fd8b580-6898-4f32-8121-9a462e9ae91f',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: 'ffeba428-ce62-4aeb-8137-0719554b5824',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 'a2e9b0f4-6152-4457-afeb-0fb401364264',
            text: 'Email us',
        },
        {
            id: 'd217b25d-1b33-4284-93f3-f621c0f8226b',
            text: 'homeloans@indiabulls.com',
        },
        {
            id: '525927bb-197d-47b0-9e37-1950f8a5fd03',
            text: 'Customer care',
        },
        {
            id: 'c4cba46e-9e65-4abd-9620-2a23addd1b4b',
            text: '1800000000000000',
        },
        {
            id: '09159872-e902-47ef-ba90-2bf52dc07002',
            text: 'WhatsApp',
        },
        {
            id: '3f755121-cd36-4a58-94b5-3e5e70e00806',
            text: 'WhatsApp on 82390199000 or scan the QR code',
        },
        {
            id: '1a000b56-5307-44cf-88b5-b3a58a2637a3',
            text: 'Branch Locator',
        },
        {
            id: 'b64b6bcb-389e-40b0-9337-4be7e4767364',
            text: 'Locate your nearest branch',
        },
        {
            id: 'cc708107-3cdd-4179-953d-0ee53de0a208',
            text: 'Need help?',
        },
        {
            id: 'f8e176ea-fe72-4d7b-896d-586b2c4aadc2',
            text: ' Get in touch with us',
        },
        {
            id: '68f79015-2519-47b2-bad5-3d6a8d251f7d',
            text: 'Connect with Us: Fill the Form Below',
        },
        {
            id: 'b45e9bba-b347-4c98-a62f-654ddc836474',
            text: 'Mobile Number',
        },
        {
            id: 'dabbb959-716b-4c78-b865-ee4b635e7201',
            text: 'Full Name',
        },
        {
            id: 'aa38c696-caf2-4f19-a438-23776dd91c6c',
            text: 'Tell us your query',
        },
        {
            id: 'e84fc26f-026f-48a3-9f1a-86279433f657',
            text: ' I agree to Terms & Conditions',
        },
        {
            id: '1f4d8224-9994-4227-8636-39a56d0aabed',
            text: 'Submit',
        },
    ],
    managementTeam: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'fc7996cd-ff1e-41dc-af3d-90628607e4af',
            text: 'Hamara Bank',
        },
        {
            id: 'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
            text: 'News Corner',
        },
        {
            id: '89c8033c-41dc-40c3-a2df-a7173ce044fb',
            text: ' Hamara Bank',
        },
        {
            id: '9fa8f6e4-b625-4d93-90d7-c821a4aa16d3',
            text: 'Management Team',
        },
        {
            id: '609b262b-b287-4c79-a312-bdbcd419e038',
            text: 'Indiabulls Housing Finance has benefitted from a superior leadership team - from our strong, active and independent board members to our experienced and globally-distributed senior management team. Meet the members of the team and find out more:',
        },
        {
            id: '20b9c554-047f-403f-a1db-84d8ee9e27e8',
            text: 'Gagan Banga',
        },
        {
            id: 'a1202ea5-5810-43a8-a2aa-7bb956af87c0',
            text: 'Vice-Chairman, Managing Director',
        },
        {
            id: 'f7dbe9c7-287c-43fd-8b29-8cb523a55979',
            text: 'Know more',
        },
        {
            id: '2041c086-0a0d-4d6d-84c3-e3394a121517',
            text: 'Sachin Chaudhary',
        },
        {
            id: 'ec1f3bf7-6522-45e9-93cb-c5db1fe6a1bf',
            text: 'Executive Director & Chief Operating Officer',
        },
        {
            id: 'ada65c6b-5ec2-467b-8bcd-d5d6e448db02',
            text: 'Know more',
        },
        {
            id: '34811225-7b8b-4b0e-ad42-35cc713398b4',
            text: 'Mukesh Garg',
        },
        {
            id: '8630ebfa-827c-4111-9d56-e7902be4a189',
            text: 'Head, Analytics and Investor Relations',
        },
        {
            id: '796858b2-6d32-4d1c-9088-e082d00fbdff',
            text: 'Know more',
        },
        {
            id: '3070e4ec-2e0f-4d3d-88f3-f741664c4479',
            text: 'Ashwin Mallick',
        },
        {
            id: '434300e4-f18c-45bc-bae9-1f8a947b6d69',
            text: 'Head, Liabilities and Treasury',
        },
        {
            id: '2501e226-e178-457b-873c-7c328ff9b86c',
            text: 'Know more',
        },
        {
            id: '8c0a61b7-8903-4b45-8e33-60fdeb160857',
            text: 'How It Works',
        },
        {
            id: '8ec93e86-8e43-4778-8344-472de69a5895',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'd5055eb4-07cd-4d19-8e31-90122deddb77',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '78d44525-3ddd-4f6f-9540-e0c4bced43ae',
            text: 'First Home Buying: Key Helpful Advice',
        },
        {
            id: 'dc631236-aa2a-4bf9-8db9-185ada39681f',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '942f7db0-6c7e-4e38-afec-fa69108968b4',
            text: 'Ensure you have all the necessary documents.',
        },
        {
            id: '1964f43b-7569-4272-a5e0-1088a0d49a26',
            text: 'Refinancing Options',
        },
        {
            id: 'c9cd036e-5ef5-4c9a-93ea-1082339a96a3',
            text: 'Explore refinancing solutions for your mortgage',
        },
        {
            id: '1ac09f90-d192-44c5-bf17-2ca24ea82419',
            text: 'Discover Our Blogs',
        },
        {
            id: '45d3132b-ca16-4237-bc61-d0cfd8011681',
            text: 'Celebrating Our Achievements',
        },
        {
            id: 'e5c6705b-aff6-42b6-b95c-e68cda6a8a78',
            text: '',
        },
        {
            id: '9dbbcda1-10a8-43ca-add1-ffffb3b70e26',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '662ff2b6-45d0-4124-84ad-a3c399097b4e',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '990546d0-7849-4690-91a1-78935843bcf3',
            text: '28 June',
        },
        {
            id: 'be386cb2-ef3a-456a-a3b7-578b46f01c15',
            text: '',
        },
        {
            id: 'da34e3ca-60de-40a5-bafd-2c67930d1214',
            text: 'India’s Best Workplaces in BFSI-2019',
        },
        {
            id: 'c2523d05-7b91-42df-a96f-62df8527a304',
            text: 'By Great Place to Work ® Institute',
        },
        {
            id: '1fc3a69c-aa4f-4b78-a9c4-3c09c5695592',
            text: '28 June',
        },
        {
            id: 'ef9f7188-771c-491f-bbed-b03cd5da214c',
            text: '',
        },
        {
            id: 'b6f54719-1f71-42c1-a634-b742c7a374e5',
            text: 'India’s Best Workplaces in NBFC- 2019',
        },
        {
            id: '1306d3d8-7ea7-44d0-a406-dc819123dae3',
            text: 'By Great Place to Work ® Institute',
        },
        {
            id: 'e4bc0003-5d69-41aa-a1a9-dd0ad6b40d1d',
            text: '28 June',
        },
        {
            id: '7824bf2e-8906-4a5d-ae12-c0a8b68ae6c6',
            text: '',
        },
        {
            id: '8f013786-8810-4168-9ec1-ec7f4de2c7d2',
            text: 'Best Social Media Brand in the BFSI sector (Financial Services)',
        },
        {
            id: '426fc25c-9633-4d4e-aae3-bb4895859da7',
            text: 'At the SAMMIE 2018',
        },
        {
            id: 'fbe6b74b-9234-4e25-b973-06b9b23f9132',
            text: '28 June',
        },
        {
            id: '206112ca-c43f-4329-8e8b-00a0039a3d55',
            text: 'View All',
        },
        {
            id: 'eadd29fb-d053-4612-8e2c-4507d9fcdeb9',
            text: '',
        },
        {
            id: '3daffe7e-cec0-483b-91a6-9d893be94d12',
            text: '22 June',
        },
        {
            id: '2cf711fe-bc38-42e5-afcb-934a69f58ec5',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: '67294b4b-7bce-47e0-b4bc-04bc89e33bc3',
            text: "Indiabulls Housing Finance's net consolidated total...",
        },
        {
            id: 'dbe31c50-0a32-4f36-a340-077a565eeb8b',
            text: 'Know more',
        },
        {
            id: 'cf11f6a1-146e-46d4-a741-9bacef0be83a',
            text: '',
        },
        {
            id: 'c7c42795-7b3b-48fe-b030-b35d17a85dac',
            text: '',
        },
        {
            id: 'e7a319cb-b781-4fa7-9d1a-63d9b93a00ca',
            text: '22 June',
        },
        {
            id: 'a60b8aed-3022-4b6d-907d-bb3c9acda72d',
            text: 'Indiabulls Housing Finance: Q2 Net Profit Rises 3% to ₹298Cr',
        },
        {
            id: 'e253e097-c807-4454-aa2c-221a1621bfe4',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'b9ab939c-31bf-4cff-8212-0ca5ae1bea10',
            text: 'Know more',
        },
        {
            id: 'b159d3e0-b938-47a3-b334-3bbcd13f88f3',
            text: '',
        },
        {
            id: 'ce0edfc9-5f0a-4f5a-a046-1488de075f0c',
            text: '',
        },
        {
            id: '929b3055-4830-4bd6-96e5-a1933003b266',
            text: '22 June',
        },
        {
            id: 'b2d251f4-e767-4c49-ae8c-d972305f9558',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: 'fc62ef07-911e-4b86-9c4d-87115d556af4',
            text: "Indiabulls Housing Finance's net consolidated total...",
        },
        {
            id: 'a1eb8fc4-b93c-4f2b-982e-fa89a27059b9',
            text: 'Know more',
        },
        {
            id: '5c3d3912-3284-4503-bd05-229c0ea7854a',
            text: '',
        },
        {
            id: 'ef33a785-b6bd-4a67-b609-a25a089935ce',
            text: 'News Corner',
        },
        {
            id: '71154b9d-db73-458a-987a-799ced7a3f18',
            text: 'View All',
        },
        {
            id: '37c1c4e6-da1e-44c5-a651-60ed1cfa3915',
            text: '22 June',
        },
        {
            id: 'ff678b17-9d73-48d5-b864-90778cb5961a',
            text: 'View All Blogs',
        },
    ],
    boardOfDirectors: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '1dd7ffa4-e7c1-4d2f-ad2e-662cf0019477',
            text: '22 june',
        },
        {
            id: '45b75721-aac8-4aee-ac1a-c4ecd769ad38',
            text: 'View All',
        },
        {
            id: 'a36b8f23-b880-4ca2-9aae-303051a07fba',
            text: 'View More Blogs',
        },
        {
            id: '3c4f7eed-c5f6-4df5-8e44-eb3c99fac0a7',
            text: 'About',
        },
        {
            id: 'de87c9ba-eceb-4cda-8daf-afd1e578b3eb',
            text: 'Sammaan Capital',
        },
        {
            id: '8f44116f-6489-414c-92bb-693b097fb7e7',
            text: 'Board of Directors',
        },
        {
            id: '42ceb936-e532-44d2-8058-9170ab5595bd',
            text: 'Check out Indiabulls Housing Finance - Board of Directors & Committee details who primarily focuses on strategy, policy & value of the organization.',
        },
        {
            id: '0907c495-2eac-4ad2-badf-223bff04f62d',
            text: 'Subhash Sheoratan Mundra',
        },
        {
            id: 'ea09a3f9-16f1-49c9-a921-10e6cade6b23',
            text: 'Vice-Chairman, Managing Director Know more about leader',
        },
        {
            id: '0791f5f3-ec97-4804-a9df-b521cecdb22c',
            text: 'Know more',
        },
        {
            id: 'bc85f7c4-4778-4d00-b02a-b75700f0949a',
            text: 'Achuthan Siddharth',
        },
        {
            id: '24c54426-45a5-4d8c-9fab-f11fd302855f',
            text: '[ex-Partner, Deloitte, Haskins & Sells]Independent Director. Chairman of Audit Committee',
        },
        {
            id: '7cf16ccd-eaa4-470b-9498-035bffcc815d',
            text: 'Know more',
        },
        {
            id: 'c4fd5bbc-8de0-40e0-99bc-3dde1bd2d541',
            text: 'Satish Chand Mathur, IPS',
        },
        {
            id: '7b24db8f-9149-4ddd-b4e3-ea4dc6936a7c',
            text: '[ex-Director General of Police, Maharashtra]Independent Director',
        },
        {
            id: 'b08a3981-a719-42a1-b14c-bb8211812875',
            text: 'Know more',
        },
        {
            id: 'b68811d9-60f9-4976-a6f4-33fb8dd12684',
            text: 'Dinabandhu Mohapatra',
        },
        {
            id: '12080a61-aef8-4145-916e-6d0df23c22a9',
            text: '[ex-MD & CEO, Bank of India]Independent Director',
        },
        {
            id: '752d58eb-98e4-47f2-9258-f0809d8574b4',
            text: 'Know more',
        },
        {
            id: 'f95da581-5df4-4fe1-99ae-a7faa0a833ea',
            text: 'Gagan Banga',
        },
        {
            id: '75dfa4ed-592c-4677-915c-5e7bcba91099',
            text: 'Vice-Chairman, Managing Director',
        },
        {
            id: '2d7f74df-abf9-42fd-8316-1fd3775963d3',
            text: 'Know more',
        },
        {
            id: 'ead9577b-e210-43b5-951c-c79342f220b1',
            text: 'Sachin Chaudhary',
        },
        {
            id: 'ac6432ef-ef62-4776-9492-c1e9b7160e87',
            text: 'Executive Director and Chief Operating Officer',
        },
        {
            id: '35b6317c-0d70-41ce-8487-427d51129770',
            text: 'Know more',
        },
        {
            id: '64a3f65c-439a-40b7-a450-778ea9619fbc',
            text: 'Rajiv Gupta',
        },
        {
            id: '05c5e899-0c01-440a-9ec4-362d29dbe83e',
            text: 'LIC Nominee Director',
        },
        {
            id: 'cb3c62fc-2058-420f-a096-3b4d550d4017',
            text: 'Know more',
        },
        {
            id: 'bc536bbc-2b88-40bf-ac59-7eb5f3b1acc8',
            text: 'Shefali Shah',
        },
        {
            id: '3ae76901-d37c-4a97-911c-5d31abd8f4db',
            text: '[Retired Indian Revenue Services (“IRS”) (Income Tax) Officer]Independent Director',
        },
        {
            id: '44c628a1-3174-4413-9131-1a1039fcf147',
            text: 'Know more',
        },
        {
            id: '830d4952-3528-461f-a396-f491d9599b12',
            text: 'Board Committees',
        },
        {
            id: '76ebf1f0-9f0b-437b-82be-2b9ce3f9c7f9',
            text: 'Explore Our Diverse Board Committees',
        },
        {
            id: '8a52909a-ecef-44ad-8343-4a4c9c38d95e',
            text: 'Audit Committee',
        },
        {
            id: 'd6113370-c323-442f-b989-29a4a6c0175d',
            text: '',
        },
        {
            id: '8de1cd0e-d964-4094-abe5-cfb22d5536cd',
            text: 'Dinabandhu Mohapatra',
        },
        {
            id: 'fb3ee1bc-6f50-4a62-ac47-d216411dea0b',
            text: 'Chairman',
        },
        {
            id: '10728d59-07a0-49f9-94ba-7142b505599e',
            text: 'Know more',
        },
        {
            id: '634a9e46-05a9-4709-a225-7ba2519612d0',
            text: '#',
        },
        {
            id: 'fec6eb0e-6e01-4b73-822b-8d9ef7a1e7a5',
            text: 'Nomination & Remuneration Committee',
        },
        {
            id: '2d73ca06-e656-4ce2-9ec9-0e0e5b2ab4bb',
            text: '',
        },
        {
            id: '25f15ed7-55db-43c3-aad1-eacee853c5b9',
            text: 'Satish Chand Mathur',
        },
        {
            id: '64765716-dcd3-4494-97b6-d308006755e2',
            text: 'Member',
        },
        {
            id: '2f2ed7fc-ffa8-4239-8719-dba3092c8f7a',
            text: 'Know more',
        },
        {
            id: '78a5eaad-348f-436b-8f5b-d80066496763',
            text: '#',
        },
        {
            id: 'c9ac85d2-06b6-4d7f-bb7a-6ad2607f48eb',
            text: 'Stakeholders Relationship Committee',
        },
        {
            id: 'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            text: '',
        },
        {
            id: '90a64c33-5c59-4366-b10f-b23602f02820',
            text: 'Achuthan Siddharth',
        },
        {
            id: 'b4999f58-069b-44c7-acbc-dd42286c06b0',
            text: 'Member',
        },
        {
            id: '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            text: 'Know more',
        },
        {
            id: 'cfc1fc44-163f-40e5-8482-68b1b929d855',
            text: '#',
        },
        {
            id: '662c9e73-5cee-432b-a8a4-381b2d6a600f',
            text: 'Risk Management Committee',
        },
        {
            id: '715bbbb1-221f-431b-b64e-270583da4cc1',
            text: 'Asset Liability Management Committee',
        },
        {
            id: '95cc360c-d1db-4b94-b7e8-3423e432c108',
            text: 'Corporate Social Responsibility (CSR) Committee',
        },
        {
            id: '8e802f31-1bf6-46d9-bfb1-2a7762679eee',
            text: 'Customer Service Committee',
        },
        {
            id: 'a5b006b4-491a-4487-a237-70ed20d32bbd',
            text: 'Management Committee',
        },
        {
            id: '0388ba4f-394f-4d93-9a32-55060a221be6',
            text: 'IT Strategy Committee',
        },
        {
            id: '476748f6-fc58-4f93-bde9-ec5b9637e232',
            text: '#',
        },
        {
            id: 'c047bf0c-43fc-4ef4-bdef-b4483d426b45',
            text: 'How It Works',
        },
        {
            id: '8754b58e-633e-4886-bca4-a7d998436a3f',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '267b158d-c657-4570-b0da-2313013228a4',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '3b60b8bf-78f0-40a7-b348-a83c869f38a9',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'd9714c11-9619-440d-8f8a-f1253f2ef316',
            text: '#',
        },
        {
            id: '0de764ab-a9e5-4b6b-a384-c3ea7d2f8eef',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '2a356ac8-0348-4e6e-be50-c5598471eb3e',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '3b7916e4-f8d8-4443-b8a4-d016ca244ead',
            text: '#',
        },
        {
            id: '9e51cf1e-d72a-4ed7-811c-31a071287298',
            text: 'Refinancing Options',
        },
        {
            id: '0c008cc4-6164-4208-92cd-eaa3add60a8e',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '502c50aa-b4ec-4315-8a87-9aaf864365ca',
            text: '#',
        },
        {
            id: '494b92b9-35b7-41b7-aea2-491bd27f3a95',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '62641a4e-b51b-4cad-8b44-5f188f8e8601',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '4519ddf2-76a0-4331-965c-446dec6ee963',
            text: '',
        },
        {
            id: '7e2cae68-c803-4049-87f0-28ba6c9c9f5c',
            text: '#',
        },
        {
            id: 'f630429b-df74-454a-8b4c-76cc735221cf',
            text: 'Refinancing Options',
        },
        {
            id: 'fd2caa10-ad9d-4493-bede-b43192c8edf4',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'c3c38b56-81f9-4e5e-af8a-eb3d696dea22',
            text: 'Discover Our Blogs',
        },
    ],
    awardsAndAccolades: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'd542a737-36af-4ac1-8b88-ee540bee4856',
            text: 'Hamara Bank',
        },
        {
            id: 'd542a737-36af-4ac1-8b88-ee540bee4856',
            text: 'Humari Kahani',
        },
        {
            id: '5dc95295-77e0-4e2d-bae8-56c80273eee6',
            text: '2019',
        },
        {
            id: '8aa46b55-f4c9-4b58-ad6c-845fda05f26d',
            text: '2018',
        },
        {
            id: '78e29fc7-9073-4d9d-a34a-8ea0fcdceb7a',
            text: '2017',
        },
        {
            id: 'adcd3cc6-cfb9-4349-b3eb-5f2fc7822775',
            text: '2016',
        },
        {
            id: '655f1846-eabd-44be-9fd0-1c71ad4f6a8d',
            text: '2015',
        },
        {
            id: '1ef7326c-15f9-4ddd-ba9f-dbd4fd0c8ee4',
            text: '2014',
        },
        {
            id: 'fbed8e84-85fa-455d-a0fb-d787ac9d7541',
            text: '2013',
        },
        {
            id: '5a1ce20f-82d8-4a7e-ab12-0c3c147d94d1',
            text: '2012',
        },
        {
            id: 'e14f0f38-d4e3-4dec-976b-aaa9fe418fc8',
            text: '2011',
        },
        {
            id: 'a640a003-07f2-48ea-9be2-b30c0b31fbca',
            text: '',
        },
        {
            id: '55babda3-0206-4435-a065-e1a3d5f81cda',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '8ba78660-7546-4021-bf6d-f2cab17f8049',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '9b608fd8-0328-4f57-acae-f8127fed7955',
            text: '28 June',
        },
        {
            id: 'fb73e807-3e7f-4b34-91a5-970335fa7ef2',
            text: '',
        },
        {
            id: 'a8f9df4b-0f39-40d3-b926-1e5e2acf8e91',
            text: 'Ranked 20th among India’s Best Companies to Work For 2018',
        },
        {
            id: 'c5c3010c-efc1-4a6c-9ee8-64d95c3cc3c4',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'e68d9dbc-c6fe-4eb8-bad1-f47f180ab61b',
            text: '18 June',
        },
        {
            id: '256c02b0-4b2c-46e6-9956-1ca5472525cc',
            text: '',
        },
        {
            id: '658018d8-e9f9-4dc0-9cd6-5690a296035c',
            text: 'Ranked 20th among India’s Best Companies to Work For 2017',
        },
        {
            id: 'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
            text: '17 June',
        },
        {
            id: 'e488be8a-f5e6-4469-aae9-2745c60b6580',
            text: 'Ranked 20th among India’s Best Companies to Work For 2016',
        },
        {
            id: 'c7204070-04d3-45f6-a723-d5a27653fc7e',
            text: 'Ranked 20th among India’s Best Companies to Work For 2016',
        },
        {
            id: '21eaea89-3d6b-495d-acad-8218ed192041',
            text: 'Ranked 20th among India’s Best Companies to Work For 2015',
        },
        {
            id: 'f0911f00-8133-47f6-a6aa-05d9fdf6d63b',
            text: 'Ranked 20th among India’s Best Companies to Work For 2014',
        },
        {
            id: 'c2f305e9-b05c-4d30-ba73-ceb173017e4e',
            text: 'Ranked 20th among India’s Best Companies to Work For 2013',
        },
        {
            id: '5499c001-8450-4288-a041-3735db37d0f3',
            text: 'Ranked 20th among India’s Best Companies to Work For 2012',
        },
        {
            id: '2979961c-b350-43ce-b02b-bbaf48a46937',
            text: 'Ranked 20th among India’s Best Companies to Work For 2011',
        },
        {
            id: 'f5677933-f8a7-4466-813a-43d8986b6ad3',
            text: 'Awards and Accolades',
        },
        {
            id: 'f57ecad5-f5ba-4d34-8b19-25d5e1448555',
            text: 'Click here to know more about the latest awards and accolades won by Indiabulls Housing Finance',
        },
        {
            id: '654c154a-fb92-4b59-9cb2-930ff945a980',
            text: 'Discover Our Blogs',
        },
        {
            id: '4961ef4c-77b5-4641-98be-7227ee898c48',
            text: '',
        },
        {
            id: 'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            text: 'How It Works',
        },
        {
            id: 'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            text: '22 June',
        },
    ],
    homeLoan: [
        ...footerStrings,
        ...headerStrings,
        ...helpSectionString,
        ...calculatorsStrings,
        ...needHelpString,
        {
            id: 'fdd19bd9-f93b-4a0d-bc09-4c2982e23411',
            text: 'Loan Humara<br/> <span class="tw-text-primary-500">Sammaan</span> Aapka',
        },
        {
            id: 'c82c9303-3bfe-4911-9031-082cf4c0a572',
            text: 'Home Loan',
        },
        {
            id: 'a1717b56-5798-4b2f-afe0-2a1fced81a02',
            text: 'Sammaan Capital Home Loans, tailored for customer needs, feature competitive rates and flexible repayments. The process is simplified with digital applications, quick disbursements, and support from property search to swift approval, ensuring a hassle-free home-buying experience. Whether online or offline, our end-to-end service makes home ownership seamless and convenient.',
        },
        {
            id: '06794d91-ba2a-4169-9d50-4f1e5d18b409',
            text: 'Home Loan ranging from',
        },
        {
            id: '1772499a-b486-4c65-8c4b-fbba38f51970',
            text: '8.75%* onwards',
        },
        {
            id: '08909ec9-d828-41c4-93c5-facd73fb1ad0',
            text: 'Apply For Home Loan',
        },
        {
            id: '05a94f3f-ab8a-4c38-a693-feba67b8b3de',
            text: '*MSME’s being eligible under Priority Sector Lending.',
        },
        {
            id: '73c19973-e8e7-4c1d-9c7c-fa8f9f09b6b9',
            text: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , underlying security and other risk parameters.',
        },
        {
            id: 'e3bfe307-8278-4efe-a97e-d8e212b2c690',
            text: 'Why Choose Sammaan Capital Home Loan?',
        },
        {
            id: '1638c68c-3ab6-4bcb-b941-d24689bad29d',
            text: 'Instant Sanction',
        },
        {
            id: '7a11f551-b4fb-4c1d-8c3e-8616f0521676',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '51d63543-31c5-4c9e-adc5-da7d6ecbb334',
            text: 'Speedy Processing',
        },
        {
            id: 'ee4895a4-d316-4ed9-8c64-f81d55691643',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'b7778b48-9f0d-4baa-aeef-7aaf8460973c',
            text: 'Speedy Processing',
        },
        {
            id: 'ed8b4878-e5b5-4cb8-ad7e-55a3bb4c0062',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '8f0b64e3-c2d4-49c5-be89-e6e9873e0177',
            text: 'Instant Sanction',
        },
        {
            id: 'bb9b8244-7dec-4ff3-8a85-77b3dc0ef933',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '9a19af21-cb5d-4b71-8e43-b304e4e0cf0b',
            text: 'Happy Home Stories',
        },
        {
            id: '1f3ba251-0645-4e9d-a4f2-76701ec3eaa3',
            text: 'Our customer’s reviews',
        },
        {
            id: 'a143f0b7-7668-4abe-ae02-a3e3d2fc07f7',
            text: 'Komal Kumari',
        },
        {
            id: '098163b1-33c1-4ab6-a6dd-5fab66987d11',
            text: '1',
        },
        {
            id: 'b40d3c01-3c3d-48c3-b647-a9be513c1ae4',
            text: 'Download the App',
        },
        {
            id: 'a4c8cc36-1b6d-4fd4-a207-b3bda62a93d2',
            text: 'Delhi',
        },
        {
            id: '5e059a11-5ce5-4c0c-a303-ef3e80ba7e66',
            text: `“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”`,
        },
        {
            id: '66d4b4f5-b131-4f0d-8fdb-658305e17bcd',
            text: 'Steps to take Home Loan',
        },
        {
            id: 'e2d2a4b9-13ff-4640-8ea1-b7d20b68fee8',
            text: '01/04',
        },
        {
            id: '42a8dc3d-79d5-420d-9432-f33690b73fa2',
            text: 'Fill the Loan Application Form',
        },
        {
            id: 'a26a36f2-ec31-4501-9a28-5aa361f49cb6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'e5e33985-38e9-4152-bc38-f6a73937f006',
            text: '02/04',
        },
        {
            id: '40dfa84a-ce32-4cca-ba6c-3199c4c847ab',
            text: '03/04',
        },
        {
            id: '30ba787f-462a-4050-9ae0-15e58f1cc007',
            text: '04/04',
        },
        {
            id: '81c7cbfa-4c6f-4e60-90f1-e2cd95366dc7',
            text: 'EMI',
        },
        {
            id: '27e45c19-fdb7-4e94-a2b4-bea715cdc73c',
            text: 'Eligibility',
        },
        {
            id: '6853cf22-d004-45d8-9aa1-302985ebcd45',
            text: 'Affordability',
        },
        {
            id: 'f697cfee-da89-47d3-8e79-80458aef3cb0',
            text: 'PMAY Subsidy',
        },
        {
            id: '82640915-69b4-412f-b3c4-4495351752c4',
            text: 'Stamp duty',
        },
        {
            id: 'f1f58bb7-2acf-4e92-ac5c-f7b739587765',
            text: 'Tax benefit',
        },
        {
            id: '1569fd85-15b6-4f2f-9070-d55875f62692',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '266208a0-4ada-4352-965f-0f489d273faa',
            text: 'Calculate Your Home Loan',
        },
        {
            id: '69ba8f50-635b-46a9-aaaf-161fb4d3415a',
            text: 'Resource Center',
        },
        {
            id: '9c203af1-9599-4340-8b80-f1f04c6b6e57',
            text: 'Key Features & Benefits',
        },
        {
            id: '14b24bb7-326e-4d13-861d-fd316a3e0fb2',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure,',
        },
        {
            id: 'c820afe5-1365-4327-81ef-1b90a1d60c1a',
            text: 'Tax benefits',
        },
        {
            id: '6a2e0314-2e8f-408f-b905-0f876b493c25',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure,',
        },
        {
            id: '44450f45-2325-4db5-bb5e-92e8f3f3f5f5',
            text: 'How It Works',
        },
        {
            id: 'dccef034-2331-4b12-b07d-4a7e60bf4f01',
            text: 'Learn about the process of getting a home loan',
        },
        {
            id: '9b640bf3-e9f4-4f8f-94d4-971fecfc801c',
            text: '22 June',
        },
        {
            id: 'b017ced7-d5f7-4fad-b362-e47126777d1a',
            text: 'Discover Our Blogs',
        },
        {
            id: '517ee623-5f80-4d07-923b-f6be06eaf349',
            text: 'News Corner',
        },
        {
            id: 'a32770a7-f262-45d0-8969-e95b116abdea',
            text: '22 June',
        },
        {
            id: 'd92c391b-e344-499c-9953-8f5467a50e74',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '6eb7b04d-a7fb-4b3f-ae47-f69d60514c12',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'c85ab2a2-7b10-476b-ba2e-90ab4a07db91',
            text: 'Know more',
        },
        {
            id: '337f62d4-1509-4774-ad09-4dea9eaa4664',
            text: 'What are the stages involved in taking loan?',
        },
        {
            id: '2e19d46c-6517-4939-87d5-a791438cda77',
            text: 'the stages involved in taking loan the stages involved in taking loan the stages involved in taking loan',
        },
        {
            id: '997c99b9-8997-46d2-b80d-ed69039e3d29',
            text: 'Need help?',
        },
        {
            id: 'b598a4f1-2ae5-4343-906f-a7272d1cd63a',
            text: 'Get In Touch Us',
        },
        {
            id: '62d7756b-07ac-4dbd-aa43-b2e4b04381af',
            text: 'Gurgaon',
        },
        {
            id: '2384caa7-d4d5-4136-9da3-3cacc8c6d16a',
            text: '',
        },
        {
            id: '02bf257e-cf4a-4c44-85d8-6e3c145d3986',
            text: 'DLF Crest',
        },
        {
            id: 'dc3cdfeb-a609-42e2-84ab-b7f7989fc392',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: 'ccddd482-c0eb-4f6a-8a48-1200e0b89f3d',
            text: 'Delhi',
        },
        {
            id: '3fa1d4d1-8ac1-47a2-a418-b05945d668e1',
            text: 'chintels India Ltd.',
        },
        {
            id: 'cfc575d9-7429-43e3-ab63-88975f26778c',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: '65a579af-d990-4fad-8850-6a88d1b91af5',
            text: 'New Delhi',
        },
        {
            id: '042a1ad2-0086-4f86-8b02-3f0f0c66a79f',
            text: 'chintels India Ltd.',
        },
        {
            id: '9d1fef3a-b771-4621-af6d-c602adceb057',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: 'fa1b2ee7-f63a-43cf-b702-425d3cc60252',
            text: 'Noida',
        },
        {
            id: '775dc639-c744-490a-a915-f19c54dec6df',
            text: 'chintels India Ltd.',
        },
        {
            id: 'bf0ee48a-e538-47e5-a93d-1600556d4da9',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: 'bfd48692-5b8e-4054-9e53-6101e0ef197f',
            text: 'Our Approved Projects',
        },
        {
            id: '9252c624-6f50-4ff3-b13d-86059d334524',
            text: 'Search a project by city, builder name',
        },
        {
            id: 'd0a59a7f-58b6-41d2-b3d8-8aef7a70361a',
            text: 'Customer Portal',
        },
        {
            id: '2e9130ba-eda0-487f-8ad8-9495623b6e85',
            text: 'Manage your Home Loan online and with ease after disbursal',
        },
        {
            id: 'bf4ec9be-1f1d-45e0-86bb-d42deee54b83',
            text: 'Download Our <br/> Sammaan Capital App',
        },
        {
            id: 'fcf48d73-4942-4897-9c73-e14958bf3b58',
            text: 'Download app from',
        },
    ],
    emiCalculator: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '8cb74703-266e-4e87-a8f1-ec5c9fd926db',
            text: 'Home Loan',
        },
        {
            id: '58f3cae9-f314-4099-9474-ffd22ac28516',
            text: 'Faqs',
        },
        {
            id: 'f0bfa779-c71e-4e59-911a-3e9ca4f3f85a',
            text: 'MSME Loans & LAP',
        },
        {
            id: '9613227d-ae78-411b-9e5a-5823c8eff4b9',
            text: 'Home Loan Balance Transfer',
        },
        {
            id: '2cb425c1-6d75-47d2-affe-d7291ff7cfc5',
            text: "Home Loan for NRI's",
        },
        {
            id: 'fc061170-25dc-4909-9a82-6d812f753da1',
            text: 'Home Renovation Loan',
        },
        {
            id: '9be7a5a5-9050-4b4d-9b81-68fa659d7b97',
            text: 'Home Extension Loan',
        },
        {
            id: '119a8fdd-96e8-4e4e-a232-1d09d63dde4c',
            text: 'Rural Home Loan',
        },
        {
            id: 'de5b2cfa-ea54-4076-ad51-48556ddf531d',
            text: 'Calculate your Loan',
        },
        {
            id: 'fb686677-d0b7-44ae-9d03-2c94807ed4eb',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '7b037d54-9e22-48b6-904b-2fa6f8e64791',
            text: 'About EMI Calculator',
        },
        {
            id: 'debc1f07-679f-44a9-b08a-a51f9648dd6c',
            text: 'An EMI (Equated Monthly Installment) calculator is a valuable financial tool designed to assist individuals in estimating their monthly loan repayment obligations. Users input essential details such as the principal loan amount, interest rate, and loan tenure into the calculator.',
        },
        {
            id: '05d77b20-35d7-4e83-bae0-2591c9d107a9',
            text: 'The tool then employs a formula, typically ( EMI = \frac{P \times r \times (1+r)^n}{(1+r)^n-1} ), to compute the fixed, equal monthly installment. This breakdown enables borrowers to gain a clear understanding of their anticipated monthly repayment amounts, facilitating informed financial planning and aiding in decision-making when considering loans.',
        },
        {
            id: '7e3682e8-d0c9-430c-82dc-ae4bbdeebde6',
            text: 'EMI & Planning',
        },
        {
            id: '05f10222-1d67-4733-a31d-fea80d79cfad',
            text: 'EMI (Equated Monthly Installment) is a fixed monthly payment for loan repayment, covering both principal and interest. It serves as a cornerstone in financial planning, allowing borrowers to budget effectively and ensure timely repayments, contributing to a well-organized and sustainable financial strategy.',
        },
        {
            id: 'e9bf6ca6-7757-4ba2-96cc-2570816020a1',
            text: 'What are the stages involved while taking loan?',
        },
        {
            id: 'e8d8bd88-fbfb-4e30-9e7a-3fce7d2a826c',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            id: '4ff0efff-4c43-4ed9-8dc1-b90e91d686e6',
            text: 'Who can apply for a home loan?',
        },
        {
            id: '883589ec-5825-427e-8005-3285e48d8122',
            text: 'When can you apply for a loan?',
        },
        {
            id: '8a9b5bd0-6156-4325-9d1c-99d175ee0862',
            text: 'What are the loan tenure options?',
        },
        {
            id: 'ead05582-3548-4381-b116-aaaa06d59e6f',
            text: 'When can you apply for a loan?',
        },
    ],
    affordabilityCalculator: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '7e446436-1a18-4fe6-9c77-108543b48915',
            text: 'Calculate your affordability',
        },
        {
            id: '8d06ff4e-c6f8-407a-96cf-e6ef7151d822',
            text: 'This calculator determines the property cost and associated loan amount within your financial capacity',
        },
        {
            id: 'eb3aef17-197c-4758-b3d3-5756a6053a65',
            text: 'About Affordability Calculator',
        },
        {
            id: 'e1864e65-5d48-41a4-80ce-e9d855eff6e8',
            text: 'A home loan affordability calculator is an online tool that is available on the websites of lending institutions. It allows you to get a wholesome idea about how much of a worth of property you can afford. Just like before buying a property, you consider your finances; the affordability calculators also use the same information to calculate your affordability.',
        },
        {
            id: 'f7917477-7e7b-4855-9bab-5047e128f600',
            text: ' It analyses the information entered by you and tells you the following things:',
        },
        {
            id: '8603875d-5569-4603-8f01-1bdc60e43bc3',
            text: 'The loan amount you will be eligible to get.',
        },
        {
            id: '12398dae-ca41-401f-8753-2aaa0694db92',
            text: 'Property cost that you can afford.',
        },
        {
            id: '4136a99d-72d8-4953-8990-fbf95bc334c5',
            text: 'To calculate your affordability, it will require you to input the following information:',
        },
        {
            id: 'db2c74b3-bcff-41ab-a38f-de64d2b05124',
            text: 'Your monthly income',
        },
        {
            id: '04c78f15-48b4-4c1c-bdb7-d2a327eeda40',
            text: 'Other EMIs that you might have',
        },
        {
            id: '75251548-d302-4f0f-aa2f-7ab14f4e7ef6',
            text: 'The expected interest rate on the property you wish to purchase',
        },
        {
            id: '9f62b8bb-7b3e-4d04-937c-00c50941e313',
            text: 'The tenure for which you are willing to take the home loan',
        },
        {
            id: '489c5527-f783-4ea9-a878-dd0eede9a26d',
            text: 'The down payment that you can afford to pay',
        },
        {
            id: '301d4f90-86bd-42d8-b914-4e914dd54ad7',
            text: 'Affordability & Planning',
        },
        {
            id: '7198748e-0f3a-4ff6-b3e7-46e4e4c7ed9c',
            text: 'Affordability calculators offer easy-to-use, free tools that require minimal information, saving time by providing quick insights into home loan eligibility. They aid in financial planning by offering customized results based on individual financial status, allowing users to assess their affordability and plan accordingly.',
        },
        {
            id: '574151f2-940e-42cb-8f82-2743654391e8',
            text: 'How to improve Home Loan Affordability?',
        },
        {
            id: '6dab8937-d1ce-4572-a538-4d8c18228627',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            id: 'a5f507dc-135f-4e5f-a2be-80490c05380a',
            text: 'How is home loan affordability calculated?',
        },
        {
            id: 'bffc199a-391e-4fa5-85d0-c0dc593403fd',
            text: 'How much Home Loan EMI can you afford?',
        },
        {
            id: '3b3d878f-f2a7-4bec-b5bc-9e3dba4f06b2',
            text: 'What is the maximum amount I can borrow for a home loan?',
        },
        {
            id: '65d51a46-53cf-4983-ab4d-e62361a17ebe',
            text: 'Who can be my co-applicant?',
        },
    ],
    careerWithUs: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'd02ac73c-32d6-437f-8ab4-826be1b480b7',
            text: 'Location:',
        },
        {
            id: 'e5b2284c-dae2-4c67-98a7-5c62e8d6c91f',
            text: 'Role : ',
        },
        {
            id: '2c168920-89ed-42a6-b2ba-a3ac985a9ca7',
            text: 'Select Role',
        },
        {
            id: '1e014985-e265-4295-96c5-fe5921d1c459',
            text: 'Select Location',
        },
        {
            id: '988bb271-1fba-4563-8337-f8224fec1a26',
            text: 'Read More',
        },
        {
            id: 'ab9d388f-6b12-4429-a44c-ec0838af4da4',
            text: '/career/asst-business-manager',
        },
        {
            id: 'c792abeb-e6e7-4cde-a31e-070315803079',
            text: 'Explore Exciting <span class="tw-text-primary-500">Career Opportunities</span> <br/> With Us!',
        },
        {
            id: '3932ab57-805a-4752-865a-b4923ef0e9de',
            text: 'Find Jobs',
        },
        {
            id: '4227ddd5-25c1-4507-8cc7-aba9034ee3c9',
            text: 'About Samman Capital',
        },
        {
            id: 'd6f81cfd-676f-46c1-9982-6ce275f24a74',
            text: '',
        },
        {
            id: '5fafadcb-5f90-41cd-8d8e-f6d066c7c179',
            text: `Indiabulls Housing Finance Ltd. (IBHFL) is India’s third largest housing finance company, regulated by the Reserve Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating agencies including CRISIL, ICRA and CARE Ratings and at ‘AA+” by Brickwork Ratings. The company has a balance sheet size of ₹ 0.70 trillion as on 31 March, 2023. The company has serviced more than 1.4 million happy customers and cumulatively disbursed loans of over ₹ 3.08 trillion.`,
        },
        {
            id: '8f98e855-878f-45bb-aee3-ba97d11b473e',
            text: 'Know More',
        },
        {
            id: 'c6cde0c6-bd55-404e-b0c9-8b9fca3d6692',
            text: 'Life at Sammaan Capital',
        },
        {
            id: '15b1527d-13c8-43e2-912f-5e74d653fa20',
            text: 'Sports day at Sammaan Capital',
        },
        {
            id: '645b2359-da83-4033-81d8-38d32ad1db13',
            text: '',
        },
        {
            id: '1deaf372-e871-4f8b-90be-1f8a23cdb0d2',
            text: '',
        },
        {
            id: '6137ee48-27d5-4fd4-8113-f4acc22165b3',
            text: '',
        },
        {
            id: '5ad2939e-f73c-48fb-ac15-57be9063bff5',
            text: '',
        },
        {
            id: 'e2b4e98f-98b6-4239-a7ed-2521c51f1915',
            text: '',
        },
        {
            id: 'ea0c8c9f-c2f4-475c-93c9-8b8ee58dad96',
            text: 'Sports day at Sammaan Capital',
        },
        {
            id: 'a179001f-119b-4b78-a269-3d6514cebabd',
            text: 'Sports day at Sammaan Capital',
        },
        {
            id: '79ccd1d7-73bd-4ac4-a4b0-bfaa92aa84e6',
            text: 'Sports day at Sammaan Capital',
        },
        {
            id: '75eb4d58-5150-463d-9cab-2f68a7b9f276',
            text: 'Sports day at Sammaan Capital',
        },
        {
            id: '4023a687-fa40-4fbf-b6aa-3b217dcb45bd',
            text: 'Perks at Sammaan Capital',
        },
        {
            id: '4498cda3-d10a-4c29-98f9-cf19cf3c1124',
            text: 'Direct relationship management',
        },
        {
            id: 'f86b2938-1eb6-4ac7-afd4-b8f54c786cee',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '4eed2022-0010-4f90-b4b8-3f2d3ac9611a',
            text: 'High ticket customized loans',
        },
        {
            id: '9761c292-3b06-4788-ae97-2ddddc7eac4e',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'f876b2cc-4584-4ce6-b693-6ee47be37719',
            text: 'Wide network of branches',
        },
        {
            id: 'dd02b5a4-91ce-4a78-ba4b-a9e7fe0ec4ae',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '9ee5c02f-833c-4015-946e-79f43a755fd5',
            text: 'Access Trends & Top Products',
        },
        {
            id: '3935e035-da46-409e-ab5d-e71ca5657e7b',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '55a5672a-5b06-4933-b20a-3206eb18e03b',
            text: 'Know More',
        },
        {
            id: '124b7e3d-8449-40b4-8db3-0c8250b82ec5',
            text: 'Relationship Manager',
        },
        {
            id: '8452a497-3e92-44fe-a9e5-ad3ea61c03f0',
            text: 'Credit Analyst',
        },
        {
            id: '40424c27-d811-4e66-a000-4f5a75021bf7',
            text: 'Sales and Marketing Execurive',
        },
        {
            id: '564439dc-618a-425e-9257-e87aed021dc1',
            text: 'Human Resources Manager',
        },
        {
            id: 'a15a180e-03db-44ca-bffc-a20092cffdfa',
            text: 'Operations Manager',
        },
        {
            id: '2007a118-0492-453e-8999-54feb2106dbb',
            text: 'Relationship Manager - Customer Success',
        },
        {
            id: 'b0e258a8-97ba-43d7-820c-ee58f8683850',
            text: 'Embrace Opportunity: Join Sammaan Capital',
        },
        {
            id: '226b6843-38c9-4db7-b944-a8fe1176db8f',
            text: '',
        },
        {
            id: '8c38ec15-3e45-4ed2-bb4a-f3e5446ca1e1',
            text: 'How It Works',
        },
        {
            id: '3ff7b548-6d85-4176-8fd5-cb3cb3bbe1ed',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '16ecf505-4de3-4b25-ac71-062fa87f45b2',
            text: '22 June',
        },
        {
            id: '56a5c932-10b1-4ac5-aaf7-2361df8444df',
            text: '',
        },
        {
            id: '76428b53-8246-4a0c-81ce-920156bbf0ce',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'e98fa6bd-d90b-455f-8fd5-0bdca9eb0688',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '6c3d8d94-0794-4ca7-9347-81e7910a82d3',
            text: '22 June',
        },
        {
            id: 'e7ab63c8-d5a2-4c55-959f-5a99d3a2aea1',
            text: '',
        },
        {
            id: '50b58420-c480-444d-a623-91b3cb6bdfcd',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '11db4916-7bb3-4177-a56d-d846f5c1a54c',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '4d2134a5-21b6-4a53-b435-c82544d388e8',
            text: '22 June',
        },
        {
            id: 'ef72052b-a5bd-41a8-a01c-62185fa5d012',
            text: '',
        },
        {
            id: 'b709f3b1-545c-4e93-aafc-fdbec3077810',
            text: 'Refinancing Options',
        },
        {
            id: '18fbb356-d479-454a-a84c-209da31d1728',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '2d646189-d128-485d-a3d6-29c166969f06',
            text: '22 June',
        },
        {
            id: '2f5f00e6-a7eb-4aeb-a67f-196a12039eee',
            text: '',
        },
        {
            id: '9d197b99-feec-46fe-a2b1-dde8eb86bfa2',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '323906a2-4d6a-419f-b343-41bef904a683',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'd9b7ac57-28a2-482a-9b59-d5428f62de1c',
            text: '22 June',
        },
        {
            id: '4371bc91-4e48-437f-a855-952f621be326',
            text: '',
        },
        {
            id: '0afde52e-ba8d-46be-8c25-a22d5ddc4f74',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '6035ed91-e99a-48d5-ad1a-1b2a77b9c372',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '9560a7d6-e060-4486-b621-73a9af68ab83',
            text: '22 June',
        },
        {
            id: '67b4378e-96e1-4fe2-b879-bb0a5f13117c',
            text: 'Know More About Us',
        },
        {
            id: '15c19222-65f9-41d5-8572-135605404299',
            text: 'Sameer Gehlaut',
        },
        {
            id: 'a848e01b-bdbb-41cd-997f-526e59fb3c9c',
            text: 'Delhi',
        },
        {
            id: 'a9048746-65de-4bda-8bf7-02838bf0f7d1',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '347bef68-b411-4a93-80a1-0d43c3c62b68',
            text: '3',
        },
        {
            id: '5648378e-1e83-4f7c-9bfb-5166c5165d19',
            text: '',
        },
        {
            id: '251d4101-0b50-4ef2-b7d8-da25d2fd285a',
            text: 'Pawan Gehlaut',
        },
        {
            id: '0223fb91-c54a-4411-921a-785711019f43',
            text: 'Jaipur',
        },
        {
            id: '163c57c9-493a-47b4-bfb4-10a49d7f2230',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '75849c3b-2b3e-4916-ad82-f47108277b89',
            text: '2',
        },
        {
            id: '182b5512-948c-4846-bfcf-5ec7f66b04d2',
            text: '',
        },
        {
            id: '5f1d20c2-f891-495c-ab04-0f0be7c23a34',
            text: 'Sameer Gehlaut',
        },
        {
            id: '96a84de9-01e4-415d-8948-dea9a6c7ae9a',
            text: 'Kota',
        },
        {
            id: '590fbc71-836a-441d-9118-5f325096cec5',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: 'edf15749-75fa-428f-8b24-2e458331f964',
            text: '4',
        },
        {
            id: '0e784204-7c57-4d63-a0ba-7375edf51a3e',
            text: '',
        },
        {
            id: 'b3a6229a-345a-4d88-8379-b795a93083e7',
            text: 'Rahul Gehlaut',
        },
        {
            id: '320f0096-b6cf-42bb-9bdc-2adf59f402e5',
            text: 'Raipur',
        },
        {
            id: '305f3a5f-879e-45b5-8247-10aa35d12b80',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '1343eb17-5af1-4510-ac37-72f431cfb094',
            text: '3',
        },
        {
            id: '19df817f-2c34-4a03-a127-612ae10843ea',
            text: '',
        },
        {
            id: 'f7024a10-47b4-4f56-8ccb-2ed221ddc6e1',
            text: 'Roshan Gehlaut',
        },
        {
            id: '3a9db3c7-4dff-47da-a61d-b2dd4a57377c',
            text: 'Mumbai',
        },
        {
            id: '06f60be6-9cf3-41a2-ad8f-7957185e20c8',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '5dd8199a-4564-430c-ba45-8f973ce2e1da',
            text: '3',
        },
        {
            id: '50498a70-b6c5-4426-83b7-580e01bb07e4',
            text: 'Rajiv Gehlaut',
        },
        {
            id: 'f29988db-accd-4c32-baf7-18c78e516dbd',
            text: 'Kolkata',
        },
        {
            id: '7a6d057b-f39d-4288-9c04-7c4af7f27154',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: 'a5c133fb-9cc8-472f-b911-e22a38bd2276',
            text: '4',
        },
        {
            id: '6260d098-7c3b-4649-ba2f-cef27c823baf',
            text: 'Discover the insights shared by our skilled professionals.',
        },
    ],
    locateUs: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'cfbf5655-6b15-4356-a766-364a03363217',
            text: 'Locate Us: Find Your Nearest Branch',
        },
        {
            id: '58f3cae9-f314-4099-9474-ffd22ac28516',
            text: 'Faqs',
        },
        {
            id: 'b2f12e97-f95a-4ce1-a73f-1aedc8acd25c',
            text: 'Head Offices',
        },
        {
            id: '3764919d-2880-4c40-a963-3e69999ee6fe',
            text: 'Reach out to us via our Head Office of Indiabulls Housing Finance Ltd for home loans and related queries. Apply for housing loans online by giving a call, SMS or Email.',
        },
        {
            id: 'd99e37c7-74a3-4b5e-922c-80acbd2b80fd',
            text: 'What are the stages involved while taking loan?',
        },
        {
            id: '43e29a0e-d408-4acf-b22a-ad698a782e2a',
            text: 'Answer',
        },
        {
            id: '5ae08ced-9d26-49df-bfc3-dac9a26af3da',
            text: 'Who can apply for a home loan?',
        },
        {
            id: '01dd6b8b-20a9-4808-a5d0-60c02366c658',
            text: 'Answer',
        },
        {
            id: '49a58c71-4c96-4def-a48e-08b63d50beee',
            text: 'When can you apply for a loan?',
        },
        {
            id: '2b5c1da0-0b47-4768-83bf-1d1d75dc48b7',
            text: 'Answer',
        },
        {
            id: '679dce73-64d6-4039-b50b-c042f0c0b418',
            text: 'What are the loan tenure options?',
        },
        {
            id: 'e8ff57cf-f267-48ae-b03d-f7380f85d65a',
            text: 'Answer',
        },
        {
            id: 'cdc5fbc5-3ee6-4a80-9dbf-388a27a08d51',
            text: 'When can you apply for a loan?',
        },
        {
            id: 'a398592e-547c-48a9-b2ae-09fc3aadb0d8',
            text: 'Answer',
        },
        {
            id: '31ea6647-d1bc-49a6-81fa-57a4cb2d0c08',
            text: 'Who can apply for a home loan?',
        },
        {
            id: 'cf8f8fcb-64f9-4727-b66c-14a59c7752c5',
            text: 'Answer',
        },
        {
            id: '5eec2ae7-8373-4e19-8d7a-5cce245caa4e',
            text: 'Select City',
        },
        {
            id: '41d6ac75-7f6e-4f0d-a3dd-f7d64d7a5b04',
            text: 'Select State',
        },
        {
            id: 'cd4e15e2-4f38-48db-a3fb-e349c3eb49cf',
            text: 'Registered Office',
        },
        {
            id: 'e9c2ed29-89a6-4b75-9d5c-ffe51d0d0f6a',
            text: '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
        },
        {
            id: '3e5b1418-e98c-423a-b2ab-bcf9d4c3544e',
            text: '022-6189-1000',
        },
        {
            id: '7686f795-f464-4f6c-b521-4b2b8d37ce3a',
            text: '#',
        },
        {
            id: '86478602-aff8-4dbf-b0dc-002d6db53102',
            text: 'Corporate Office',
        },
        {
            id: '76d6e279-859d-4a2f-a12c-809305343f21',
            text: '5th Floor, Building No. 27, KG Marg, Connaught Place, New Delhi - 110001',
        },
        {
            id: '661293a3-776f-48ac-98bc-319efe4c02ff',
            text: '022-6189-1000',
        },
        {
            id: 'b26b54ee-8891-42a3-9fb3-722d5b597c8b',
            text: '#',
        },
    ],
    partnerWithUs: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '176f406b-1675-4368-a558-5f9ed76f50ec',
            text: 'Be Our Valued <br/> <span class="tw-text-primary-500">Partners</span> Today!',
        },
        {
            id: '057606b7-2da4-46fd-b45c-a01c6b897825',
            text: 'About Samman Capital',
        },
        {
            id: 'c44d71ba-b4d4-4f0f-89ca-bf80f68af2b5',
            text: '',
        },
        {
            id: '71f3e7cb-e2f1-4647-915d-a9ad32585041',
            text: 'Indiabulls Housing Finance Ltd. (IBHFL) is India’s third largest housing finance company, regulated by the Reserve Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating agencies including CRISIL, ICRA and CARE Ratings and at ‘AA+” by Brickwork Ratings',
        },
        {
            id: 'c3071f25-7391-4de0-80ca-6e677accb5a0',
            text: 'Become A Partner',
        },
        {
            id: '3ed02ca6-3d84-4c30-bf32-cc4e229531d7',
            text: 'Who Can Partner With Us?',
        },
        {
            id: 'df167c0b-06e3-423c-8bf1-f70aae212858',
            text: 'Financial Agent',
        },
        {
            id: 'c3405e8b-601b-4ab7-98c9-9efd27db92bc',
            text: 'Chartered Accountant',
        },
        {
            id: 'b61904f2-595b-496e-94f7-47e32a185702',
            text: 'Property Broker',
        },
        {
            id: 'e682b8a7-5eed-4b09-a8fe-906d33ea9e5e',
            text: 'Tax Professional',
        },
        {
            id: 'b927a309-174a-4398-8909-34996eec1fe4',
            text: 'Real Estate Agent',
        },
        {
            id: '35837ec0-4312-4575-98a0-1737bc735de9',
            text: 'Tax Professional',
        },
        {
            id: '6f6d5a04-eac3-4803-964c-2bb5746d3f4a',
            text: 'Why should I join Sammaan Capital Partnership?',
        },
        {
            id: '4994811d-c2e1-4615-8826-3685c6f138c8',
            text: 'imgId',
        },
        {
            id: 'cbd5b808-b64a-4cec-95b4-2b53bf191e8a',
            text: 'Direct relationship management',
        },
        {
            id: '60064f89-f7eb-4a75-b8ef-cec284326209',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '22d18e14-07be-4aaa-9f37-13855a16c4cb',
            text: 'imgId',
        },
        {
            id: '60df7d37-d752-4fb5-8c3f-ae035e049dd2',
            text: 'High ticket customized loans',
        },
        {
            id: 'ea9fca5b-982f-4d1e-a095-1f750a10cf85',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'c67b24e8-3abe-4158-96a0-2d8674bd8560',
            text: 'imgId',
        },
        {
            id: 'b9b8d061-a511-4244-a494-1be436c5413a',
            text: 'Wide network of branches',
        },
        {
            id: '1fc18eac-2c21-457e-9608-5f7aa3077a97',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '1d54d198-3354-4205-9453-645daf5a9bdf',
            text: 'imgId',
        },
        {
            id: '82640601-fbba-4aa7-801e-6989508bebd8',
            text: 'Access Trends & Top Products',
        },
        {
            id: '9d6f5db5-d5a3-47ac-9869-c69b5e456e4b',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '143cb849-485e-4823-ae0e-87605a275e0b',
            text: 'Become A Partner',
        },
        {
            id: 'bd36c536-2a5c-4eae-95ef-76345345fc95',
            text: 'Samman Partnership: Unlocking Profits Explained',
        },
        {
            id: '898adcb7-bd6e-40c0-bcb3-fe758960373d',
            text: 'With Indiabulls Home Loans Partner, every lead which is logged in through a partner will make the partner eligible to get attractive rewards. All one has to do is refer Indiabulls Home Loans to people looking for a home loan or LAP and earn a commission/reward on every successful disbursal.',
        },
        {
            id: 'f4c3ecd4-bb96-4913-ac28-a3186539efb0',
            text: 'imgId',
        },
        {
            id: '4b387c63-4027-417d-84d0-b0410222b2be',
            text: 'Sign up to partner now',
        },
        {
            id: '41af1863-b4ef-4eb6-ac45-ce4ee5c1ea45',
            text: 'Lorem ipsum dolor sit amet. Et nihil recusandae est maiores quos quo fugiat dolores non aliquid explicabo qui deserunt veritatis.',
        },
        {
            id: '66af83d1-dde1-4575-becb-accf49675eba',
            text: 'imgId',
        },
        {
            id: '6ea0f7ab-1f03-4694-b78d-b31cb9b1e2f1',
            text: 'Refer Clients using Your Code',
        },
        {
            id: 'f6898a61-cf8a-4fbc-8426-00063d893b7b',
            text: 'Lorem ipsum dolor sit amet. Et nihil recusandae est maiores quos quo fugiat dolores non aliquid explicabo qui deserunt veritatis.',
        },
        {
            id: '3bd752e8-05b5-43cf-8934-444600f367c8',
            text: 'imgId',
        },
        {
            id: '5d5071da-e87b-4349-81a5-ac89d6c0f33b',
            text: 'Earn Commision on Client Loan',
        },
        {
            id: '4c98f3ee-98b2-4a36-a176-28a7b4cdccba',
            text: 'Lorem ipsum dolor sit amet. Et nihil recusandae est maiores quos quo fugiat dolores non aliquid explicabo qui deserunt veritatis.',
        },
        {
            id: '696bf110-98db-4315-b596-a90a991995d1',
            text: 'What are the benefits of partnering with Sammaan Capital?',
        },
        {
            id: '27ca3ea0-2705-4f8c-ae3e-7305459c72fd',
            text: 'Answer',
        },
        {
            id: '4f45ffbc-37ed-4b37-94ba-b7ea9de0b2c0',
            text: 'What criteria do you look for in potential partners?',
        },
        {
            id: '606c434a-7491-4966-a29c-c2ebdc136660',
            text: 'Answer',
        },
        {
            id: '5c0be715-054b-43b2-88eb-6e12c5f273e5',
            text: 'How does the partnership process work?',
        },
        {
            id: '06882644-d2d5-478b-b5f1-393e8a1062cc',
            text: 'Answer',
        },
        {
            id: 'f4baa5ee-1314-479f-9a8e-9032c665d420',
            text: 'Do you offer training or onboarding sessions for new partners?',
        },
        {
            id: '28300889-6131-4e0c-aa6f-8dc916a5c426',
            text: 'Answer',
        },
        {
            id: '1c7baf48-8159-413f-b5cd-8e1cf1dd37dd',
            text: 'Is there any cost involved in becoming a partner?',
        },
        {
            id: 'f8faf691-b023-492f-b8aa-db27994387c2',
            text: 'Answer',
        },
        {
            id: '8488159f-97c6-4a21-aebb-fd2a9cfbfe5f',
            text: 'Is there any cost involved in becoming a partner?',
        },
        {
            id: 'eafd3cbb-12a8-443b-a402-dd56fb626e13',
            text: 'Answer',
        },
        {
            id: 'dfce781c-224a-4c7e-8f9c-fc4273c2e3f1',
            text: 'Become a Sammaan Capital Partner',
        },
        {
            id: 'e3c5a91f-da90-405b-a934-d3a2655d3b07',
            text: 'Full Name',
        },
        {
            id: 'b24da723-5049-4e4b-81d2-1fa107318177',
            text: 'Phone Number',
        },
        {
            id: '0a7fd173-6bf1-4256-a2fd-984e8dc203c7',
            text: 'SEND OTP',
        },
        {
            id: 'ca5690bb-710b-4555-b651-e2df054c1dde',
            text: 'Verified',
        },
        {
            id: '47130c42-07db-45c1-8e43-6adc72ee7089',
            text: 'RESEND OTP',
        },
        {
            id: '348fe890-5c34-428b-a2cd-388884ce1b58',
            text: 'Your OTP will generate on your given Mobile no.',
        },
        {
            id: 'de179005-a481-49bf-aa22-2b0eb2be40c0',
            text: 'OTP',
        },
        {
            id: '8cb51d7e-9324-4285-8686-15f4ab472e7e',
            text: 'VERIFY',
        },
        {
            id: '63466f4a-fcef-4bd6-9e1f-d1af112a9c38',
            text: 'Enter your PIN code',
        },
        {
            id: '9c7d49ed-294c-4079-afb9-5aa4af368f5b',
            text: 'Select a state',
        },
        {
            id: '303ea41f-86cc-47f5-a2fd-c56ea9e51794',
            text: 'Select a city',
        },
        {
            id: 'ca95937e-b583-4775-8270-72f2fd0fab48',
            text: 'Submit',
        },
        {
            id: '50ad339a-c706-43f2-8838-0285bd1d6c71',
            text: 'Thank You for Partnering With Us!',
        },
        {
            id: '23983611-b6a6-4b25-9fd8-47f667c96479',
            text: 'We’ll get back to you in 24-48 hours',
        },
    ],
    pmayCalculator: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'afb226b4-e18a-4414-9e88-c2bdcc3d436e',
            text: 'Calculate your PMAY Subsidy',
        },
        {
            id: 'e88ca43d-cd2c-4df2-b5b1-194d3eb420b7',
            text: 'This calculator evaluates the maximum home loan subsidy you can get under the PMAY scheme',
        },
        {
            id: '1363e73d-a4a8-4560-be2c-fcb009cd9018',
            text: 'About PMAY',
        },
        {
            id: '7f6c0f09-85ed-4432-95b3-fea3ba8f1c50',
            text: 'The Pradhan Mantri Awas Yojana (PMAY) subsidy scheme is a government initiative in India that provides financial assistance to eligible individuals for affordable housing. Under PMAY, beneficiaries can avail substantial subsidies on home loan interest rates, making homeownership more accessible and affordable.',
        },
        {
            id: '77beb267-d51c-48f1-af9d-7e14752b22e3',
            text: `The Pradhan Mantri Awas Yojana calculator or the PMAY calculator is a simple online tool using which you can calculate your PMAY subsidy amount and the category under which you are eligible for the PM Awas Yojana.
            Simply by entering your annual family income, loan tenure, and the loan amount in the PMAY calculator, you can know the PM Awas Yojana subsidy you are eligible to receive within seconds.`,
        },
        {
            id: '7596d84c-8a74-4b0e-ab44-faa449acc45d',
            text: 'Eligibility criteria for PMAY',
        },
        {
            id: 'b4057290-0825-4350-a05e-382b9c18bd35',
            text: 'The beneficiary’s annual household income must fall under any one of the four income categories',
        },
        {
            id: '851b2f53-ddd2-458f-b249-4e981015e5ce',
            text: 'The beneficiary family should not have availed any form of Central assistance from the Indian Government under any housing scheme or any benefit under the PM Awas Yojana.',
        },
        {
            id: 'ef52c7db-36fd-49f6-944e-724ced07487e',
            text: 'The beneficiary family must not own a pucca house in either his/her name or in the name of any other family member in any part of India',
        },
        {
            id: 'd7625687-e528-4321-a758-5d7604f0d3bc',
            text: 'In case of a married couple, a single PM Awas Yojana subsidy can be availed by both or any one of the two provided the meet the income eligibility.',
        },
        {
            id: 'e77107dd-3865-4de9-8078-a6905bc8f098',
            text: 'How to register under PMAY?',
        },
        {
            id: '79b198f6-ae9b-4ca5-8023-bd22c4a0830a',
            text: 'Log onto the official PM Awas Yojana website',
        },
        {
            id: '1507b0c4-bba2-4d60-961a-487e066a9808',
            text: 'Select the ‘Benefits Under Other 3 Components’ option by clicking on ‘Citizen Assessment’ from the drop-box.',
        },
        {
            id: '88c8aea4-5a43-467d-a571-657f74532d24',
            text: 'Enter your Aadhar number and click on ‘Submit’',
        },
        {
            id: '674676f7-d444-4dfa-96ed-77e49bd02357',
            text: 'The site will verify your Aadhar details and if they are correct, you will be directed to the next page where you will have to furnish information such as your name, income, address, contact number, religion, caste, and the likes',
        },
        {
            id: 'feb6a8c3-e2db-4058-b632-2637542af00b',
            text: 'Once you have entered in all the information, type the Captcha Code in the box provided at the bottom of the page and click ‘Submit’',
        },
        {
            id: '4fb6686e-fdc0-45b7-bfdc-609da64b9c90',
            text: 'Who is eligible for the PMAY Scheme?',
        },
        {
            id: '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
        {
            id: '53341898-0e61-4698-b0f4-ce3ecd05b67d',
            text: 'How a customer can get maximum subsidy benefit?',
        },
        {
            id: '863c38ad-68ac-49f7-a794-84d71bf24de1',
            text: 'Whether Repairing Work to the Existing House is Covered for Benefit is Covered for Benefit Under the Scheme?',
        },
        {
            id: 'd5b1a212-cafc-48f8-9951-416829193484',
            text: 'Can I apply for a PMAY loan online?',
        },
        {
            id: 'f89966f9-a822-40c8-b499-38fd50c1d33e',
            text: 'What happens if I do not make loan payments on my PMAY?',
        },
    ],
    cookiePolicy: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '1f9ab273-7183-40a2-91cc-0cc59053e959',
            text: 'Cookie Policy',
        },
        {
            id: 'e5c76b8f-1aa1-47b5-9dae-25612157e08f',
            text: 'Introduction',
        },
        {
            id: '33bc0e49-6a77-44c2-ae1a-0bc44c9f295f',
            text: 'This Cookie Policy (“Policy”) explains that we believe in being open and clear about how we use your information. In the spirit of transparency, this Policy provides detailed information about how and when we use cookies and similar tracking technologies such as pixels, tags, web beacons (hereinafter collectively referred to as “cookies”) on our website and applications (mobile and hybrid, hereinafter referred to “applications”). This cookie policy applies to any Indiabulls Housing Finance Limited (IHFL) product or service that links to this policy or incorporates it by reference.',
        },
        {
            id: '8d993039-249a-4c5e-bbdf-7467aaeeffc8',
            text: 'a. Does IHFL use cookies?',
        },
        {
            id: '4e0c1fba-e741-49e1-aac9-e9bde3b741ed',
            text: 'IHFL uses cookies when you use any of the IHFL websites/applications. They are used to ensure everyone has the best possible experience. By continuing to visit or use our services, you acknowledge the use of cookies for the purposes we describe in this policy. If you prefer not to receive cookies or pixels, then you should stop using our website/applications, or assess your browsing and third party cookie settings as described below.',
        },
        {
            id: 'e9182861-1b20-4749-8d04-5dbea9a41f86',
            text: 'b. What are cookies and pixels?',
        },
        {
            id: 'af749d48-63e7-4372-a31f-396bd5a345a8',
            text: 'Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones, and other devices. A cookie file is stored in your browser and allows the website/application or a third-party to recognize you and make your next visit easier and the website/application more useful to you. Cookies allow IHFL to serve you better and more efficiently, and to personalize your experience on our site.',
        },
        {
            id: '292a73d4-2007-404d-a414-fd3d939371c1',
            text: 'A pixel is a small amount of code on a web page or in an email notification. As many services do, we use pixels to learn whether you’ve interacted with certain web or email content. This helps us measure and improve our services and personalize your experience.',
        },
        {
            id: '36a46b60-799f-4785-b409-6feb5dbef8ef',
            text: 'c. What are cookies used for?',
        },
        {
            id: '93169364-fd75-4bd2-968e-ff48cfba5ec4',
            text: 'When you visit our website or download our applications, we may place a number of cookies in your browser. These are known as First Party Cookies and are required to enable to hold session information as you navigate from page to page within the website. For example, we use cookies on our Websites to understand visitor and user preferences, improve their experience, and track and analyse usage, navigational and other statistical information. Additionally, cookies allow us to bring you advertising both on and off the IHFL site, and bring customized features to you. You can control the use of cookies at the individual browser level. If you elect not to activate the cookie or to later disable cookies, you may still visit our Websites, but your ability to use some features or areas of the Websites may be limited.',
        },
        {
            id: '33368d71-fb7f-4d09-a8b8-dba3a40c73c9',
            text: 'We may use any of the following categories of cookies on the Websites/applications as detailed below.',
        },
        {
            id: '1bd50c4d-5347-41f2-b21f-d978c9353d67',
            text: 'Each cookie falls within one of the four following categories:',
        },
        {
            id: '39de2558-ffab-4771-8a50-31bece243de7',
            text: 'Category',
        },
        {
            id: '986662ff-5e9f-4a8c-a831-9cc538e023f8',
            text: 'Charges',
        },
        {
            id: '8f4b3c1e-134a-42e4-a695-43fa5a5cf7e9',
            text: '1. Essential Cookies',
        },
        {
            id: '768e86f1-99e7-4e9f-99b2-166bfe1d4b66',
            text: 'Essential cookies (First Party Cookies) are sometimes called “strictly necessary” as without them we cannot provide many services that you need on the Website. For example, essential cookies help remember your preferences as you move around the Website. Essential cookies also keep you logged in into a website. Without them the login functionality would not work.',
        },
        {
            id: 'e33316c6-6b3a-4ec2-8968-ac554e5a924c',
            text: '2. Analytics Cookies',
        },
        {
            id: '6da059b6-6e44-4322-90c0-e254f67738ae',
            text: 'These cookies track information about visits to the IHFL and partner websites/applications so that we can make improvements and report our performance. For example: analyse visitor and user behaviour so as to provide more relevant content or suggest certain activities. They collect information about how visitors use the Websites, which site the user came from, the number of each user’s visits and how long a user stays on the Websites. We might also use analytics cookies to test new ads, pages, or features to see how users react to them.',
        },
        {
            id: 'a425d2dc-f15d-4767-8671-236c47abf897',
            text: '3. Functionality or Preference Cookies',
        },
        {
            id: '1000b77c-98ce-4a70-ba9d-94adcfba6427',
            text: 'During your visit to the Websites/applications, cookies are used to remember information you have entered or choices you make (such as your username, language or your region) while using our services. They also store your preferences when personalizing the Websites to optimize your use of IHFL. These preferences are remembered, through the use of the persistent cookies, and the next time you visit the Websites you will not have to set them again.',
        },
        {
            id: 'ddcdd0a8-54bb-494a-90c9-33cafa2cd156',
            text: '4. Targeting or Advertising Cookies',
        },
        {
            id: '3297ea1b-c3bf-4161-ada9-7edb24e7f0fe',
            text: 'These Cookies are placed by third party advertising platforms or networks or IHFL website/applications in order to, deliver ads and track ad performance, enable advertising networks to deliver ads that may be relevant to you based upon your activities (this is sometimes called “behavioural” “tracking” or “targeted” advertising) on the Websites. They may subsequently use information about your visit to target you with advertising that you may be interested in, on the IHFL Websites and other websites. For example, these cookies remember which browsers have visited the Websites',
        },
        {
            id: '9edf98cd-79bc-4da6-8eb7-664faf742f33',
            text: 'In addition, IHFL uses web beacons, or tracking pixels to count visitor numbers and performance cookies to track how many individual users access this website/applications and how often. This information is used for statistical purposes only and it is not IHFL’s intention to use such information to personally identify any user. However, if you have registered and signed into this website/applications, IHFL may combine this information with information from its web analytic services and cookies to analyse how you use this website/applications in more detail.',
        },
        {
            id: '9b1e151f-47c7-4c47-96bc-a6bca369b0f9',
            text: 'd. How cookies are used?',
        },
        {
            id: 'ec9470ec-1d71-42e0-83c5-0da80732d882',
            text: 'We use cookies on our websites/applications. Any browser visiting these sites will receive cookies from us which helps us identify you more quickly when you return. Cookies help us to determine which pages or information you find most useful or interesting at our own Websites/applications.',
        },
        {
            id: 'e479eacc-f726-427d-b2ac-004f4abc211b',
            text: 'Online analytics purposes : ',
        },
        {
            id: 'ce13291b-4917-4d40-9266-811de82ca4dc',
            text: 'We may use web analytics services on IHFL, such as those of Google Analytics. These services help us analyse how users use the services, including by noting the third-party website/applications from which you arrive. The information collected by the technology will be disclosed to or collected directly by such service providers, who use the information to evaluate your use of the services. We also use Google Analytics for certain purposes related to online marketing, as described in the following sections.',
        },
        {
            id: '8650d742-31da-4da8-bc72-8ba2939d6109',
            text: 'Advertising and other targeting purposes :',
        },
        {
            id: '1e229514-6c4b-49a5-aa46-8f84d520c673',
            text: 'Cookies help us serve relevant ads to you more effectively. They also help us provide aggregated auditing, research, and reporting for advertisers, understand and improve our service, and know when content has been shown to you. We work with website/applications analytics and advertising partners, including but not limited to Google, Facebook, Linked-in, Twitter, Google Double Click, InMobi, AdSense, SenseDigital, Lead Bolt, Paisa Bazaar, Magic Bricks, Prop Tiger etc., to deliver IHFL advertisements on third party publisher websites/applications - these partners may set cookies on your devices’ web browser. Cookies allow our partners to recognize your computer so that the ad server can show you IHFL advertisements elsewhere on the Internet, and so that our analytics software can measure your engagement and interactions while using IHFL services. In this way, ad servers may compile anonymous, de-identified information about where you, or others who are using your computer, saw our advertisements, whether or not you interacted with our advertisements, and actions performed on subsequent visits to IHFL websites/applications and applications. This information allows an ad network to deliver targeted advertisements that they believe will be of most interest to you, and it allows IHFL to optimize the performance of our advertising campaigns and the usability of our website/applications. In other words, we use analytics data in concern with data about our online ads that have been shown using the solutions such as Google, Facebook, Linked-in, Twitter, Google Double Click, InMobi, AdSense, SenseDigital, Lead Bolt, Paisa Bazaar, Magic Bricks, Prop Tiger etc., for Advertisers, or other online advertising networks. By doing so, we can understand how anonymous users interacted with our /applications after seeing our ads.',
        },
        {
            id: '158cf68b-7848-4bb7-a636-1141ae9e8b20',
            text: 'e. What third-party cookies does IHFL use?',
        },
        {
            id: '263f44ae-a073-4108-84f0-3de7c9a28e76',
            text: 'Please note that the third parties (advertising networks and providers of external services like web traffic analysis services) may also use cookies on our Services. Also, note that the names of cookies, pixels and similar technologies may change over time.',
        },
        {
            id: '5bfecde3-0538-483d-a452-bfc2182b4c30',
            text: "We use trusted partners to help us service advertising, who may place cookies on your device. We also pull through content from social networks into our own pages, such as embedded Facebook feeds. The social networks, such as Facebook, Google, etc. may themselves also put cookies on your machine. If a user logs into Facebook, Twitter or Google+ via our website/applications, they will leave a cookie on the users' device. This is the same process as if the user logs into these social networks directly.",
        },
        {
            id: 'e62e11d9-6592-4acb-9621-65adf460c87b',
            text: 'We also use Google Analytics and similar solutions on our Services to help us analyse how our Services are used. It uses performance cookies to track customer’s interactions. For example, by using cookies, Google can tell us which pages our users view, which are most popular, what time of day our websites/applications are visited, whether visitors have been to our websites before, what website referred the visitor to our websites/applications, and other similar information. All of this information is anonymized.',
        },
        {
            id: '7fb99d9a-159f-4360-8d32-c97a2c255e3e',
            text: 'We suggest that you should check the respective privacy policies for these external services to help you understand what data these organisations hold about you and how they process it.',
        },
        {
            id: 'f292248c-c7d9-41e2-bb67-0a704cb79a87',
            text: 'Facebook:',
        },
        {
            id: 'bcd1a9b8-559e-4208-b46f-751c5a28ab8c',
            text: 'AdSense:',
        },
        {
            id: '423fd173-253b-4620-bb1e-95907d4e527a',
            text: 'Google Analytics:',
        },
        {
            id: '0e0b25b2-02a1-4860-aff4-96491069d20c',
            text: 'Google Tag Manager:',
        },
        {
            id: '8c8b36a9-ef55-4527-b929-e82783723b81',
            text: 'Google+:',
        },
        {
            id: '17ca8f82-480b-4289-9f87-9b2d8239c82e',
            text: 'Twitter:',
        },
        {
            id: '9371b41c-d886-4101-8f41-414a5758cc54',
            text: 'Google Double click:',
        },
        {
            id: 'b9120d2b-c9bb-453b-b9f4-8ea24aaed984',
            text: 'Your Choices',
        },
        {
            id: '1be421d0-f21c-4b49-a890-788af7a58eb0',
            text: 'https://www.facebook.com/policy.php',
        },
        {
            id: '106aff3f-34ea-4d20-b4d4-d466ca6a2ecb',
            text: 'https://policies.google.com/ technologies/ads',
        },
        {
            id: '28ba6ce9-95e5-45ae-8581-ca505836ee33',
            text: 'http://www.google.com/ analytics/learn/privacy.html',
        },
        {
            id: '59506535-8a10-4e11-9694-e24833b8d884',
            text: 'https://www.google.com/ analytics/tag-manager/faq/',
        },
        {
            id: 'cf4f915b-137d-4d59-b8df-34f3950962a2',
            text: 'https://www.google.com/policies/ privacy/',
        },
        {
            id: '502ca30d-5866-4aa2-8145-e0ca0d7963e9',
            text: 'https://twitter.com/en/privacy.',
        },
        {
            id: 'a4937708-0546-4fff-af96-48065fd6c8cd',
            text: 'https://support. google.com/dfp_premium/answer/2839090?hl=en',
        },
        {
            id: '9ca7c6e5-a118-44d5-b254-b66ad1bbd54d',
            text: "Most browsers allow you to control cookies through their settings preferences. However, if you choose to turn off these cookies you will still see advertising on the internet but it may not be tailored to your interests. It does not mean that you won't be served any advertisements whilst you are online. Whilst we have mentioned most of the third parties involved in using targeting or advertising cookies in the preceding section (refer section d), the list is not exhaustive and is subject to change. Therefore, even if you choose to turn off all the third party cookies listed in section (refer section d), you may still receive some tailored advertisements and recommendations.",
        },
        {
            id: '1e2276c3-8c9f-4008-9338-16f618e20403',
            text: 'There are a number of ways you can manage what cookies are set on your devices. Essential cookies, however, cannot be disabled. If you do not allow certain cookies to be installed, the website/application may not be accessible to you and/or the performance, features, or services may be compromised.',
        },
        {
            id: 'cfac5dba-3ccc-42e2-b4bb-42af3cb389d7',
            text: "You can also manage this type of cookie in the privacy settings on the web browser you are using. Please note that if you use your browser settings to block all cookies you may not be able to access parts of our or others' websites. Please see below for more information.",
        },
        {
            id: '365c1045-d655-49cc-a008-612159e0a488',
            text: 'Changing your Cookie Settings:',
        },
        {
            id: '0127613a-ba26-4359-85a0-1ed86ae70494',
            text: "The browser settings for changing your cookies settings are usually found in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more details.",
        },
        {
            id: '92c6f477-7912-4b4a-985f-288365d23736',
            text: 'Cookie settings in Internet Explorer',
        },
        {
            id: 'd43f956a-f0c8-4013-a875-e52a9fb0d05a',
            text: 'Cookie settings in Firefox',
        },
        {
            id: '7bb6c4b3-d61b-42a1-8849-d3afee04024c',
            text: 'Cookie settings in Chrome',
        },
        {
            id: 'db291f21-8f9e-41d0-b1be-158b6f24f754',
            text: 'Cookie settings in Safari',
        },
        {
            id: '25683229-7667-41b7-a97b-1ce56386992a',
            text: 'More information:',
        },
        {
            id: '90389afe-f1e7-43cf-a0f3-1d7a3c32f92d',
            text: ' To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org. You can learn more about opting out of receiving interest-based ads from other companies at optout.aboutads.info and www.networkadvertising.org/choices. In addition, certain third party advertising networks, like Facebook (pixels) and Google, permit users to opt out of or customize preferences associated with your internet browsing. To learn more about this feature from Google, click here. For further information about the Facebook Pixel, click here.',
        },
    ],
    feedbackForm: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '6db20e5e-ad18-4362-a869-8b539d900910',
            text: 'We respond in time',
        },
        {
            id: 'ead9d0e2-e849-4fd6-a7fa-435a33566ba2',
            text: 'Send us your Feedback & Query',
        },
        {
            id: '2221792d-c8d4-48f0-aef5-b7fb37929a26',
            text: 'Send us your valuable comments and suggestions about our products and services',
        },
        {
            id: 'd3c303f2-ebc6-4b0a-8ff2-6a42113a8683',
            text: 'Feedback',
        },
        {
            id: 'f6e3ef9b-a993-4141-908e-ce4e9b1eb608',
            text: 'Query',
        },
        {
            id: '87e2d29c-8cc3-4623-9e69-a2fcd03be143',
            text: 'First Name',
        },
        {
            id: '850f1918-3aac-44ed-b79d-29680b977e53',
            text: 'Last Name',
        },
        {
            id: '17b7c145-161e-4274-a213-01fb2a78bfb5',
            text: 'Email Id',
        },
        {
            id: '564af2b0-053e-40a8-8ca3-22faba936de0',
            text: 'Mobile No.',
        },
        {
            id: '94e994c0-5702-45bf-bc61-a1a5c0f77918',
            text: 'RESEND OTP',
        },
        {
            id: 'aa034259-b52b-412c-944a-8d12eae08399',
            text: 'SEND OTP',
        },
        {
            id: '1fe938a0-af12-42a5-96bf-3fbf9687e077',
            text: 'OTP',
        },
        {
            id: '2056357a-60cc-4316-aab4-540585c22e5c',
            text: 'INVALID OTP',
        },
        {
            id: '14c3bd14-85c7-4f4e-a37c-3a5fddcf93a3',
            text: 'VERIFY',
        },
        {
            id: '8c76e59c-965d-416c-8cfc-c3d6984f3546',
            text: 'Your OTP will generate on your given Mobile number',
        },
        {
            id: 'ab2fd13d-6711-44e6-9b4f-a055d75d6f02',
            text: 'Your Feedback...',
        },
        {
            id: '3c5cff57-1049-4d39-a524-86dee56b949a',
            text: 'Upload an image (optional)',
        },
        {
            id: 'b5824002-198e-4b8a-8405-bd8d59d2b655',
            text: 'Max. 2 MB size in .jpg or .png format',
        },
        {
            id: 'ff326c1a-2617-466e-9c89-14a3f6c264d4',
            text: 'File Size exceeded!',
        },
        {
            id: '45f57903-79d4-416d-8229-39a9071baf12',
            text: 'Select type of query',
        },
        {
            id: 'ab77e3ba-3d2f-4d6a-ad00-ba309e16ab6e',
            text: 'Your Query...',
        },
        {
            id: '0a6d1407-7c8b-4309-8023-47ab4b5b408b',
            text: 'Submit',
        },
        {
            id: '680b41db-6d76-4aaf-b408-0de83f6e10a3',
            text: 'Thank you for your feedback!',
        },
        {
            id: '3d0d6235-4126-4445-8a62-510c8a47227e',
            text: 'We Value Your Input in Improving Our Services',
        },
    ],
    grievanceForm: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '9d863061-a8de-4b87-81e0-50f621dec1ff',
            text: 'We listen & help',
        },
        {
            id: 'eb051cd8-aebd-4956-9871-ac1f210e8e68',
            text: 'Let us know about your grievance',
        },
        {
            id: '2734e802-e3ec-495f-8524-d3081c84a5c2',
            text: 'Have you requested for the same grievance earlier?',
        },
        {
            id: '37432035-5121-468b-adba-9d1199079b92',
            text: 'Do you have a Loan Account?',
        },
        {
            id: '',
            text: '',
        },
    ],
    customerSupport: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'b87279fe-8c08-44f7-a4cf-d7748a2fb67e',
            text: 'Customer Support',
        },
        {
            id: '0012f856-da17-455c-a355-0f07d943f91d',
            text: 'We stand for you. Freely reach out to us.',
        },
        {
            id: '7c2e9353-46b5-4ced-8e90-e7c2578ada68',
            text: 'Call Us',
        },
        {
            id: '937e4c0a-2d2b-49fe-9f60-08ef88716cf7',
            text: '1800 572 7777',
        },
        {
            id: 'c58d33c5-f6e5-4c82-a524-35fad9377bd2',
            text: 'Monday to Saturday - 9 AM to 6 PM',
        },
        {
            id: '0983d602-e6e2-4a1e-a746-88c5e1eec7bb',
            text: 'Except 2nd and 3rd Saturdays and Public Holidays',
        },
        {
            id: '107c9e9c-7eb1-4466-9d0a-16a318929911',
            text: 'Write to Us',
        },
        {
            id: '14b7fb4c-de1d-432a-bd52-c414ff0e33a5',
            text: 'For Indian : ',
        },
        {
            id: 'a1bd487f-090c-40c4-b7d5-01e71b73cf0d',
            text: 'homeloans@sammaancapital.com',
        },
        {
            id: 'bee6b51e-26c7-4fb0-a77e-8fb875b08160',
            text: 'For NRI customer :',
        },
        {
            id: 'a6a98fad-c63c-4347-b9ba-0fc9c39e9b0f',
            text: 'nriloans_hl@sammaancapital.com',
        },
        {
            id: '6ea620cc-2b1d-4628-a04f-c06f4c0884e9',
            text: 'Post your Feedbacks & Queries',
        },
        {
            id: '70a6f62c-8dc4-4608-a266-ec5ce6f2dcbe',
            text: 'Post your Grievance',
        },
        {
            id: 'f130e4f6-0ed3-4a4e-af6b-c41d5bbed225',
            text: 'Locate our Branch',
        },
        {
            id: '295fbe5c-b426-41de-a69e-894c3afec9f4',
            text: 'We have 20 branches across India.',
        },
        {
            id: 'eb9622ba-9ed1-47da-9faa-8f3936c84bb6',
            text: 'Head Office Address',
        },
        {
            id: '32026100-49ed-4a1a-a5cc-81d6b78e7301',
            text: 'Indiabulls Housing Finance Limited422 B, Udyog Vihar Phase IV, Sector-18 Gurugram, Haryana - 122015Ph: 0124-6048088',
        },
        {
            id: 'ead9d0e2-e849-4fd6-a7fa-435a33566ba2',
            text: 'Send us your Feedback & Query',
        },
        {
            id: '2221792d-c8d4-48f0-aef5-b7fb37929a26',
            text: 'Send us your valuable comments and suggestions about our products and services',
        },
    ],
    overViewPage: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'e827e118-ec45-4fdf-b69c-56a602bfdb72',
            text: 'Sammaan Capital in Numbers',
        },
        {
            id: '38759308-f56f-4513-9aa6-540c60c87b64',
            text: '3rd largest',
        },
        {
            id: '22d9d699-6574-4f6f-9c65-0d1ccd45dd12',
            text: 'HFC',
        },
        {
            id: 'c3f269af-27ba-43a5-9aac-ed906a6a7ce5',
            text: '1 Million+',
        },
        {
            id: '2261ca43-1ff4-4a50-a692-808d92240957',
            text: 'Happy Customers',
        },
        {
            id: 'e7c2e6d1-03a8-40ba-804e-0ab1ab09778b',
            text: '200+',
        },
        {
            id: 'b113309c-fc94-49c3-9228-8fbe37a85923',
            text: 'Offices across India',
        },
        {
            id: '168df6fc-9928-4f81-931b-86ba60444c7e',
            text: '0.70 Trillion',
        },
        {
            id: '5d26a536-7a15-4666-bbfa-937075293eba',
            text: 'Balance Sheet Size',
        },
        {
            id: '28919add-6252-4f96-854d-ebdec325920f',
            text: 'A Walk Through Time',
        },
        {
            id: 'e8aff132-7219-4791-bfe3-379882126ac6',
            text: 'View All',
        },
        {
            id: '6fc2fa52-2dff-4f13-8ec8-cdde4135562e',
            text: 'View All',
        },
        {
            id: '9df9adbf-eb95-402a-b1bd-feabd439fa87',
            text: 'Our Award',
        },
        {
            id: '0a9f5e48-43bd-4bf8-957a-54b07b7e491b',
            text: '',
        },
        {
            id: '62a27de0-f184-403b-93cf-40c1bb51a648',
            text: 'Build Your Career With Us',
        },
        {
            id: 'e6d78b6d-8abe-4470-a20c-b68a976e7308',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius',
        },
        {
            id: 'e668568c-e5ab-4efe-bb4a-a0d8a530ad1e',
            text: 'Explore jobs',
        },
        {
            id: '18939066-a53b-4c17-a496-0da2b7f2cd81',
            text: '',
        },
        {
            id: 'a51f2115-c03e-41af-a7f8-aef52f2f5fce',
            text: '',
        },
        {
            id: 'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
            text: 'News Corner',
        },
        {
            id: 'e9807d73-cfac-4d44-942f-e62cdfff962c',
            text: 'Become Partner With Us',
        },
        {
            id: '21db8f62-215b-4577-a696-9ce4cab63a0d',
            text: "Join us in Building Dreams: Over 10,000 Partners Have Succeeded; You're Next!",
        },
        {
            id: 'f54bddcd-0217-4a94-8b7f-53cd0f65a8aa',
            text: 'Know more',
        },
        {
            id: 'abe02573-6648-4388-814b-7200313c0726',
            text: '',
        },
        {
            id: '1573cb59-2a6b-4487-aef8-2661fe7ee019',
            text: 'View All',
        },
        {
            id: '6a7dcf95-30d8-47b0-8b10-63c5a7681443',
            text: ' Hamara Bank',
        },
        {
            id: '6a7dcf95-30d8-47b0-8b10-63c5a7681443',
            text: ' Hamara Bank',
        },
        {
            id: '2f3734a7-3d7a-477b-82d9-7b9d1d00d865',
            text: 'About Samman Capital',
        },
        {
            id: '40980a9b-6eb5-4808-b34b-a26936352cbe',
            text: `Indiabulls Housing Finance Ltd. (IBHFL) is India’s third
            largest housing finance company, regulated by the Reserve
            Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating
            agencies including CRISIL, ICRA and CARE Ratings and at
            ‘AA+” by Brickwork Ratings. The company has a balance sheet
            size of ₹ 0.70 trillion as on 31 March, 2023. The company
            has serviced more than 1.4 million happy customers and
            cumulatively disbursed loans of over ₹ 3.08 trillion.`,
        },
        {
            id: '68d7549f-dbb5-4731-a91a-0145109de850',
            text: 'About Samman Capital',
        },
        {
            id: '7ecfe534-9186-4b48-8298-0c2a8a2aa51e',
            text: `Indiabulls Housing Finance Ltd. (IBHFL) is India’s third
            largest housing finance company, regulated by the Reserve
            Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating
            agencies including CRISIL, ICRA and CARE Ratings and at
            ‘AA+” by Brickwork Ratings. The company has a balance sheet
            size of ₹ 0.70 trillion as on 31 March, 2023. The company
            has serviced more than 1.4 million happy customers and
            cumulatively disbursed loans of over ₹ 3.08 trillion.`,
        },
        {
            id: '954e3c77-a063-47df-ac66-6d2fe5fcc8c9',
            text: 'Our Numbers',
        },
        {
            id: '83b97a3f-943b-4fcc-9eac-09e0796635a2',
            text: '1 million +',
        },
        {
            id: '0c3b66ba-2d2f-493a-b089-43efd53a6f0a',
            text: 'happy',
        },
        {
            id: 'ad6bb85d-1a89-4407-810a-57b8e21525f4',
            text: 'customers',
        },
        {
            id: 'f124d1cc-f535-4cb0-8def-806576990984',
            text: '200+',
        },
        {
            id: '121dc41d-c39b-4590-adcb-5547ecac9a88',
            text: 'Office Across',
        },
        {
            id: '5a410569-6d31-4bf5-8b2d-68189d83934a',
            text: 'India',
        },
        {
            id: 'a7cc1e6b-3b56-4a4e-be06-e3bc316cd0a7',
            text: '200+',
        },
        {
            id: '707fb772-e4aa-4c17-8890-888e33f8df51',
            text: 'happy',
        },
        {
            id: '265dfd39-2299-4f0e-a061-b754e77efddc',
            text: 'customers',
        },
        {
            id: '12f94019-db36-4542-8f6e-df8cad3ef4e7',
            text: '3rd',
        },
        {
            id: 'd21cd362-9c1f-4e0c-9f10-8396e3f5d58c',
            text: 'largest housing',
        },
        {
            id: 'fbf5df9b-f058-4a04-8dfa-08ba54087a26',
            text: 'finance company',
        },
        {
            id: '7abafe09-8f67-4d0b-a8be-b1b5a3b62eb5',
            text: 'Year • Month',
        },
        {
            id: '31b922f6-e2bb-427f-a37a-2316834243e2',
            text: 'Summary of event',
        },
        {
            id: '8a9eb805-c881-451f-8458-89a118221020',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            id: '86c18891-91cb-497d-8e94-7ac5494e8b7f',
            text: 'Year • Month',
        },
        {
            id: '098efe2e-12b9-45d6-8c66-854569e606a0',
            text: 'Summary of event',
        },
        {
            id: '9d22a6fb-3cbc-41e9-a666-6fbd4dd5f758',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            id: 'a50875c1-cdf4-4bc1-88d5-7a76d975d63a',
            text: 'Year • Month',
        },
        {
            id: '9476a9c7-5063-46f4-a4ed-25fd71418dc5',
            text: 'Summary of event',
        },
        {
            id: '55ec743f-c219-488d-a220-4b4134f15fa7',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            id: '7bb90b70-d4b8-40cd-8051-f10f93de2d2f',
            text: 'Year • Month',
        },
        {
            id: '9066f477-cad2-44bf-b52b-ed412be301bd',
            text: 'Summary of event',
        },
        {
            id: '3304d38a-c48b-4ee6-98a8-62cae891ee53',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            id: '7e14e474-1748-4a9e-b881-ce4215b7e41f',
            text: 'Year • Month',
        },
        {
            id: 'dc60294b-fe82-4185-99b5-e3d348570517',
            text: 'Summary of event',
        },
        {
            id: '1b3d0ed5-5676-43e6-8edc-506681d6847a',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            id: 'ba5080c3-714f-40db-b63e-3404645b9c0d',
            text: 'Mission',
        },
        {
            id: '20546f19-abf6-4960-968f-ac644d4e3bcd',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 'b021b266-dcd4-4788-9a83-455afca471c7',
            text: 'Vision',
        },
        {
            id: '631feb0f-94dd-4acd-9118-f4ee7d22f5b1',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 'c3789034-07f9-433b-8a06-81614734b4ca',
            text: 'Our Mission & Vision',
        },
        {
            id: 'be418038-ea79-48f8-9126-86b8bdef5d12',
            text: 'Customer First',
        },
        {
            id: 'c88d6de5-423e-45d8-8da9-e4168547f609',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: '7eb32478-7231-4ace-871f-8b40f2613647',
            text: 'Integrity',
        },
        {
            id: '6c5b13ea-bf33-4d61-91b6-98129a62eaaf',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: '89232584-cd25-45dd-ba35-02b03f70f36e',
            text: 'Transparency',
        },
        {
            id: 'f280c812-4be7-4c60-931a-b2f1876f61fa',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: '4e12541b-adb0-4a5f-9e4c-fcf47dec74ea',
            text: 'Professionalism',
        },
        {
            id: '66624697-2a98-46ea-a22e-e56a5f7a594f',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: '3617d4f3-ff3b-410c-a251-9652b3672197',
            text: 'Our Guiding Values',
        },
        {
            id: '57661d1c-fc79-4f30-94fb-4452ccf97dd3',
            text: 'At Sammaan Capital, we believe that our core values are the compass that guides our actions and propels our growth. These values reflect our unwavering dedication towards service excellence and ethical practice, distinguishing us in the financial landscape.',
        },
        {
            id: 'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
            text: 'Subhash Sheoratan Mundra',
        },
        {
            id: 'a055abed-deec-4616-b434-a8f983092af3',
            text: 'Vice-Chairman, Managing Director Know more about leader',
        },
        {
            id: '66242f8c-3e3d-434c-964d-91e5a15364cc',
            text: 'Know more',
        },
        {
            id: '7ec06dee-fdcf-4016-a652-27b692bd6acf',
            text: '#',
        },
        {
            id: '338cbcd1-a269-4869-b41a-8f95b8835bb1',
            text: 'Sheoratan Mundra',
        },
        {
            id: '26084384-a085-49e9-8bd4-bb2c9e7b9c78',
            text: 'Vice-Chairman, Managing Director Know more about leader',
        },
        {
            id: '024ca189-c66f-433a-94cf-39fa97a4f9a1',
            text: 'Know more',
        },
        {
            id: '06ab2233-54bf-4770-b8c1-650494215cd3',
            text: '#',
        },
        {
            id: '870fe091-1758-4027-8a3c-45607917bab3',
            text: 'Board Of Directors',
        },
        {
            id: 'e44cbb83-5443-47f7-8502-afeba8177ac4',
            text: 'Management Team',
        },
        {
            id: '04ef7a01-cc6a-4b79-8457-f059d6df82e4',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: 'e57d1e63-aefd-4665-8e28-52faf0b96cc5',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: 'c525b1c6-382a-406d-a43d-0f5f5f132a21',
            text: '28 June',
        },
        {
            id: '44ee7eb8-a33d-4293-8116-026205b68e7e',
            text: "We're hiring!",
        },
        {
            id: 'ed8d475d-456b-4485-8286-97ab65bfc1d1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse',
        },
        {
            id: '5325d3fa-9b67-475e-9f90-3e8a0c806a97',
            text: 'varius enim in eros elementum tristique.',
        },
        {
            id: '604ec865-5774-4aa7-aaa5-5c7dbc114e58',
            text: 'Know More',
        },
    ],
    homeLoanInDelhi: [
        ...footerStrings,
        ...headerStrings,
        ...helpSectionString,
        {
            id: 'd28fe379-87c0-47f3-b8cc-2d9f2dd3929e',
            text: 'Home Loan in <br/><span class="tw-text-primary-500">Delhi</span>',
        },
        {
            id: 'ec0b411e-ac90-4e4b-b972-fe1f0a0741ad',
            text: 'Delhi',
        },
        {
            id: '6b988f92-0726-4763-a5b3-67d07f1b6181',
            text: 'Apply For Home Loan',
        },
        {
            id: 'ffe727d4-cec5-4c2f-8819-e61e3695f9a8',
            text: 'Why Choose Sammaan Capital Home Loan?',
        },
        {
            id: '27796f48-b1c9-4b2f-b92a-3cffd02f1a00',
            text: 'Instant Sanction',
        },
        {
            id: '8f5009ef-0793-4f8f-a8e0-9970f3087980',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'b158d0ad-fde8-4dd5-b01a-2e2bdb6a35f5',
            text: 'Speedy Processing',
        },
        {
            id: 'bcf5b9f3-0864-4d3f-8ba6-eb46817b9255',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '8049b949-6b69-4317-8485-ca119ebb9a4c',
            text: 'Speedy Processing',
        },
        {
            id: '71ba6e15-0ab3-40a6-b65a-af138aebb191',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'e2e91454-0e20-4fb7-b6a1-944ad597092e',
            text: 'Instant Sanction',
        },
        {
            id: 'd9d879ef-f2cd-4742-8ebc-d9169b6baa6d',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'd8a635c2-716e-4f6b-af67-246a0ff3f5eb',
            text: 'The perks of investing in Delhi Real estate',
        },
        {
            id: '919278a4-8bbc-4e38-8ec1-128334a4025f',
            text: 'Delhi is one of the fastest developing cities in the country and home to great infrastructure and public transportation services.',
        },
        {
            id: 'c00fc314-8af0-4a1f-bd3e-d299a083c35b',
            text: 'Delhi has top-quality education and sporting facilities, as well as some of the top healthcare institutes in the country.',
        },
        {
            id: '9b1e5238-43ee-4a10-87d6-c271ef2728c5',
            text: 'Property rates in Delhi are always booming. Your investment today can prove to be worthwhile within a decade, or less.',
        },
        {
            id: '522d61b2-1e6c-4dc8-a676-52e2e351caf2',
            text: 'Delhi real estate may become unaffordable in future due to the high demand for it.',
        },
        {
            id: 'e5e01102-dd5a-4e70-a04d-a858e7022c56',
            text: 'So before it is too, late walk into your nearest Indiabulls branch for your customised home loan in Delhi.',
        },
        {
            id: '8a3ee123-4e9e-4e1d-af6d-05d986058a62',
            text: 'Steps to take Home Loan',
        },
        {
            id: '97d32bc0-f676-43e2-bd19-beb12f78da10',
            text: 'Fill the Loan Application Form',
        },
        {
            id: 'aacc90fa-e6fe-4c88-be58-22a7098d7cc3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '6c576d1c-378d-404f-ba50-35d6a1dc1f60',
            text: 'Confirm the details with our agent',
        },
        {
            id: 'a721f1b5-1604-4adf-b19e-4ce93f7cb388',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'ea197efe-d19c-4895-afea-b977c63e9857',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: 'c97b051f-cd44-4a83-96ee-9adc078e6ea8',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'e49e3a2b-4e32-4c33-96d7-00a2dd01693c',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '9c2e7dd2-b50b-4fcf-b881-8b6c7f3d018d',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '585d8f97-71bc-4079-9a64-f7a00b36c1b5',
            text: 'Apply for Home Loan',
        },
        {
            id: '5dcae2a8-a15c-4d80-8987-7f2de0c9f21e',
            text: 'Sammaan Capital Home Loan in Delhi',
        },
        {
            id: 'ba930803-6f01-47b8-be7e-299f71701edd',
            text: 'Ever since the Delhi Metro expanded, the national capital has become a popular place to move to for professional reasons, given the easy connectivity across the National Capital Region (NCR). Delhi is a city that clubs modernity and history, giving us an amalgamation of the old and the new.With several companies opening in Noida, Gurugram and Faridabad, the NCR has witnessed a large influx of white-collared individuals looking to set base in New Delhi, while buying property in and around the city.If you are dreaming about becoming a home owner in Delhi, now is the time to get started with your Indiabulls Home Loan in Delhi.',
        },
        {
            id: 'cb2bfd0d-4e82-4648-83b7-e24cc36c1f21',
            text: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , property type and other risk parameters.',
        },
        {
            id: '65de4e50-2ef4-45a2-a0bf-51aab1113129',
            text: '# This includes the Rates being offered under the Co-origination arrangement in association with Banks.',
        },
        {
            id: '8ee0567b-08b0-4a62-9056-fafaa1228e3d',
            text: 'Home Loan ranging from',
        },
        {
            id: 'efdf7985-20c2-49d9-937f-de7c3e81f7d9',
            text: '9.75%* onwards',
        },
        {
            id: '66454b7b-568d-40d4-bae3-61c09b55e1c5',
            text: 'Apply Now',
        },
        {
            id: '12e1e2dc-d846-434b-abce-4d360310921f',
            text: 'Resource Center',
        },
        {
            id: '1406584c-d0b8-4493-b49e-05f075bf36ac',
            text: 'Key Features',
        },
        {
            id: '00d563ee-e71c-45aa-854b-b5b2c07f6dfa',
            text: 'Description',
        },
        {
            id: '8eb2ead7-282a-45e0-a321-55579cc94e8a',
            text: 'Benefits',
        },
        {
            id: 'cd400cbe-fb81-4a2c-953c-b83183a98bc9',
            text: 'Description',
        },
        {
            id: 'aeaaaf67-646d-4b12-aef2-94ebc6761c20',
            text: 'Eligibility',
        },
        {
            id: 'b5fcbb03-bbf9-4811-801e-d174a89f1a9d',
            text: 'Description',
        },
        {
            id: '9dbadded-d75f-429b-a592-22d0cf4f1424',
            text: 'Required Documents',
        },
        {
            id: 'f5e615e2-ab69-4b74-83d4-3ece26f47a93',
            text: 'Description',
        },
        {
            id: '664cd778-b7a0-47ce-80b4-b22b25e0a579',
            text: 'How can I determine my eligibility for a Sammaan Capital Home Loan?',
        },
        {
            id: 'dfeac806-514a-43d8-8b89-53d97fc76d5e',
            text: 'Answer',
        },
        {
            id: '646d9eb9-942f-4295-adc5-6d24580c06b1',
            text: 'Are there any hidden charges associated with Sammaan Capital Home Loan?',
        },
        {
            id: '00e53335-498e-4cfb-9902-2c8a14030323',
            text: 'Answer',
        },
        {
            id: 'b1e4d7bb-efba-4d56-8a12-78288e89c022',
            text: 'How quickly can I expect the processing of my home loan with Sammaan Capital?',
        },
        {
            id: '38f35026-ff5f-4a23-a521-767c241a8aba',
            text: 'Answer',
        },
        {
            id: '6ff5a1a2-bf01-4120-90c4-7bfc95ed106a',
            text: 'Is the documentation process for Sammaan Capital Home Loan complicated?',
        },
        {
            id: '9f779e4b-033d-4e33-a76e-fc22a20e0740',
            text: 'Answer',
        },
        {
            id: '2d1126a4-4c41-4525-99b6-685b5f9c6f78',
            text: 'What options do I have for loan repayment with Sammaan Capital Home Loan?',
        },
        {
            id: 'ce8e51ef-85ea-4dc6-9e84-d6da47c561b3',
            text: 'Answer',
        },
        {
            id: '9763de9f-3446-443a-a1aa-9a77e4ce38b1',
            text: 'Who is eligible to apply for a Sammaan Capital Home Loan?',
        },
        {
            id: 'bdef1636-34d2-4f02-807b-6443d3b12c4e',
            text: 'Answer',
        },
        {
            id: '678904ef-a977-468a-a4b7-94fc324d6f57',
            text: 'When can I apply for a Sammaan Capital Home Loan?',
        },
        {
            id: '8e8eba95-12be-486e-9285-903015a8b002',
            text: 'Answer',
        },
        {
            id: 'db770619-f1ea-499f-a4c4-8d5dc7e54a73',
            text: 'What are the tenure options for Sammaan Capital Home Loan?',
        },
        {
            id: '6d2104cc-ac28-4162-8de1-9ca089d8951a',
            text: 'Answer',
        },
        {
            id: '32504637-d982-4a3b-bcd8-67d1ff49f519',
            text: 'What types of interest rates does Sammaan Capital offer for home loans?',
        },
        {
            id: 'a7a5e38a-9f96-4cf3-bcae-fd711ea62829',
            text: 'Answer',
        },
        {
            id: '1057b1da-b479-4b6f-9edb-b62c08e4aebd',
            text: 'Gurgaon',
        },
        {
            id: 'efd589fa-a596-4014-bab4-757e5d8f1da5',
            text: '',
        },
        {
            id: '0ed96073-678f-4421-b8bb-d8d881d4943e',
            text: 'DLF Crest',
        },
        {
            id: '6a1b2d22-ade7-40d2-a6f0-616d3fba1637',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: '3adcb817-462e-4dac-bace-f8fff6822177',
            text: 'New Delhi',
        },
        {
            id: '91d80c80-9169-4f4d-8c63-f91eaa3c0f9c',
            text: '',
        },
        {
            id: '4c9bfa9f-52be-4e3b-931b-2626aca9f01b',
            text: 'chintels India Ltd.',
        },
        {
            id: 'fd6da69d-7359-46cf-ae93-b34b42a51635',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: '9fa5e0d3-9f01-44a5-be0b-72c3429b5ebf',
            text: 'New Delhi',
        },
        {
            id: '2cbf53fd-8eec-4751-bb9d-d8e0e3c79e4f',
            text: '',
        },
        {
            id: 'a49fded8-d0c2-4f11-9bce-c4c238940f25',
            text: 'DLF Crest',
        },
        {
            id: '2c4d232b-436e-43b6-8b6b-0069393790fa',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: '1f8d7d7e-255a-456e-a5ce-1ce649b617b9',
            text: 'Mumbai',
        },
        {
            id: '3a3bbf90-2b93-4aff-b46c-4bc52e01fcdf',
            text: '',
        },
        {
            id: '3fd8b315-0c3b-4a38-afec-cf8fc685e68b',
            text: 'chintels India Ltd.',
        },
        {
            id: '579ee446-c17a-4afe-86fe-255e6cbd3af4',
            text: 'The Crest, Zone 11 & 12, DLF City Phase-5',
        },
        {
            id: '1c222e78-7714-4e5f-9c52-85db38194d9e',
            text: 'Our Approved Projects in Delhi',
        },
        {
            id: 'e5c5b530-a9cf-4528-833e-25cb340e234e',
            text: 'Search a project by area, builder name',
        },
        {
            id: 'ac3f704c-c9f1-486f-b0af-2727a7c7b922',
            text: 'Discover Our Blogs',
        },
        {
            id: '1e6b763a-b897-44a7-ba5a-d570bc51e146',
            text: '',
        },
        {
            id: '4f0145df-055f-4fc4-8d1f-40d376b8ac55',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '3fa08422-3d1f-40ac-a97f-6ef0af1fd076',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '30cc47b7-efdc-4adb-a627-d6f73bc1fd00',
            text: '22 June',
        },
        {
            id: '45d7ab7d-7299-48f6-93de-6ffb21e0fec1',
            text: 'Need help?',
        },
        {
            id: '8c50aa4a-6585-4e98-8963-6ca8b676b5ff',
            text: 'Get in touch with us',
        },
    ],
    asstBusinessManager: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '13768165-1eff-4efe-bb86-4820cd7fa2d9',
            text: 'Asst. Business Managers / Executives',
        },
        {
            id: 'f613cf81-6439-40e3-a94d-f51d39057d66',
            text: 'Targeting prospective clients: Your main area of focus will be to generate new leads, pitching to Africa, Latin America and CIS-based clients through calling and email campaigns for business and financial research services',
        },
        {
            id: '2a18eec7-bd39-4981-a1a6-d2b457d6e9d3',
            text: 'Generating new business: business Business Development involves scheduling personal meetings during B2B meetings. Traveling to specific countries for business',
        },
        {
            id: '6ae427e5-b600-4d34-bb11-a7374a522014',
            text: 'Managing business relationships: maintaining customer relationships and ensuring customer loyalty through excellent customer service, as well as meeting all client needs appropriate to their business',
        },
        {
            id: '4777a692-7dd6-48f4-a5ca-a817df90b5ed',
            text: 'Communication Skills: Strong communication skills, both verbal and written, e-mail etiquette and the ability to build effective internal and external client relationships',
        },
        {
            id: '8923c115-48b6-4832-b3af-88fcc8d20ce4',
            text: 'Follow-up with prospects and maintaining sales pipeline',
        },
        {
            id: 'd1105a22-07ef-4809-8226-17a13debc7df',
            text: 'Sourcing leads and networking with international and global professionals',
        },
        {
            id: '6a272ca1-3b0f-4637-8731-f15c62fb390a',
            text: 'Maintain an up-to-date database of all prospects',
        },
        {
            id: 'fdfa7660-e483-49e8-9500-49332b26948b',
            text: 'Gather, identify, and monitor trends to retain a good understanding of clients needs and how we can address them.',
        },
        {
            id: 'a7ce54f1-2bb1-40dc-a919-8b57328a1f80',
            text: '3+ years of international sales of pharmaceuticals, medical devices, and disposables is preferred.',
        },
        {
            id: '6b936e15-ab41-4674-b594-feffeaed5485',
            text: 'Good understanding of how to sell to an international client base',
        },
        {
            id: '300a5bc4-0b11-4079-8cfa-bdcadefb7253',
            text: 'Well-developed outbound and cold calling skills with proven track record for building potential clients with confidence are key for a successful Business developer',
        },
        {
            id: '7795bf1b-419c-492c-a85f-090a6da377d0',
            text: 'Good at working under pressure and meeting deadlines',
        },
        {
            id: '7b9f9698-0de8-4a4f-ae33-2c14a7a53e15',
            text: 'Exposure to International market: Should have travelled to Africa, Latin America or the CIS',
        },
        {
            id: '431ca5a4-ab42-4442-99b3-9a71be65f05f',
            text: 'Highly motivated to exceed targets and always demonstrating high levels of flair, creativity and confidence',
        },
        {
            id: 'ee6eb79b-991e-4158-968d-a6d539d45418',
            text: '2-3 Years Experience  ',
        },
        {
            id: '1335d1a7-7483-4350-9063-c5610bad8aa6',
            text: 'Tantpur, Agra',
        },
        {
            id: 'd165039e-6551-40ce-882a-003bd7256012',
            text: 'Posted : 04 Dec 2023, 03:30 PM |  Opening : 03',
        },
        {
            id: '82d4a7a5-1165-4dda-8ce4-b0a81be2f2b5',
            text: 'Apply Now',
        },
        {
            id: 'dfa702fb-97f1-4962-a2eb-bf87112878de',
            text: 'Job Description',
        },
        {
            id: '8d48e71f-d9b2-4e71-b09d-8b5f7c2cb270',
            text: 'International role and responsibilities',
        },
        {
            id: '727aa759-3aa6-449d-b176-0552887ea2b9',
            text: 'Requirements',
        },
        {
            id: '05a85ae6-867c-433f-9307-f078cc2d1413',
            text: 'Department',
        },
        {
            id: 'fd649b2e-88b4-4f35-9c23-b4a9704bd43e',
            text: 'Sales & Business Development',
        },
        {
            id: '479fdbe6-1b71-4ddf-be46-d1eba469cdcf',
            text: 'Perks',
        },
        {
            id: 'ceb4d07d-67a9-4e17-a34d-42b5635ad3af',
            text: '5 Days a week',
        },
        {
            id: 'a9a4c7a7-cc46-4e8a-828d-a071fa770feb',
            text: 'Free snacks & beverages',
        },
        {
            id: 'a1a59453-80ce-4f25-be0e-62fb6fe2f8ae',
            text: '+ Add another employment',
        },
        {
            id: 'f79da4c5-810d-4d34-9636-08035e692387',
            text: 'Apply For This Job',
        },
        {
            id: '7e4b8d1d-0794-46dd-8ffc-92472eff0d1c',
            text: 'Discover Our Blogs',
        },
        {
            id: '1249eeea-884e-420d-8f7f-ea08e5c57ebc',
            text: '',
        },
        {
            id: '0be2d531-543f-423f-9bd9-be1955edd996',
            text: 'How It Works',
        },
        {
            id: 'c9e213e8-d1bc-4c27-8ab2-2c62b47aab0a',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '73cf8810-6871-4e14-9270-e73fa0b0bf69',
            text: '22 June',
        },
        {
            id: '99dd57aa-fba6-4a83-ba2e-f401d8b5fe9f',
            text: '',
        },
        {
            id: 'cbe6c3b2-0d77-40a7-abf8-8b283c6895f9',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'debfa3a0-e504-447c-bd80-c04fcb7620a9',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '8b657fbc-981d-435e-8bed-6485c416082f',
            text: '22 June',
        },
        {
            id: 'fd411011-8af5-44e7-8384-60eb3a4877ed',
            text: '',
        },
        {
            id: 'dd113f2b-167b-4c7c-86b5-d4d54d894076',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'a9b49b06-41c9-4d5d-a148-058ea26cd53c',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'b34b6a9a-a748-4934-a936-17e8db84efed',
            text: '22 June',
        },
        {
            id: '53d84a4e-35da-42c3-96cc-68d853893611',
            text: '',
        },
        {
            id: '6ad6cb66-bf18-493b-9466-f9c5bc373efc',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '08ad9b9a-3c2e-4782-a2bb-6e77beb64945',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '7f73491d-0e4f-4912-8f04-a1fbd1f995cb',
            text: '22 June',
        },
        {
            id: '9aa75b3b-59ea-4962-8987-d73cf493df25',
            text: '',
        },
        {
            id: '64c6d076-0e95-483e-bde1-33732f24818f',
            text: 'Refinancing Options',
        },
        {
            id: '416e2682-11db-493a-a4eb-a64ce984aff0',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '84b2abac-4cd2-4964-8b10-2a126f82363a',
            text: '22 June',
        },
        {
            id: '90b48e87-9e12-4ebf-b4ba-2be6ca1ebb38',
            text: '',
        },
        {
            id: '1e3f7773-31af-489d-8dc9-95f4405e11da',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '2cbd10af-beea-43f7-85ff-612b7c6411e4',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'd834ab92-3067-4661-862f-7b34a4846d17',
            text: '22 June',
        },
    ],
    faqs: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '3ea314bc-a89d-461c-b547-41b1f8911347',
            text: 'How Can We Help You ',
        },
        {
            id: '7a1c8fff-1b3a-4537-86f7-fc7920aa2aba',
            text: 'Search For Answers',
        },
        {
            id: '990a38ae-08fc-4a10-9f76-c50699e77add',
            text: 'Home Loan',
        },
        {
            id: '0eadb652-63f7-4224-9aa5-8ea093c48ec7',
            text: 'LAP',
        },
        {
            id: '432bc85c-5685-4856-aede-3fbb832a660d',
            text: 'When can I apply for a home loan?',
        },
        {
            id: 'b330d0e7-f646-4379-a562-f7ba1d6a8bd2',
            text: 'Answer',
        },
        {
            id: '72798d51-d48c-402c-a054-fa6d62bfba10',
            text: 'What are the loans tenure options?',
        },
        {
            id: 'b229db46-4b4a-433a-97d6-9ceb97b2a543',
            text: 'Answer',
        },
        {
            id: '2209702e-047a-4326-aa54-3b0d60062ff7',
            text: 'How is the interest charged/calculate?',
        },
        {
            id: '6d0f60db-6cea-409b-a72e-3fb6e1e20ceb',
            text: 'Answer',
        },
        {
            id: '44ae5ee5-d21e-4621-b5e1-c4fe9244053f',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: 'f03347e7-2aab-494e-a602-85e63d8ef659',
            text: 'Answer',
        },
        {
            id: '36d9fd2c-0fcd-4f1c-8fb3-354aef61e477',
            text: 'What security/collateral do I need to provide ?',
        },
        {
            id: 'd9066b2a-e889-4c4a-abae-55f0f3328612',
            text: 'Answer',
        },
        {
            id: 'cf1c9d0c-5504-4f67-918f-2e98899caee9',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: 'cafe871e-49ab-4991-b3ef-05665f97f165',
            text: 'Answer',
        },
        {
            id: 'b6c859bb-2e38-4eee-8374-678752903eb2',
            text: 'What is monthly reducing balance?',
        },
        {
            id: 'f3faf11b-a112-46cc-b02a-1c6b60f9e616',
            text: 'Answer',
        },
        {
            id: '632c285c-de97-40e7-9a95-a89f998194e0',
            text: 'What kind of tax benefits can I get on a home loan?',
        },
        {
            id: 'bad02fc4-f802-49d0-b4d9-8c8b1cb03e9d',
            text: 'Answer',
        },
        {
            id: '4820c5e1-21c1-45cb-b9a6-d784cfcb5f13',
            text: 'When can I apply for a home loan?',
        },
        {
            id: 'e287dd77-71a8-494f-b6fb-96e5bf20a55b',
            text: 'Answer',
        },
        {
            id: '0d48c267-e3c7-437a-8005-fb2e460ee32b',
            text: 'What are the loans tenure options?',
        },
        {
            id: '1c96dce4-9b8b-40de-9b8a-88cf64cf6d8a',
            text: 'Answer',
        },
        {
            id: '50e094f3-bac6-4c87-bd1a-984bae70d8a7',
            text: 'How is the interest charged/calculate?',
        },
        {
            id: '0714c6bb-2101-4eee-a250-16258ace6f91',
            text: 'Answer',
        },
        {
            id: '9f2fcd13-d46a-44c2-9738-37f92c665057',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: '71f6e94c-971b-454c-b6cf-9d3b430fe147',
            text: 'Answer',
        },
        {
            id: '53fff47f-f46a-40c0-a1bd-a60db006a192',
            text: 'What security/collateral do I need to provide ?',
        },
        {
            id: '60b76abc-0cc4-4bcd-a7ca-9a66499e821a',
            text: 'Answer',
        },
        {
            id: '9f774430-c95d-4503-94cc-2f9d706a677d',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: 'd79d2ceb-af99-4a08-a066-d55a6c34bc9c',
            text: 'Answer',
        },
        {
            id: '16edf219-75fa-4e7e-b7fa-405889e3be83',
            text: 'What is monthly reducing balance?',
        },
        {
            id: '6136675c-4644-4eff-99e0-2a88537e0ce4',
            text: 'Answer',
        },
        {
            id: '59d602db-ef9a-4230-b1cf-b7b504e0358a',
            text: 'What kind of tax benefits can I get on a home loan?',
        },
        {
            id: '7a727381-15b7-48fa-95f2-be6e8cf47242',
            text: 'Answer',
        },
        {
            id: '4defc98a-aea1-4c9b-8fa2-60376f6dfe52',
            text: 'What security/collateral do I need to provide ?',
        },
        {
            id: 'ef08fd73-7f9a-4635-ae0e-905827769bb1',
            text: 'Answer',
        },
        {
            id: '4e90ce58-f6cc-4e30-88ea-86f266c7ced5',
            text: 'What security/collateral do I need to provide ?',
        },
        {
            id: '4b6d215b-6547-44d4-86b0-dbbe3ee2c346',
            text: 'Answer',
        },
        {
            id: '1a882ef4-717f-45ff-a70a-d5dcb336cfd7',
            text: 'Discover Our Blogs',
        },
        {
            id: '08ea3531-ab97-48e6-8fe5-144487dfc2d6',
            text: '',
        },
        {
            id: 'e9e6a7d1-fb13-4c7c-9d62-7fbd053c7dbf',
            text: 'How It Works',
        },
        {
            id: '10bf6f4e-ba40-4c54-abcf-608ec50e5269',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'a612db83-a9a0-4449-a86a-3ca5c9b3ec0c',
            text: '22 June',
        },
        {
            id: 'f6173d79-5d8c-470c-abb6-68eb8addd764',
            text: '',
        },
        {
            id: '4c0e6cc4-c823-4008-9351-3d27e078a7f9',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '42bd8880-2ded-4858-b9f6-88152b7cba55',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'c14925a2-1dc6-40a3-abbe-534b376b2431',
            text: '22 June',
        },
        {
            id: '795b76df-296b-47a1-bafd-53a208e49ab3',
            text: '',
        },
        {
            id: '1364e634-5c7e-4b2d-a661-1228b713ca16',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '41848fe5-4397-4354-b07a-789a15186c72',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'cf587531-346a-4f6b-ac93-8433ebe1de42',
            text: '22 June',
        },
        {
            id: 'f0e842a6-2445-438b-ba5b-64dfb0f8292b',
            text: '',
        },
        {
            id: 'c78dc151-91d9-4556-a5b4-a1b29df924ae',
            text: 'Refinancing Options',
        },
        {
            id: 'e9a1c172-3c39-4e06-8f0d-0ea7e29d1947',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '7397b5e6-a320-4c5c-a9ff-0497de167ae9',
            text: '22 June',
        },
        {
            id: 'ee6896e4-fc1b-4528-b478-a99d3f19799e',
            text: '',
        },
        {
            id: '47030041-3ca2-4acf-bd47-8d274b0d2ae2',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '0bc03467-9604-438f-832d-3938bb31bb7a',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '8b968fc0-d801-4aef-9918-adc2a7296b7b',
            text: '22 June',
        },
        {
            id: '4f6a903c-a102-45da-8734-a8b9ed683d7e',
            text: '',
        },
        {
            id: '832775b1-c4af-4772-9148-a6de2a482cf6',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '173e07d7-a0c7-47f3-9657-257b44c2cbc4',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'e2d12e97-1fcd-4c96-a1f5-36f11ba2d057',
            text: '22 June',
        },
    ],
    blogs: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '2efde01e-36d3-4708-8689-bb2f97f35b3e',
            text: 'Empowering <span class="tw-text-secondary-200">Homeownership</span> Journeys',
        },
        {
            id: 'd77b6658-6b50-4e9a-8035-b89d5cedb6de',
            text: 'Our Blogs',
        },
        {
            id: '67fb9d4b-1196-477c-8eab-5366168ab3aa',
            text: '',
        },
        {
            id: 'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
            text: 'How It Works',
        },
        {
            id: 'ae804274-72a1-4e44-a55d-abfa678f320f',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'de7d28b3-af7b-4252-8ee4-40e358f74d50',
            text: '22 June',
        },
        {
            id: '786843f5-649d-44f5-ab2d-1ed1780195c7',
            text: '',
        },
        {
            id: 'a6925e92-1723-424d-92b9-c2cfb9b338b5',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'fcf1a218-3134-455d-9008-d186a1c3858b',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '4c486475-8a3e-43d3-b173-93902c9937d5',
            text: '22 June',
        },
        {
            id: 'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
            text: '',
        },
        {
            id: '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
            text: 'Refinancing Options',
        },
        {
            id: '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '84725682-15f4-4546-a455-b0228e6a2e85',
            text: '22 June',
        },
        {
            id: '6919d180-a1dc-4dac-aa25-4708a1e2721d',
            text: '',
        },
        {
            id: '7a22eaac-62ef-42cf-a520-d44b67899b99',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '2baa9d81-e28e-45a1-abba-5f3451259865',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
            text: '22 June',
        },
        {
            id: '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
            text: '',
        },
        {
            id: 'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
            text: 'Refinancing Options',
        },
        {
            id: '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'acccd091-f163-4987-bbea-a9fc21b7816e',
            text: '22 June',
        },
        {
            id: '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
            text: '',
        },
        {
            id: '4514d332-6488-43d2-92b2-fa8c24404a79',
            text: 'Refinancing Options',
        },
        {
            id: '9d50211e-4dc2-4dda-943d-32678c689a52',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'c473021f-4608-42a6-891d-e61284b7ae9b',
            text: '22 June',
        },
        {
            id: '2869b158-6e7d-4ef2-8728-0752b6a886ec',
            text: 'All',
        },
        {
            id: '84e39293-bcf9-4443-bff0-594407e8cb97',
            text: 'Home Loan Guide',
        },
        {
            id: '51c79d41-e80a-435a-967d-4da133ee97e5',
            text: 'Home Renovation Loan Guide',
        },
        {
            id: '08a0fcae-f3dc-43fd-a1f6-df5c94f6df5c',
            text: 'Home Loan Transfer Guide',
        },
        {
            id: '63662965-2045-46f3-a5fe-d8627357809c',
            text: 'Home Extension Loan Guide',
        },
        {
            id: '1b61fa96-8d54-4974-bb7f-a2e0a6e07f0a',
            text: 'Loan Against Property Guide',
        },
        {
            id: 'f6432b8c-19ee-40e4-905f-8d5141d16279',
            text: 'Home Loan Interest Rates Guide',
        },
        {
            id: '4b98ca86-7fb3-48fe-b366-83e0c7188d90',
            text: 'Home Decor & Lifestyle Guide',
        },
        {
            id: '3ff20d0e-c627-44d7-ac47-b7257ec8b62d',
            text: 'Plot Loan Guide',
        },
        {
            id: 'eb305939-a3e6-4055-a821-f44a1c60205a',
            text: 'PMAY Guide',
        },
        {
            id: 'd6ab4dc9-b1c9-4e32-b333-3432a37c47e9',
            text: 'NRI Home Loans Guide',
        },
        {
            id: '3f70e455-235c-4185-ba2a-6995fbf52372',
            text: 'Financial Resolutions Guide',
        },
        {
            id: 'b1b52b98-c0f8-4c71-94fc-b335a36dd310',
            text: 'New Year Resolutions Guide',
        },
        {
            id: '5939fea4-9530-4947-afb3-b27a1050c74d',
            text: 'Other Guide',
        },
        {
            id: 'd3787777-ffe8-471d-b3df-8dd7cc63f61c',
            text: 'View More Articles',
        },
        {
            id: '7a7f9c9e-1bef-4f5e-824e-e1936536acbc',
            text: 'Show Less Articles',
        },
        {
            id: '85888505-1d1f-49c8-9062-d7962bafbb7e',
            text: 'Loan humara, <span class="tw-text-primary-500">Sammaan</span> Aapka',
        },
        {
            id: '04d8bbe2-e854-4e0d-90ee-8e1792c64d1c',
            text: 'Apply Now',
        },
    ],
    investorMediaRelations: [
        ...footerStrings,
        ...headerStrings,
        {
            id: 'ade5e1c6-523e-429c-916b-72ad9a499a43',
            text: 'Investor & Media Relations',
        },
        {
            id: '462428c4-e456-4c2a-a856-5a56f3a18bf0',
            text: '#',
        },
        {
            id: '7abca889-5bee-407d-a716-99f0c664fd5f',
            text: 'Investor Queries',
        },
        {
            id: 'ac39f713-73c9-40de-8639-e0032c19ec17',
            text: 'Indiabulls Housing Finance Ltd., 18th floor One International Centre, Indiabulls Finance Centre, Senapati Bapat Marg, Elphinstone Road, Mumbai - 400013.',
        },
        {
            id: 'd096e2be-a098-4bf4-bf74-673ad18f0e02',
            text: '022-61891444',
        },
        {
            id: '5b08d2f4-ded5-4752-b8d0-2fab4c416ae7',
            text: 'investor.relations@indiabulls.com',
        },
        {
            id: '13bbb4e6-03e9-4c7e-aec4-367fcb3b24a7',
            text: 'Media Queries',
        },
        {
            id: 'e16dfc84-c112-43c3-bf44-06a3d55dab80',
            text: 'Indiabulls Housing Finance Ltd., Building Number 422b,Concept Tech Park,Udyog Vihar phase 4 Gurugram – 122016 Haryana',
        },
        {
            id: '8d2d87b6-6210-426d-8e92-bc3ef6e16d5c',
            text: '0124-6681495',
        },
        {
            id: 'a145d2c7-5747-4489-b83d-97c8aca83375',
            text: 'mediaquery@indiabulls.com',
        },
    ],
    documentsHomeLoan: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'e02528db-ae3e-4a7c-ac60-9cb8b5fe94e6',
            text: 'Home',
        },
        {
            id: '5ce21176-38fc-41d5-af4b-d598db9e7c2e',
            text: '/',
        },
        {
            id: 'b3c0cb30-691f-44a1-b600-022aaa10f5e3',
            text: 'Home Loan',
        },
        {
            id: 'ceb96620-5435-4dae-96db-f7cd0aff904b',
            text: '#',
        },
        {
            id: 'f701a672-8250-4fe1-86bb-743997d85a89',
            text: 'Required Documents',
        },
        {
            id: 'bf97b18e-fa44-49a6-a994-a20e5dbfd8ec',
            text: '#',
        },
        {
            id: '144f6d56-3ad1-4e44-8c3e-5489acc111d4',
            text: 'Documents required for Home Loan',
        },
        {
            id: '106e77c6-3a4f-4b0b-aa55-f611f437aab5',
            text: 'Home Loan',
        },
        {
            id: '350d0c69-d2d9-4ec1-9cfd-f98572fbb002',
            text: 'Loan Against Property',
        },
        {
            id: '786fd2c8-bebc-4b3a-8dd2-9774941537a9',
            text: 'Smooth and efficient loan processing is ensured by organizing all necessary documents. Our checklist for home loans and loan against property (LAP) simplifies the process, allowing quick evaluation and a hassle-free loan experience.',
        },
        {
            id: '9ab5cbb6-459a-4933-ac05-c34f3a9929bd',
            text: 'For a seamless home buying experience, gather all necessary documents to expedite the home loan process for a quick and efficient approval.',
        },
        {
            id: '181927fb-b9a5-4f94-a524-6fc1e28d7b61',
            text: 'Document',
        },
        {
            id: 'b88468e2-7018-41f2-a8b3-a6b27eff351c',
            text: 'Application form duly signed',
        },
        {
            id: 'f2bb9f47-72ba-4500-80d8-c53e0929ffaf',
            text: 'Processing fee cheque',
        },
        {
            id: '527e1d91-605f-4e10-a6cb-35cc8b6dab47',
            text: 'Property documents',
        },
        {
            id: '9c370b6b-c810-4911-a719-54bb66c44e00',
            text: 'Know your customer documents',
        },
        {
            id: '35a4552a-9944-42f0-ae0f-a91742b208a5',
            text: 'Income documents',
        },
        {
            id: '18b2d7f0-1c3c-4079-a17c-052737f5d0e5',
            text: 'Description',
        },
        {
            id: 'e137ca9a-1a3e-4d8b-92ec-2a0cab2423c6',
            text: 'Fill the application form with correct, complete and up-to-date information with photograph, duly signed by all applicants',
        },
        {
            id: 'f1dde408-a6dc-4f0f-b3aa-77604d090910',
            text: 'Consolidated amount paid finally at the time of disbursal of the loan amount',
        },
        {
            id: 'b4ef52a2-b2cc-4e87-bd8a-559857f72973',
            text: 'Sale agreement or deed of sale, Letter of allotment, NOC from builder/Society etc.',
        },
        {
            id: '7b9383a4-3fba-49d7-9675-4ae2db0881b4',
            text: 'Proof of name, date of birth, address, signature and identity',
        },
        {
            id: '87c06633-f168-43a0-92fa-85f1f6b3b004',
            text: 'If salaried: salary slips, Form 16 and bank statement. If self-employed: income-tax returns with financial statements, bank statement',
        },
        {
            id: 'd9a521f5-84ce-4353-ba6f-d0b954da0a0c',
            text: 'Download Form',
        },
        {
            id: '39440a9a-de4a-4836-965a-bcfaf432a554',
            text: 'Smooth and efficient loan processing is ensured by organizing all necessary documents. Our checklist for home loans and loan against property (LAP) simplifies the process, allowing quick evaluation and a hassle-free loan experience.',
        },
        {
            id: 'af8fcbf6-dbfb-4f29-ab8c-9b57041a9441',
            text: 'For a seamless home buying experience, gather all necessary documents to expedite the home loan process for a quick and efficient approval.',
        },
        {
            id: '90989ed1-54a0-4958-9fbf-93d8409063b3',
            text: 'Apply for Home Loan',
        },
    ],
    documentsLoanAgainstProperty: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'b5c21d10-c1e6-4459-900e-643bfefc3d94',
            text: 'Home',
        },
        {
            id: '6ae5f8df-6984-4ede-8b66-183fb9262c48',
            text: '/',
        },
        {
            id: '90cd2718-d119-4849-abf7-fdb0ac7d4870',
            text: 'Loan Against Property ',
        },
        {
            id: '9cac8431-b3e6-4179-80a9-b8fab5b38adf',
            text: '#',
        },
        {
            id: 'a7396bde-5406-431a-9530-0a2d28e77a4e',
            text: ' Required Documents',
        },
        {
            id: '8e073071-02d1-473a-8e05-52e034578f71',
            text: '#',
        },
        {
            id: '1917fd2b-69f7-4e6e-886f-45d028b73594',
            text: 'Home Loan',
        },
        {
            id: 'c39e721b-bd49-4456-bd3d-279fe9483692',
            text: 'Loan Against Property',
        },
        {
            id: '058d64ff-4035-4932-9c4d-04e979aee566',
            text: 'Document',
        },
        {
            id: '3d3b0edf-e829-491d-9f0d-76d1e230aa5a',
            text: 'Description',
        },
        {
            id: '13828043-8614-4416-a44f-c2ef112996c9',
            text: 'Application form duly signed',
        },
        {
            id: '80eeabbb-31d2-4c92-bf3c-d22020922455',
            text: 'Fill the application form with correct, complete and up-to-date information with photograph, duly signed by all applicants',
        },
        {
            id: '68196d55-d5f6-4ef8-8bcb-dc2da4068658',
            text: 'Processing fee cheque',
        },
        {
            id: '0e59c28a-ca29-4609-9333-7a2704936452',
            text: 'Consolidated amount paid finally at the time of disbursal of the loan amount',
        },
        {
            id: '492b9d70-da00-407b-8b32-9d2bf8840278',
            text: 'Property documents',
        },
        {
            id: 'ecc9a5d4-3a59-49e0-92d8-e22c056c9bfb',
            text: 'Sale agreement or deed of sale, Letter of allotment, NOC from builder/Society etc.',
        },
        {
            id: '89fdaa96-79b1-48f4-a692-1d7393888129',
            text: 'Know your customer documents',
        },
        {
            id: 'd7335af8-6d9a-46e8-a895-7a0dd9a5cfd6',
            text: 'Proof of name, date of birth, address, signature and identity',
        },
        {
            id: 'c6193e86-2ace-4d52-9eab-193caf8fef48',
            text: 'Residence ownership proof',
        },
        {
            id: 'fe224d92-21df-4281-8dfd-4189bfae9b9c',
            text: 'Property documents, maintenance bill, electricity bill',
        },
        {
            id: 'eba34cb2-9ff5-4bf8-a75e-114504bd4b47',
            text: 'Income documents',
        },
        {
            id: 'eb8400c9-94f0-44f8-9c79-aac38a33fcd8',
            text: 'If salaried: salary slips, Form 16 and bank statement. If self-employed: income-tax returns with financial statements, bank statement',
        },
        {
            id: 'dacf40a5-0767-4d53-8039-be5ab47074c8',
            text: 'Documents required for Loan against Property',
        },
        {
            id: '213cf6d7-8cdf-42ef-aa9b-fa3e4fbb3ba7',
            text: 'Sammaan Capital offers Loan Against Property (LAP) to provide financial support for your business ventures. By leveraging the value of your property, the loan ensures a stable business environment, allowing you to focus entirely on your enterprise.',
        },
        {
            id: '2b681e3b-c683-469e-96f1-f85938719365',
            text: "Sammaan Capital’s Loan Against Property (LAP) offers maximum finance against your property's market value at competitive interest rates. With doorstep service, uninterrupted property occupancy, and the flexibility to use LAP for personal expenses, it provides convenient and efficient financial support for business growth.",
        },
        {
            id: 'd503f72d-1e56-4cea-9d64-473407057910',
            text: 'Download Form',
        },
        {
            id: '6d80c1c2-8eaf-4a98-b84c-a63a30744fdf',
            text: 'Apply for Loan Against Property',
        },
    ],
    homeLoanInterestRate: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '888a5093-f9ce-45fe-9960-78a06e6bb984',
            text: `Home Loan at <br /> <span class="tw-text-primary-500">Affordable Rates</span>`,
        },
        {
            id: 'bcac5576-eac4-436c-8322-3ac7fc978013',
            text: 'Apply Now',
        },
        {
            id: '4db18ea6-c925-4261-b25c-5239fbfab2f5',
            text: 'Home',
        },
        {
            id: '26e16751-d522-4a30-93ef-5f68ed3bd527',
            text: '/',
        },
        {
            id: 'c4306e15-129c-4a80-8f7f-3ba183fc6cb4',
            text: 'Home Loan',
        },
        {
            id: '71366d57-152c-4e33-a756-8216f877e47d',
            text: '#',
        },
        {
            id: '1866acf7-368c-40e4-99df-0ef5bcd2a291',
            text: 'Home Loan Interest Rate',
        },
        {
            id: 'e5c71d71-98b4-4a16-bb9e-097977150c32',
            text: '#',
        },
        {
            id: '29a9228d-3d9e-459c-ad2b-432d94ac47bb',
            text: 'Interest Rate',
        },
        {
            id: 'c764ccc5-cf20-47da-8220-9ffc20f14779',
            text: 'Home Loan',
        },
        {
            id: '43d47da9-04ec-4892-9217-96cf5c1b6213',
            text: 'Loan Against Property',
        },
        {
            id: '942a7a59-23ef-4f24-a373-6c41dda0b2d0',
            text: 'Sammaan Capital Home Loans provides competitive and transparent interest rates, ensuring affordability for your dream home without a significant impact on your monthly financials. Rates are tailored based on factors like profile, tenure, loan amount, and property type.',
        },
        {
            id: '21b49233-b428-4513-bb57-a63728b41446',
            text: 'Home Loan ranging from',
        },
        {
            id: 'a2bcdb63-9a8a-49c0-9aaf-367a02b0155c',
            text: '8.75%* onwards',
        },
        {
            id: '33f1a23d-5d3a-462a-ad87-2afc104e14c8',
            text: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , property type and other risk parameters.',
        },
        {
            id: '366c9ab9-aebe-457e-8be1-da6fe80d609c',
            text: '# This includes the Rates being offered under the Co-origination arrangement in association with Banks.',
        },
        {
            id: '7326189d-1aee-4cf3-9d31-466ea9b0e3a3',
            text: 'Types of Interest Rates',
        },
        {
            id: '562201a2-98fd-4069-9400-dcfaddad0223',
            text: 'Fixed Interest Rate',
        },
        {
            id: '2fcda56a-41a4-41e7-8a1d-bd5c5529271c',
            text: 'Remain constant for the entire loan tenure',
        },
        {
            id: '7c3ea4d1-722f-4109-a29e-42a257db7ae0',
            text: 'Benefits',
        },
        {
            id: 'cceb5935-8069-470d-9b6b-0f0e4bf1cde2',
            text: 'Predictable payments, unaffected by market changes.',
        },
        {
            id: '9c878331-b6ae-431d-ac98-bebaccde2fed',
            text: 'Helps borrowers budget effectively.',
        },
        {
            id: '04b1eb88-7bf8-4ca1-8830-94db4a853948',
            text: 'Setbacks',
        },
        {
            id: '84d6017a-3a65-4676-96dc-67b2bae76a2d',
            text: 'No advantage when market rates drop.',
        },
        {
            id: 'a70c77ef-6a6d-46e8-860c-7023eb1ed2bb',
            text: 'Typically higher than floating rates by 1-2.5%.',
        },
        {
            id: '53b8b993-80c1-445a-b107-1f01f4d543d6',
            text: 'Floating Interest Rate',
        },
        {
            id: 'd91c62f4-e3b3-42c8-af99-69f2e333a3fe',
            text: 'Follow market rates, causing EMI changes.',
        },
        {
            id: 'dcbb596b-1a80-4437-bed5-3f2cb55c2dac',
            text: 'Benefits',
        },
        {
            id: 'c0e87687-9d6a-4d8b-b606-e8a88faf6108',
            text: '1% to 2.5% lower than fixed rates, leading to EMI savings.',
        },
        {
            id: '591aa5e3-ed0c-4be7-8427-eb7e63c0c1a7',
            text: 'Gains possible if market rates drop below the base rate.',
        },
        {
            id: '29430ef5-4275-4ca7-8086-324af6231f1d',
            text: 'Setbacks',
        },
        {
            id: '0cad48e5-2da6-4cf3-859c-fa8a3ad88eb7',
            text: 'Risk of increased rates if market rates rise.',
        },
        {
            id: '151568ac-eddf-4c52-a185-4eda5d011151',
            text: 'Monthly payments may become challenging.',
        },
        {
            id: 'a8e95bb2-e18e-48cd-b243-5141156cffcc',
            text: 'Difficulty in budgeting due to interest rate unpredictability.',
        },
        {
            id: 'd555a872-ab28-4959-b596-58be8438b5d3',
            text: 'How are home loan interest rates determined?',
        },
        {
            id: '8659afd9-831f-4a34-92bc-2d02558f1432',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.',
        },
        {
            id: 'd38335dc-4a17-4023-82aa-82c3801e232b',
            text: 'Why is the rate of interest on loans important?',
        },
        {
            id: 'af69181b-9001-450b-89bc-a8383b436a2f',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.',
        },
        {
            id: 'c9c6d43b-d4b4-44c2-b854-a780f773dda1',
            text: 'What is the difference between fixed and floating interest rate?',
        },
        {
            id: '07464e6a-0f7e-4685-972a-0097054d877b',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions.',
        },
    ],
    loanAgainstPropertyInerestRate: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'a46cb332-c3e6-4b7b-9b37-0c7188cf85df',
            text: `Loan against Property at <br /><span class="tw-text-primary-500">Affordable Rates</span>`,
        },
        {
            id: 'a1aba6ae-88f1-45a2-9441-3c69ee3107db',
            text: 'Apply Now',
        },
        {
            id: '62235393-cef8-4df9-ad7d-5920b5e79557',
            text: 'Home',
        },
        {
            id: 'b81be5f9-7156-41b3-a000-37f4ede56ddb',
            text: '/',
        },
        {
            id: '2113c26c-2a43-4cbd-b0e7-189298bf8086',
            text: 'Loan Against Property',
        },
        {
            id: 'e69faed3-ab15-4f5d-8cc4-980a97a659c3',
            text: '#',
        },
        {
            id: '210b3d7f-c131-468d-942a-68b59ddb173f',
            text: ' Interest Rate',
        },
        {
            id: '683d30a8-0667-457f-ad9f-68d5907c411f',
            text: '#',
        },
        {
            id: '01ab2a7e-b471-494f-bd89-1c4e734bebc0',
            text: 'Home Loan',
        },
        {
            id: '55131612-91b7-4f2a-888a-3ac80b3a4f86',
            text: 'Loan Against Property',
        },
        {
            id: '51060446-1dcd-4a07-b00f-19ba4dbbffa3',
            text: 'Interest Rate',
        },
        {
            id: '8e3354a8-bf1d-41f7-872d-316c031c6b1f',
            text: 'Sammaan Capital offers customers competitive interest rates that will make it easier to own a home of choice. We understand that interest rates have a big influence on your repayments – lower interest rates translate into lower EMIs. That’s why, we offer attractive interest rates across tenures, helping you afford your dream home without a major impact on your monthly financials. Our rates and charges are transparent and depend on a variety of factors including your profile, tenure, loan amount and property type.',
        },
        {
            id: '73106e16-f566-4ab4-b099-88016457c8ed',
            text: 'Loan against Property interest rate ranging from',
        },
        {
            id: '7161e519-86d7-4284-92b0-adfe981d6732',
            text: '10.45%* onwards',
        },
        {
            id: 'c3048c71-41eb-4d6f-abbd-56ac48f407b3',
            text: '* MSME’s being eligible under Priority Sector Lending',
        },
        {
            id: 'b43caaf6-288c-408a-bd7b-833aff7f0dea',
            text: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , underlying security and other risk parameters.',
        },
        {
            id: '233549e2-f4a5-4ee6-81fc-38d7d0625848',
            text: 'Types of Interest Rates',
        },
        {
            id: '2736292c-b7dc-4082-85b3-519ed637ab01',
            text: 'Fixed Interest Rate',
        },
        {
            id: '6863c8d3-00ad-4931-865c-599035b1ea46',
            text: 'Remain constant for the entire loan tenure',
        },
        {
            id: '7ef17be4-c01e-47b2-bcde-2de3814ddf68',
            text: 'Benefits',
        },
        {
            id: 'f2ea0215-104a-4abf-8ac9-4dc4dffa1c35',
            text: 'Predictable payments, unaffected by market changes.',
        },
        {
            id: '60333ea5-a2bf-4831-9176-153474838256',
            text: 'Helps borrowers budget effectively.',
        },
        {
            id: '1ee34d94-26ef-4228-86d2-a1aa612b6593',
            text: 'Setbacks',
        },
        {
            id: '1303413a-1c0e-4c94-8857-588d8f4c48f7',
            text: 'No advantage when market rates drop.',
        },
        {
            id: 'baef5fc4-3d57-4c35-83ac-5fa6a2c74bc9',
            text: 'Typically higher than floating rates by 1-2.5%.',
        },
        {
            id: '64c71900-75c4-40c6-9143-831be50dbd7f',
            text: 'Floating Interest Rate',
        },
        {
            id: '84f288d0-3eea-433b-a63a-bba49f4e44bd',
            text: 'Follow market rates, causing EMI changes.',
        },
        {
            id: '0989b9ac-c037-47a7-8340-d5bf85eb2482',
            text: 'Benefits',
        },
        {
            id: '18287158-69da-4a81-aaa8-04a78ec9b77e',
            text: '1% to 2.5% lower than fixed rates, leading to EMI savings.',
        },
        {
            id: '0d6fa7a6-46d3-4da3-abc6-66eb8bafd512',
            text: 'Gains possible if market rates drop below the base rate.',
        },
        {
            id: '7656526a-c1a8-4ec5-b0fd-beb0fff5dd75',
            text: 'Setbacks',
        },
        {
            id: 'ce8b067d-65ff-464b-936e-8dcea3cc67f1',
            text: 'Risk of increased rates if market rates rise.',
        },
        {
            id: '24111b3c-2965-4149-b2ea-f18acada2f43',
            text: 'Monthly payments may become challenging.',
        },
        {
            id: '8bd0a0df-7929-4366-a7bc-655e3fb0943f',
            text: 'Difficulty in budgeting due to interest rate unpredictability.',
        },
        {
            id: '87161405-e2dc-4f4d-b0bb-e54a47bc7e9c',
            text: 'How are home loan interest rates determined?',
        },
        {
            id: 'a8926ab7-80ec-4888-a8b5-626aea12d013',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            id: '870b26c2-0387-487c-a311-e3e4d9cfbd49',
            text: 'Why is the rate of interest on loans important?',
        },
        {
            id: '00f3fe15-3ac3-40a4-99cc-def867de6820',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            id: '9a6e0df4-1f3e-47a3-8e93-6da0ee881af8',
            text: 'What is the difference between fixed and floating interest rate?',
        },
        {
            id: 'ecdb052a-74ed-4338-b6e2-e9adbdb1727f',
            text: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
    ],
    eclgs: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '4188f782-c514-403b-866f-160f46d87652',
            text: 'Home',
        },
        {
            id: '3bf6cb5e-3d15-4265-b01d-e0357edd5003',
            text: '/',
        },
        {
            id: 'ddaef475-8536-4391-ac5a-f4340b22096c',
            text: 'ECLGS',
        },
        {
            id: 'd0f6414c-087d-4718-9624-7dff8bfdef56',
            text: '#',
        },
        {
            id: 'b27952cf-42e5-4fdc-8bc4-ee402f959c23',
            text: 'Emergency Credit Line Guarantee Scheme (ECLGS)',
        },
        {
            id: 'fcb9ed2a-81ed-493e-be9c-16d8c3bd82c9',
            text: 'Pre-approved Top-Up Loan to Business Enterprises and MSMEs',
        },
        {
            id: 'ad8cffa2-fd69-49f0-b761-56797ea00c37',
            text: 'Background and Objective',
        },
        {
            id: '50060663-78ac-4577-ae7d-bdd99eb9d79d',
            text: `The outbreak of Covid-19 pandemic and following event of social and economic lockdown has brought about a nearly complete halt to all the business activities. The operating cycle in many businesses witnessed sudden cessation as the stocks and payment cycles got stuck completely causing liquidity crisis posing a serious threat to the survival of the businesses. <br /><br />In its fight to control further damage and support the revival of the business and the economy, the GOI through Ministry of Finance has introduced the Emergency Credit Line Guarantee Scheme (ECLGS), through which the Government is targeting to facilitate Business Enterprises /MSMEs / Individuals who have availed loan for business purposes through Banks and NBFCs/HFCs to provide additional credit to existing borrowers, thereby enabling these enterprises and MSMEs to meet their operational liabilities and restart their businesses.`,
        },
        {
            id: 'ac17d95a-bb06-4b00-9bf6-124578bfa68e',
            text: 'Eligible Borrowers',
        },
        {
            id: 'deb2e80e-5eb0-4179-936e-7766c600cbc2',
            text: `This policy shall be applicable to all existing borrowers meeting the policy riders as elaborated here under and will have components as ECLGS 1.0, ECLGS 1.0(Extension), ECLGS 2.0, ECLGS 2.0(Extension), ECLGS 3.0, ECLGS 3.0(Extension) and ECLGS 4.0 . <br /><br />ECLGS 1.0 shall be applicable to the borrower accounts pertaining to Business Enterprises /MSMEs / Individuals who have availed loan for business purposes with total credit outstanding (fund based only) across all lending institutions of up to Rs.50 crores as on 29.2.2020.<br /><br />ECLGS 1.0(Extension) refers to the scheme for providing additional support to existing borrowers of ECLGS 1.0 or new borrowers eligible under ECLGS 1.0 based on revised reference date of March 31, 2021 <br /><br />ECLGS 2.0 shall be applicable to the Business Enterprises /MSMEs in the 26 Covid related stressed sectors identified by the Kamath Committee on Resolution Frame-work and the Healthcare sector, who have availed loan for business purposes with total credit outstanding (fund based only) across all lending institutions above Rs.50 crore and upto Rs.500 crore as on 29.02.2020. <br /><br /> ECLGS 2.0(Extension) refers to the scheme for providing additional support to existing borrowers of ECLGS 2.0 or new borrowers eligible under ECLGS 2.0 based on revised reference date of March 31, 2021.<br /><br />ECLGS 3.0 shall be applicable in case of Business Enterprises/MSMEs in the Hospitality and related Sectors - Hotels and restaurants, marriage halls, canteens etc, travel and tourism ,travel agents, tour operators, adventure or heritage facilities, leisure and sporting, private bus operators, car repair services, rent-a-car service providers, event/conference organizers, spa clinics, beauty parlours/saloons, motor vehicle aggregators, cinema halls, swimming pools, entertainment parks, theatres, bars, auditorium, yoga institutes, gymnasiums, other fitness centers, units/person engaged in catering or cooking and Floriculture products, and Civil Aviation Sector- Airlines (including scheduled and non-scheduled airlines, chartered flight operators, air ambulances), airports, aviation ancillary services such as ground handling and supply chain.<br /><br />ECLGS 3.0(Extension) refers to the scheme for providing additional support to existing borrowers of ECLGS 3.0 or new borrowers eligible under ECLGS 3.0 based on revised reference date of March 31, 2021or January 31, 2022.<br /><br />ECLGS 4.0 shall be applicable to the borrowers running Hospitals/nursing homes/clinics/medical colleges and requiring assistance of upto Rs.2 crore for setting up low cost technologies for on site oxygen generation. <br />
            None of the credit facilities availed by the entity from any of the bank or FI should be over 60 days past due as on February 29, 2020 in ECLGS 1.0 , 2.0 & 3.0 and based on the revised reference date of 31st March 2021 in ECLGS 1.0 (Extension) , 2.0(Extension) & the revised reference date of 31st March 2021 or 31 January 2022 in 3.0 (Extension) s.t. being eligible under ECLGS 1.0, , 2.0 & 3.0 respectively and should not be over 90 days past due as on March 31, 2021 in ECLGS 4.0`,
        },
        {
            id: 'cb22826d-5859-4ea1-845e-90a545e54d3c',
            text: 'Key highlights of policy',
        },
        {
            id: 'd736bb39-2446-4230-8d39-12315e7a9e9a',
            text: `- The scheme shall be available for applications getting sanctioned by or before 31.03.2023 or this scheme reaching the threshold stipulated by the Government of India under Emergency Credit Line Guarantee, whichever is earlier. <br /><br />- The last date of disbursement under this scheme shall be June 30; 2023. <br /><br />- Business Enterprises / MSME borrower must be GST registered where such registration is mandatory. <br /><br />- Borrower account should not be over 90 DPD at the time of sanction and disbursement of top up facility under this scheme.<br /><br />- ECLGS 1.0 scheme will have Opt-out option & borrower can choose to opt-out for this facility. However ECLGS 2.0 , ECLGS 3.0 & ECLGS 4.0 shall be on Opt-in basis. <br /><br />- The amount of funding under ECLGS would be up to maximum 20% under ECLGS 1.0 & ECLGS 2.0 and up to 50% subject to a cap of Rs.200 crore per borrower under ECLGS 3.0 of the total outstanding as on 29th February; 2020 subject to the borrower meeting all the eligibility criteria and credit evaluation and assessment as per lending norms of the company. The borrowers, who are eligible under ECLGS 3.0 and who have already availed benefit under ECLGS 1.0 or ECLGS 2.0 can be eligible for additional credit up to 20% of their total credit outstanding as on 29.02.2020. <br /><br />- Under ECLGS 1.0(Extension) and ECLGS 2.0(Extension),the amount of GECL funding to existing ECLGS 1.0 or 2.0 borrowers or new borrowers, either in the form of additional loan facility would be up to 30% of their total credit outstanding (net of support received) as on 29th February, 2020 or 31st March 2021, whichever is higher, subject to the borrower meeting all the eligibility criteria in respective scheme components. Under ECLGS 3.0 (Extension), the amount of GECL funding to eligible borrowers would be. 50% of the total credit outstanding (fund based only) as on 29.02.2020 or 31.03.2021 or 31.01.2022, whichever is higher subject to cap of Rs 200 crore per borrower in borrowers other than aviation sector, and Rs.400 crore per borrower incase of aviation sector.Under ECLGS 4.0, the amount of funding will be limited to Rs.2 crore per borrower for setting up a low cost on-site oxygen generating plant. <br /><br />-   Total door to door tenor for the new loan will be 48 months with 12 months Principal moratorium in ECLGS 1.0, 60 months with 24 months Principal moratorium in ECLGS 1.0 (Extension), 60 months with 12 months principal moratorium in ECLGS 2.0, 72 months with 24 months Principal moratorium in ECLGS 2.0 (Extension), 72 months with principal moratorium of 24 month under ECLGS 3.0 & ECLGS 3.0 (Extension) and 60 months with principal moratorium of 6 month under ECLGS 4.0, from date of first disbursement. Monthly Interest shall be payable during the Moratorium period.<br /><br />- No processing Fee will be charged for these loans. <br /><br />- The interest rate will depend upon various factors, but will not exceed the maximum Rate of interest prescribed in the guidelines for the respective schemes <br /><br />- No prepayments charges shall be levied for these loans in case of prepayment of facilities before termination of tenor. <br /><br />- No additional collateral required and additional funding will be covered by extension of charge on securities already provided. <br /><br />- All other terms and conditions in loan agreement will remain applicable`,
        },
        {
            id: '53705b5b-9f9d-411d-b089-67416db12f86',
            text: 'Disclaimer:',
        },
        {
            id: '4dfe7205-f6d1-45ea-bdbc-baa2adb214a7',
            text: 'This facility is being offered to the eligible borrowers within the scheme guidelines.Borrower will have to apply for loan through appropriate mode and complete the documentation and furnish the requisite information for processing of the loan.The company will review the application submitted by the interested borrowers and appraise the application keeping in view, inter alia, the credit & risk parameters of the borrower and any other related factors and take the decision accordingly.The final decision or loan amount and terms of loan may vary, after due appraisal, diligence and verifications',
        },
        {
            id: 'e78cff3c-7102-44a0-a442-143671d1915b',
            text: 'What are the stages involved while taking loan?',
        },
        {
            id: 'cd13e9d7-fa97-43a6-9367-14c23683ce82',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
        {
            id: '3cd6b8ee-d70c-4574-bd16-252dd044e7a5',
            text: 'Who can apply for a home loan?',
        },
        {
            id: 'd1d43930-bcda-4d7f-9304-699950ef8c54',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
        {
            id: '1eb343a4-56e4-4b5f-a011-bf779b3cc10e',
            text: 'When can you apply for a loan?',
        },
        {
            id: '30f5643a-0b4a-47ce-9c1f-274bbee6dab4',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
        {
            id: '36a3d7db-78f2-4ebd-bf95-2466eb8d7135',
            text: 'What are the loan tenure options?',
        },
        {
            id: '4220e1ff-4cf3-48c3-b466-78624490df8b',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
        {
            id: '0ef7c525-765e-4726-b68e-903aefa28d47',
            text: 'When can you apply for a loan?',
        },
        {
            id: 'acfbe565-32cf-44c4-9f12-7b5115c09596',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
        },
    ],
    homeLoanFeesAndCharges: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '399e5ecd-835d-4dbd-b91a-e716490d557e',
            text: 'Home Loan Fees & Charges',
        },
        {
            id: '956c7a16-875d-40c5-8b21-7e7695a4434e',
            text: 'Home Loan',
        },
        {
            id: '4efb0520-598c-4c3b-9087-2cce0fa87802',
            text: 'Loan Against Property',
        },
        {
            id: 'c09165b3-878f-4527-86da-20c449f880f8',
            text: 'Sammaan Capital offers competitive processing fees for home loan approval, along with additional charges for transactions like balance transfer. Other fees include dishonored payment, late payment, document retrieval, and specific property-related activities.',
        },
        {
            id: '1d324255-c0b0-4078-b0c1-38770fe8498a',
            text: 'Stage',
        },
        {
            id: 'c4200791-9f19-44f2-8b37-ccd2b84b63e8',
            text: 'Fee / Charge Description',
        },
        {
            id: 'e2981ca7-bdc0-41cb-ab5e-943453a34b49',
            text: 'Charges',
        },
        {
            id: 'e310bc99-278e-4513-ade1-df4222f12261',
            text: 'Pre-disbursement',
        },
        {
            id: 'edb564b1-4525-4ca7-ad74-ad740b08b173',
            text: 'Processing Fees',
        },
        {
            id: '33da4469-3c22-4a1c-a128-ea5a2b93acab',
            text: '0.50% for salaried and 1% for SENP (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '5f942cf3-0e24-415e-aae6-502a7fedee6b',
            text: 'Post-disbursement',
        },
        {
            id: 'b221c54b-6be4-4187-b1c8-aee1db0ae2af',
            text: 'Technical /Valuation and Legal opinion charges, SRO search charges, ROC search charges, non-encumbrance certificate from SRO charges',
        },
        {
            id: 'f6c1204b-a98f-4f79-b8de-628e8c32f9ba',
            text: 'Rs. 2,500 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '4a97deb9-9b9b-4600-aab9-892e4017195d',
            text: 'Transaction handling charges in balance transfer / resale home loans',
        },
        {
            id: '336c734a-7f79-47c3-8fd1-bae7fe85e94e',
            text: 'Rs. 1,500 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '9b7afd9f-ed18-4afc-843b-a18488d34e1e',
            text: 'Cheque / NACH / ECS dishonour charges',
        },
        {
            id: 'b6940d6a-a440-4afb-8b89-cdc3bf4f4124',
            text: 'Rs.500',
        },
        {
            id: '96a57eed-4e3a-4ab0-9217-c3ab17be8683',
            text: 'Late payment charges',
        },
        {
            id: 'd94567a0-9800-4f5d-92e5-10754571abac',
            text: '24% per annum of outstanding EMI',
        },
        {
            id: '5dfcc8e8-24a1-434b-a1cc-bdd06414e4ba',
            text: 'Repayment Mode/ Account Swap charges',
        },
        {
            id: '1e5f2333-bb04-462f-b73e-a0c27afa8094',
            text: 'Rs.500',
        },
        {
            id: 'ce64a148-3073-496f-8a42-e976c8243059',
            text: 'Property Swap Charges (Swapping is at discretion of lender)',
        },
        {
            id: 'a8479e20-f42e-4148-923e-ae265612ac6f',
            text: 'Rs.10000',
        },
        {
            id: '41ef6b5e-5b64-4da4-8a74-6b68a92113f6',
            text: 'Charges for Reissuance of pay order/disbursement cheque revalidation',
        },
        {
            id: '76244b91-0af8-4498-b8cf-236517dca304',
            text: 'Rs.500',
        },
        {
            id: 'ddffdeff-af9e-4bc9-949d-14c493168494',
            text: 'Foreclosure statement Charges',
        },
        {
            id: 'ae9c8d85-6012-4b4a-8488-de015f608ec2',
            text: 'Rs.500(Nil if requested once in quarter)',
        },
        {
            id: 'aa85e126-8ffd-474c-9ea4-001b946cb5cd',
            text: 'List of Documents',
        },
        {
            id: '8b5bb812-1be4-4017-a75e-814d4d481742',
            text: 'Rs.1000(Nil if requested within initial 6 months of 1st disbursement)',
        },
        {
            id: 'b52074ad-ce47-41ba-9342-2e561b2d6150',
            text: 'Charges for holding property documents post 30 days from the loan closure',
        },
        {
            id: '0d222915-f5c0-4319-87c6-3d769ea3f1b3',
            text: 'INR 1000/- per day',
        },
        {
            id: '060833b3-5418-44af-810d-65f6f3104f92',
            text: 'Retrieval charges for Copies of loan /property document in IB custody',
        },
        {
            id: '957501b3-4e02-46f5-9665-8752eaa93ea9',
            text: 'Rs.750',
        },
        {
            id: '03f5a7e5-aefd-460f-802f-3bcd27e14e2c',
            text: 'Charges for Physical Statement Of Account / Amortization Schedule.',
        },
        {
            id: 'd6f2d1d8-dcca-47a4-bbf6-4c5868f3e382',
            text: 'Rs.200',
        },
        {
            id: 'e3660b4e-e2ab-4ea0-9334-28d289635ed7',
            text: 'Registration Charges for Borrowers ECS Mandate (loan repayment)',
        },
        {
            id: '64a9f47f-c0be-43a2-9b7e-975f3d0caf4d',
            text: 'NIL',
        },
        {
            id: '7cf1f23e-396a-46d3-a6ce-95ca08b4e320',
            text: 'Income tax certificate in home loans',
        },
        {
            id: '7ac72295-2757-4387-b555-ee2629555924',
            text: 'NIL',
        },
        {
            id: 'cbd8cdc9-9418-4164-bbf4-0cd17d4a4369',
            text: 'Compliant handling charges',
        },
        {
            id: 'bb61bb37-d106-4eb6-9528-561360d81ff6',
            text: 'NIL',
        },
        {
            id: '7d1c336d-1dab-4dd5-97ab-bde2f508dba1',
            text: 'Charges for certified true copies of title deeds from SRO, if applicable.',
        },
        {
            id: '426b09a8-fe0b-4cb5-afbc-8b778e657393',
            text: 'As per Actual',
        },
        {
            id: 'bf28e5ef-55c8-43d1-a01a-0f1890188a12',
            text: 'Stamping charges of loan Agreement',
        },
        {
            id: 'f51eab78-7ccc-4a2b-877f-a36c828117cf',
            text: 'As per actual, subjected to state laws - to be borne by the borrower',
        },
        {
            id: '0a2c7706-afa3-45e8-9d09-212ee7e1999d',
            text: 'Stamping charges of other legal documents like indemnity bond, legal undertakings, legal affidavits, personal guarantee bond, power of attorney for NRI home loans etc.',
        },
        {
            id: '947e1a7d-b044-4c9e-ae89-055e6ddd687d',
            text: 'As per actual, subjected to state laws - to be procured by the borrower',
        },
        {
            id: '1bef155b-8ae8-4b32-b904-2370396035ef',
            text: 'Original property documents retrieval for specific activity like production at SRO or development authority (on borrower request)',
        },
        {
            id: '95876138-7944-4d6d-a844-35767ac542c3',
            text: 'Rs 5,000 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '0426e198-0ba0-43d6-8176-44abeac5bbfe',
            text: 'Database admin fee',
        },
        {
            id: '4bf61182-76ff-422a-8a06-e040b49b2c46',
            text: 'Rs 650 (Inclusive of plus applicable taxes and other bona fide levies, if any',
        },
        {
            id: '33d15c4a-db94-4759-aa5b-431966b7723a',
            text: 'ROI switch fee Home Loan',
        },
        {
            id: 'c1c38f31-9828-4a2c-9be1-5492c3780471',
            text: 'As per Standard Switch Grid as available on request(plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '69722ec9-c1f1-4aed-bbad-6e3cb7724fca',
            text: 'All applicable fees & charges along with the associated taxes shall levy and other bona fide levies (if any), which in case payable, are to be paid in addition to the applicable fees/charges.',
        },
        {
            id: '9a13bc77-1696-412d-bfcb-cfeb56950f45',
            text: 'Apply for home Loan',
        },
        {
            id: 'bdedf11a-82d5-42e1-9500-51528ee06c1f',
            text: 'What is the loan processing fee?',
        },
        {
            id: '2ed6f8d3-4b15-48ff-b446-12dbe3b94d84',
            text: 'Answer',
        },
        {
            id: 'aec7acfb-3c33-48f6-94b9-9c941707e1c9',
            text: 'Is processing fee on home loan refundable?',
        },
        {
            id: '386d469c-7f2a-457f-a412-6afdd310832b',
            text: 'Answer',
        },
        {
            id: '16685c17-0951-4a26-9cae-c72be21ef72c',
            text: 'How is processing fee calculated?',
        },
        {
            id: 'ba87b820-4b2d-4128-b25d-d4aee2df58d0',
            text: 'Answer',
        },
        {
            id: '6223328a-ca1c-4a85-9bab-20da8bce4912',
            text: 'What are the foreclosure charges on home loan?',
        },
        {
            id: 'd5663386-6cc9-433d-a344-a4b9a6990d5a',
            text: 'Answer',
        },
        {
            id: 'f666ee1d-05bb-4240-baa4-0a23f990169e',
            text: 'What are prepayment charges on home loan?',
        },
        {
            id: '233d5599-24f7-4aae-8864-7ac0e79bed2f',
            text: 'Answer',
        },
        {
            id: 'a3d7cdd5-e435-4a14-8b9b-2f63bd797cab',
            text: 'show 12 more',
        },
        {
            id: 'c8c15fff-e711-4178-8501-52c16a9a4dcf',
            text: 'show Less',
        },
    ],
    lapFeesAndCharges: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'd4262610-1b8b-4cd7-be3d-1e344860cbda',
            text: 'Loan Against Property Fees & Charges',
        },
        {
            id: '95215fcb-2115-4aed-819b-04ad4f015e14',
            text: 'Home Loan',
        },
        {
            id: '62decddf-2727-4805-92f0-262f28363f9e',
            text: 'Loan Against Property',
        },
        {
            id: '0ef5de3a-0e16-4cfd-9d12-81999e2031f0',
            text: 'Sammaan Capital features competitive one-time processing fees for home loan approval. Additional charges include transactional handling fees for balance transfer or resale, dishonor charges, late payment charges, retrieval charges, and charges for specific activities related to original property documents.',
        },
        {
            id: '77ec61a8-128a-4c45-9868-e9ed412dca97',
            text: 'Stage',
        },
        {
            id: '9fd8d265-b3f7-4e35-bd87-44dec456d586',
            text: 'Fee / Charge Description',
        },
        {
            id: '1571348f-12a9-4804-924f-ffdd9799fe12',
            text: 'Charges',
        },
        {
            id: 'acd0fd31-b5fb-44ae-b616-a17537dad183',
            text: 'Pre-disbursement',
        },
        {
            id: 'd8ea9949-a039-477b-92be-38c48f2817e3',
            text: 'Processing Fees',
        },
        {
            id: '7135a3b7-f9f8-4dff-8846-86417a4f6c9b',
            text: '0.50% for salaried and 1% for SENP (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: 'e0289d38-6f8d-44e9-9400-88f6b6f2a9d4',
            text: 'Post-disbursement',
        },
        {
            id: '3186a91a-24c1-4a18-99df-4f78733907d2',
            text: 'Technical /Valuation and Legal opinion charges, SRO search charges, ROC search charges, non-encumbrance certificate from SRO charges',
        },
        {
            id: '78cbbc61-6c7b-4179-9848-a39e883a2efd',
            text: 'Rs. 2,500 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: '52eb4494-a71d-45fe-b2c5-24974b525be6',
            text: 'Transaction handling charges in balance transfer / resale home loans',
        },
        {
            id: 'ae4f02a0-d4b0-49a3-ae08-eda2606ad72f',
            text: 'Rs. 1,500 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: 'c4bea76e-82da-47c3-870a-02d48d334ca9',
            text: 'Cheque / NACH / ECS dishonour charges',
        },
        {
            id: 'd60a1488-e78c-44bf-9243-035eaa58f219',
            text: 'Rs.750',
        },
        {
            id: '49898e41-83d8-4940-bee8-003fcc9d60a7',
            text: 'Late payment charges',
        },
        {
            id: '602450ec-026d-4db5-9d95-539bdbec2ab7',
            text: '24% per annum of outstanding EMI',
        },
        {
            id: '4f26daf1-936e-4bcf-9f67-74cf6ddb8827',
            text: 'Repayment Mode/ Account Swap charges',
        },
        {
            id: 'c8fa92aa-4bf5-4af4-aaee-9be74513752c',
            text: 'Rs.500',
        },
        {
            id: '9ade0aa4-a686-434f-99fe-9b6c44b0f647',
            text: 'Property Swap Charges (Swapping is at discretion of lender)',
        },
        {
            id: 'ea99a4b8-fb0c-4c04-9158-06c6d8587b36',
            text: 'Rs.10000',
        },
        {
            id: 'ebc6451c-53cf-4f0a-a48d-aebe0feb637a',
            text: 'Charges for Reissuance of pay order/disbursement cheque revalidation',
        },
        {
            id: '6a9e76b1-0739-443c-acf9-b7577adee08c',
            text: 'Rs.500',
        },
        {
            id: '158c7c7e-3f05-40aa-b2d1-2a42aaacb406',
            text: 'Foreclosure statement Charges',
        },
        {
            id: '2a1e983b-c2ed-480c-8140-e25122661f0e',
            text: 'Rs.500(Nil if requested once in quarter)',
        },
        {
            id: '63ecf711-8c66-49a6-a912-b3f6dbdd4cae',
            text: 'List of Documents',
        },
        {
            id: '07bb771d-e478-4e89-a698-22904b4481ed',
            text: 'Rs.1000(Nil if requested within initial 6 months of 1st disbursement)',
        },
        {
            id: 'ff3965e5-9fa2-4eb6-a06e-4318312ff9c4',
            text: 'Charges for holding property documents post 30 days from the loan closure',
        },
        {
            id: '44b0d4d1-e865-4aff-b358-35df21d23ff3',
            text: 'INR 1000/- per day',
        },
        {
            id: '01791919-ac25-4278-b1cb-a4480c463f58',
            text: 'Retrieval charges for Copies of loan /property document in IB custody',
        },
        {
            id: '40753836-5f11-4cbc-b742-5fb00aba7a28',
            text: 'Rs.750',
        },
        {
            id: '7a2db957-29cb-40c9-b478-b8647783877f',
            text: 'Charges for Physical Statement Of Account / Amortization Schedule.',
        },
        {
            id: '31fd96fa-429c-4770-967b-a380c0c81b22',
            text: 'Rs 200/- ( plus applicable taxes and other bona fide levies, if any) for Hard copies /Emailing of Soft Copy by Customer Service Teams : NIL',
        },
        {
            id: '51b2f7fe-39fb-49f5-8366-5984dda2dcca',
            text: 'Registration Charges for Borrowers ECS Mandate (loan repayment)',
        },
        {
            id: 'b8e2a3b6-66fd-4ee7-8f50-9d17d7a172c1',
            text: 'NIL',
        },
        {
            id: '85132476-12b5-4c1f-a716-084b3743dbd5',
            text: 'Income tax certificate in home loans',
        },
        {
            id: '08b78cbb-1be7-488e-a662-c9625bc3d7f8',
            text: 'NIL',
        },
        {
            id: '9bdae3c7-a5aa-4f51-9d19-534f37f92263',
            text: 'Compliant handling charges',
        },
        {
            id: '95d09de5-7124-4b99-8b4d-e0682196fa0c',
            text: 'NIL',
        },
        {
            id: '762caa71-421b-4c2f-ac68-9807f55f4d3e',
            text: 'Charges for certified true copies of title deeds from SRO, if applicable.',
        },
        {
            id: '3f8f69fe-edf8-4d6a-899d-2965e8e5b24e',
            text: 'As per Actual',
        },
        {
            id: 'e642d7a7-4a3c-4564-b0f3-5bca5247ba4d',
            text: 'Stamping charges of loan Agreement',
        },
        {
            id: 'e86f3eca-c66c-4769-9c09-b42badc9783f',
            text: 'As per actual, subjected to state laws - to be borne by the borrower',
        },
        {
            id: 'a804e5dc-e2a4-497f-b606-42df6f1c5025',
            text: 'Stamping charges of other legal documents like indemnity bond, legal undertakings, legal affidavits, personal guarantee bond, power of attorney for NRI home loans etc.',
        },
        {
            id: '0d7f8568-ab3a-411f-b6a6-f32c87885f1b',
            text: 'As per actual, subjected to state laws - to be procured by the borrower',
        },
        {
            id: 'f16fbac2-c382-4085-915f-814af0044eb8',
            text: 'Original property documents retrieval for specific activity like production at SRO or development authority (on borrower request)',
        },
        {
            id: 'e765ed6a-6724-48a8-898e-314ff62afb99',
            text: 'Rs 5,000 (plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: 'f5c15dae-eb2a-4636-9d3a-4f469766a196',
            text: 'Database admin fee',
        },
        {
            id: '030da5b6-5def-4fe3-ba9d-d76f24a250bb',
            text: 'Rs 650 (Inclusive of plus applicable taxes and other bona fide levies, if any',
        },
        {
            id: '44902914-f9a8-40df-a26d-a46e309fa095',
            text: 'ROI switch fee Home Loan',
        },
        {
            id: 'a6de7dc0-a387-41d7-973f-d3bd4731f890',
            text: 'As per Standard Switch Grid as available on request(plus applicable taxes and other bona fide levies, if any)',
        },
        {
            id: 'fa1d2ed0-a2d6-4893-a4c6-3fae55d53c88',
            text: 'All applicable fees & charges along with the associated taxes shall levy and other bona fide levies (if any), which in case payable, are to be paid in addition to the applicable fees/charges.',
        },
        {
            id: 'b5a5fd6a-1417-402f-9929-6d5ba6d35764',
            text: 'Apply for Loan Against Property',
        },
        {
            id: 'caa58e83-4f7f-4fbe-8421-9b8fb2b3b022',
            text: 'What is the loan processing fee?',
        },
        {
            id: 'e559e7b3-3247-4cb7-8e3c-6f64e44d1541',
            text: 'Answer',
        },
        {
            id: 'e8559e2a-79bb-4de2-86a2-99550724edc1',
            text: 'Is processing fee on home loan refundable?',
        },
        {
            id: 'b274b8f1-772a-4635-95ad-1e8465e256bd',
            text: 'Answer',
        },
        {
            id: '3495a2ed-3f61-451d-8239-394d7036421e',
            text: 'How is processing fee calculated?',
        },
        {
            id: 'dd1f991f-fd69-44ba-83c5-3b3a486990f6',
            text: 'Answer',
        },
        {
            id: '2ff49164-c83c-4953-b982-6bbcf1f383dd',
            text: 'What are the foreclosure charges on home loan?',
        },
        {
            id: '8852e6fe-523a-4879-a0d5-fc5d40209381',
            text: 'Answer',
        },
        {
            id: '175bee27-61bf-43e1-9085-437195032c55',
            text: 'What are prepayment charges on home loan?',
        },
        {
            id: '3f971d84-059c-445a-a13b-77add38fad5b',
            text: 'Answer',
        },
        {
            id: 'bcd0be9f-33af-4cc7-95e6-62b8e72f7687',
            text: 'show 12 more',
        },
        {
            id: '9aee5352-23ff-4928-8334-b535c38d60ae',
            text: 'show Less',
        },
    ],
    homeLoanPrepaymentCharges: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '4c03f376-1072-4e3e-8fde-0e5a6c376ef6',
            text: 'Prepayment Charges',
        },
        {
            id: '4a040e12-e2df-4cb7-bc6c-1691e9bc7555',
            text: 'Home Loan',
        },
        {
            id: '442e74fb-b919-438d-8cb1-5dbc805c4e29',
            text: 'Loan Against Property',
        },
        {
            id: 'f26f4ab3-fc28-4cf6-9fe4-c601a8106dab',
            text: 'Home loan prepayment is when you pay your home loan before its due date. Usually, home loan prepayments are large amounts that reduce the number of EMIs you need to pay the bank. Sammaan Capital has loan prepayment for both regular home loans, as well as for loan against property. ',
        },
        {
            id: 'b1bd7641-e4fa-46cd-beef-b53ecef0bf53',
            text: 'Individual',
        },
        {
            id: 'beccc277-6789-4cff-9fe0-b07186e6c4c0',
            text: 'Floating Rate Loans',
        },
        {
            id: '9449f7a8-724a-4384-9a38-b5f32fb309a5',
            text: 'No prepayment fees shall be payable for partial or full pre-payments.',
        },
        {
            id: '9d397c0c-69a7-4c6d-a461-631ea2071bd4',
            text: 'Fixed and Floating (Dual Rate) Loans',
        },
        {
            id: '50b68394-2c2a-4afb-bf91-680a9cd6a773',
            text: 'No prepayment fees shall be payable once the loan has been converted into Floating Interest loan post the expiry of the Fixed Interest Rate period.',
        },
        {
            id: '9693c83c-554d-4326-9111-e2cb9945e5e8',
            text: 'No prepayment/ foreclosure fees applicable if the loan is foreclosed by the borrower out of their own sources (i.e. any source other than by borrowing from a bank/ HFC/ NBFC and/or any financial institution).',
        },
        {
            id: '6efa87b0-2a1d-4828-b099-eced1cacc962',
            text: 'Any partial or full pre-payment during the Fixed Interest Rate period of the loan will attract pre-payment fees of 2% of the amount prepaid.',
        },
        {
            id: 'd3052b6e-8d0b-4627-b8f3-cd18e52f8145',
            text: 'Non-Individual',
        },
        {
            id: 'ef609f10-24e5-4bf3-9e0a-2a0c1e6fe027',
            text: 'Floating Rate Loans',
        },
        {
            id: '3d4d3ef5-bb99-41bf-9639-38f0c5e79b2d',
            text: 'No prepayment fees shall be payable for partial or full pre-payments.',
        },
        {
            id: '0fbb7ba7-6c83-423a-a654-6b3e788db4b2',
            text: 'Fixed and Floating (Dual Rate) Loans',
        },
        {
            id: '39a68e23-bca5-4c20-8af3-74709d94a746',
            text: 'No prepayment/ foreclosure fees applicable if the loan is foreclosed by the borrower out of their own sources (i.e. any source other than by borrowing from a bank/ HFC/ NBFC and/or any financial institution).',
        },
        {
            id: '0b11d5b3-37c8-417d-8e63-3c7da1335565',
            text: 'Nil prepayment fees applicable for all payments up to 25% of the principal outstanding (POS) inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: 'cc7ec3cf-f3db-44c3-87cf-95ebc8fce8bf',
            text: 'Where prepayment amount exceeds 25% of principal outstanding (POS), inclusive of all prepayments made within preceding 12 months, then the amount prepaid in excess of 25% of POS will attract pre-payment fees as applicable.',
        },
        {
            id: 'aee7f766-d5e8-4cc6-8a37-eeeb98125348',
            text: 'Prepayment/ Foreclosure fees applicable on foreclosure payments shall be inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '44221f31-1336-4c47-b682-17b10ac62c91',
            text: 'Prepayment / Foreclosure fees of 2% applicable; unless otherwise specifically mentioned in the borrowers’ loan agreement.',
        },
        {
            id: '6a92eb62-2123-4f3a-9899-e5a1cdf90369',
            text: 'There is no lock-in period for prepayment. Applicable taxes shall be levied on the pre-payment / foreclosure fees, as stipulated by the authorities, from time to time.',
        },
        {
            id: '498344b5-8b2e-4f2b-bf79-264155c71ea8',
            text: 'What are the prepayment charges associated with Sammaan Capital, and how are they calculated?',
        },
        {
            id: '425f970a-3649-443b-9cfd-91c0312f1ce0',
            text: 'Answer',
        },
        {
            id: 'a565a3e1-30ac-4f65-b009-929c9f351c07',
            text: 'Is there flexibility in prepayment options, and are there any exemptions from prepayment charges for certain categories of customers?',
        },
        {
            id: '58a9b9a9-3e98-43e9-9cc7-04bc128d916a',
            text: 'Answer',
        },
        {
            id: '0277bd12-ffae-447a-8511-a4868644aece',
            text: 'Can you provide guidance on minimizing prepayment charges while managing a home loan with Sammaan Capital, and are there specific terms and conditions to be aware of?',
        },
        {
            id: '0eb794ab-b394-40b2-ac9f-b531e3519008',
            text: 'Answer',
        },
    ],
    lapPrepaymentCharges: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'ee34be54-ef0d-4c23-8fc8-41e77d8a371c',
            text: 'Prepayment Charges',
        },
        {
            id: '0415c898-4403-439c-a8b5-cecfb4e613b7',
            text: 'Home Loan',
        },
        {
            id: '89da787a-441f-4c1d-aa5c-1f2a20b0f3bf',
            text: 'Loan Against Property',
        },
        {
            id: '682faa4a-93f4-4294-811b-01f79806f0cb',
            text: 'Home loan prepayment is when you pay your home loan before its due date. Usually, home loan prepayments are large amounts that reduce the number of EMIs you need to pay the bank. Sammaan Capital has loan prepayment for both regular home loans, as well as for loan against property. ',
        },
        {
            id: 'bacedb0e-b12a-49f3-84ca-d423181fde3d',
            text: 'Individual',
        },
        {
            id: '9d8f514b-7a59-4bae-b0ef-c0503d803215',
            text: 'Floating Rate Loans',
        },
        {
            id: '09c05860-ef20-4730-a794-f8f64a8b94ac',
            text: 'Nil prepayment / foreclosure fees applicable where loan is availed for purposes other than business',
        },
        {
            id: '7cfaa0b4-d622-464b-9bd4-f8f857a55730',
            text: 'Where the Loan is availed for Business Purpose, then the pre-payment will attract charges as mentioned below:',
        },
        {
            id: '814f7aff-e992-430c-b697-64ab094ff915',
            text: '5% of the amount prepaid for the initial 2 years from the date of first disbursement and 3% then-after of the amount prepaid; unless specifically mentioned in the borrowers’ loan agreement .',
        },
        {
            id: '210522c1-2ab9-4f30-b3dd-a68dc4ea37a3',
            text: 'No prepayment fees applicable for all pre payments upto 25% of the principal outstanding (POS) inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '4d581ab2-20a3-472b-b0ed-ec00c8a1e6ed',
            text: 'Where prepayment amount exceeds 25% of principal outstanding (POS), inclusive of all prepayments made within preceding 12 months, then the amount prepaid in excess of 25% of POS will attract pre-payment fees as applicable.',
        },
        {
            id: 'a828afa6-fc0e-44d9-9794-d81f5d3ce67c',
            text: 'Prepayment / Foreclosure fees applicable on foreclosure payments shall be inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '17479047-57d1-4896-a8f1-c4d182f6dde9',
            text: 'Fixed and Floating (Dual Rate) Loans',
        },
        {
            id: '213c82b0-5825-4525-bd93-689a20fde308',
            text: 'No prepayment fees shall be payable for pre-payments, once the loan has been converted into Floating Interest loan post the expiry of the Fixed Interest Rate period subject to the condition that the loan is availed for purpose other than business.',
        },
        {
            id: 'dc57d400-707b-4ddb-bb65-896702667006',
            text: 'Any pre-payment during the Fixed Interest Rate period of loan and/or If the Loan is availed for Business Purpose, then prepayment will attract charges as mentioned below:',
        },
        {
            id: '31ff8191-e61b-4f25-9d27-bdedd1a3df6a',
            text: 'Pre-payment charges of 5% of the amount prepaid for the initial 2 years from the date of first disbursement and 3% then-after of the amount prepaid; unless specifically mentioned in the borrowers’ loan agreement.',
        },
        {
            id: 'b3c2e827-945c-4dd2-88db-88bd700f8dbd',
            text: 'No prepayment fees applicable for all pre payments upto 25% of the principal outstanding (POS) inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '07d9b573-f97d-4c70-a3f5-5e0b2bd79cd0',
            text: 'Where prepayment amount exceeds 25% of principal outstanding (POS), inclusive of all prepayments made within preceding 12 months, then the amount prepaid in excess of 25% of POS will attract pre-payment fees as applicable.',
        },
        {
            id: '00afeb14-39c8-4810-823a-357f59b3ed68',
            text: 'Prepayment / Foreclosure fees applicable on foreclosure payments shall be inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: 'e1d54052-0a8b-4ab0-b7f2-36a448cc24ad',
            text: 'Non-IndividualNon-Individual',
        },
        {
            id: '48e547f0-8c4b-42c1-a0ff-bbb4b0d5d985',
            text: 'Fixed and Floating (Dual Rate) Loans',
        },
        {
            id: '22961668-549a-4fa4-8552-b82ea6e7857c',
            text: 'Nil prepayment fees applicable for all pre- payments up to 25% of the principal outstanding (POS) inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '3576a499-7f1f-4995-993f-c520e8a8f616',
            text: 'Where prepayment amount exceeds 25% of principal outstanding (POS), inclusive of all prepayments made within preceding 12 months, then the amount prepaid in excess of 25% of POS will attract pre-payment fees as applicable.',
        },
        {
            id: '0b1317b2-7da2-459a-b81b-4512a35edd5b',
            text: 'Prepayment / Foreclosure fees applicable on foreclosure payments shall be inclusive of all prepayments made within preceding 12 months.',
        },
        {
            id: '8854da77-42d5-48d3-8459-a50dd7d016df',
            text: 'Prepayment / Foreclosure fees of 5% applicable for the initial 2 years from the date of first disbursement and 3% then-after; unless specifically mentioned in the borrowers’ loan agreement..',
        },
        {
            id: '224e6112-e253-4dc0-8875-f4ee6f0f9e72',
            text: 'There is no lock-in period for prepayment',
        },
        {
            id: 'b64a31bd-d256-468d-92e8-60255732f5e7',
            text: 'Applicable taxes shall be levied on the pre-payment / foreclosure fees, as stipulated by the authorities, from time to time.',
        },
        {
            id: '3b501a56-adc9-4361-8f01-e0f8578dcbca',
            text: 'Other than term loans (OD facility)',
        },
        {
            id: '8d169a82-3621-4cda-90bb-47446bfe4e29',
            text: 'There is no lock-in period for prepayment',
        },
        {
            id: '0c994971-a7d7-4469-bde2-7131177d5bf7',
            text: 'There is no lock-in period for prepayment GST as applicable on pre-payment / foreclosure fees.',
        },
        {
            id: 'aef49efe-7398-49d9-83ca-980884b22d36',
            text: 'What are the prepayment charges associated with Sammaan Capital, and how are they calculated?',
        },
        {
            id: '98d9fd8e-1e99-47c3-9237-fd6d52700701',
            text: 'Answer',
        },
        {
            id: '556f4f5c-b26b-406d-a668-8f4ee65f4e68',
            text: 'Is there flexibility in prepayment options, and are there any exemptions from prepayment charges for certain categories of customers?',
        },
        {
            id: 'fcc9b895-b294-4a40-8667-6101e4c3582e',
            text: 'Answer',
        },
        {
            id: '2ee6a9f4-3b5f-48ac-b649-2b651e7020d0',
            text: 'Can you provide guidance on minimizing prepayment charges while managing a home loan with Sammaan Capital, and are there specific terms and conditions to be aware of?',
        },
        {
            id: 'afc17513-310c-4857-9c55-0e5cf051b3c9',
            text: 'Answer',
        },
    ],
    roiRange: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '6dccffd8-a883-43d6-bae8-2ff20a6847a3',
            text: 'ROI Range',
        },
        {
            id: 'fab90640-287e-4386-a3fe-63bfab0e3662',
            text: 'Individual Housing',
        },
        {
            id: '833eeb4d-f9c0-4182-8e63-d7ae0f319e80',
            text: 'Individual Non-Housing',
        },
        {
            id: 'ad7ad3e9-3556-4299-b9da-b617ede4070c',
            text: 'Wtd Avg [%]',
        },
        {
            id: '54f37973-848d-4f5c-a250-f46b81959902',
            text: '9.93',
        },
        {
            id: 'e2cd4318-d8a2-4bc6-8642-84afbc3af1da',
            text: '10.45',
        },
        {
            id: 'af8335da-4128-46fb-b496-f86f3c3f1e6a',
            text: 'Max [%]',
        },
        {
            id: 'b9af7fe3-8460-4cb0-8f42-56f492d78c06',
            text: '15.00',
        },
        {
            id: 'a902f2f2-5665-4b43-9c57-6df0086b3147',
            text: '12.85',
        },
        {
            id: '97a6f9b1-e80e-4af8-a7e7-22c71af19e6c',
            text: 'Min [%]',
        },
        {
            id: '1cb95e28-0f39-49ae-b280-57853fb49bfb',
            text: '8.70',
        },
        {
            id: 'd22b9e15-a77f-4f4b-a8f9-001edf4ba79f',
            text: '8.95',
        },
        {
            id: 'd759d722-ec40-49e1-9c13-76461adb6f7f',
            text: 'Mean [%]',
        },
        {
            id: '1fd49280-73b3-42e7-aae1-f49ddc5add2a',
            text: '8.95',
        },
        {
            id: '3afecd67-2af7-413c-abad-2b69bbba66d1',
            text: '10.23',
        },
        {
            id: 'bee3d7aa-2fa4-4af6-9ac6-10f99fdc583f',
            text: 'What Is Return on Investment (ROI)?',
        },
        {
            id: '2c2082e1-78e2-495c-aa2c-6a3ccb443a7c',
            text: 'Return on Investment (ROI) is a crucial financial metric that assesses the profitability of an investment in relation to its cost. Calculated as the percentage gain or loss on an investment relative to its initial cost, ROI provides a clear measure of how efficiently capital is employed. The formula takes into account both the current value of the investment and the original cost, making it a valuable tool for investors and businesses alike. A positive ROI indicates a profitable venture, while a negative ROI signals a loss. While ROI is a powerful metric, it is important to consider it alongside other factors for a comprehensive evaluation of investment performance.',
        },
        {
            id: '28194ad0-03ef-4de4-b7bc-93ef3a637833',
            text: 'Q: How is ROI Calculated?',
        },
        {
            id: 'f8842c04-668a-4f54-9aa3-55e338632331',
            text: 'A: The ROI formula is: ',
        },
        {
            id: '2c03c9f5-a4e1-4c40-9a60-5b0f4d7ce607',
            text: 'Q: What Does ROI Indicate?',
        },
        {
            id: '28d0f58c-4c7b-4d51-96d7-636c280ce383',
            text: 'A: ROI expresses the gain or loss on an investment as a percentage of the original investment. It provides insight into the efficiency and profitability of an investment.',
        },
        {
            id: '95181fff-540f-4e41-ba3b-57ea216f2815',
            text: 'Q: Is a Higher ROI Always Better?',
        },
        {
            id: 'b04c97a1-d98b-46cf-9983-217e136c38dc',
            text: 'A: A higher ROI is generally preferred, as it indicates a more profitable investment. However, it should be considered alongside other factors, such as risk and time horizon, for a comprehensive analysis.',
        },
        {
            id: 'ee421c4a-9a97-4c7f-a5a5-bc75bc5e8025',
            text: 'Q: Can ROI be Negative?',
        },
        {
            id: 'b5858c71-6afe-4da2-b9e5-a3cfdee38a5e',
            text: 'A: Yes, a negative ROI indicates a loss on the investment, meaning the current value is less than the initial cost.',
        },
        {
            id: 'a79e9e42-bbcd-4f18-931d-27517661589d',
            text: 'Q: What Factors Can Affect ROI?',
        },
        {
            id: 'dc45395f-4524-4e91-9b74-2b72a14bcc67',
            text: "A: Market conditions, economic factors, management decisions, and external events can all influence ROI. It's essential to consider these factors when interpreting ROI.",
        },
        {
            id: '332917ea-0966-4f8f-94ae-c6035986c66c',
            text: 'Q: How is ROI Useful in Decision-Making?',
        },
        {
            id: '2d18d984-438b-4f71-8742-4dab35ae184c',
            text: 'A: ROI helps investors and businesses assess the success of an investment, compare different investment opportunities, and make informed decisions about allocating resources.',
        },
        {
            id: '5d830518-86f9-48bc-809c-f15d109dba08',
            text: 'Q: Does ROI Consider the Time Factor?',
        },
        {
            id: '6d631c9c-aeaf-488b-a5b5-41f04cc5b63c',
            text: 'A: Yes, ROI considers the time factor by comparing the gain or loss over time relative to the initial investment. It provides a percentage return over a specified period.',
        },
        {
            id: '51d7e42b-8b09-4c78-879f-1939a8a9f739',
            text: 'Q: Are There Limitations to Using ROI?',
        },
        {
            id: 'c3498c9d-4aa4-45a2-b44e-f772649eeff2',
            text: 'A: While ROI is a valuable metric, it may not account for factors like risk, future uncertainties, or changes in market conditions. It is often used in conjunction with other financial metrics for a more comprehensive analysis.',
        },
    ],
    roiSwitchPolicy: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '2eb400b9-5895-4fd8-b785-8f59d823c6f3',
            text: 'ROI Switch Policy',
        },
        {
            id: '03b49c06-6aba-42fd-a2a6-8c0e4ef52ec1',
            text: 'Home Loans :',
        },
        {
            id: '22a25d24-66ea-4c61-a95d-e9c89e51ce6d',
            text: 'Existing customers have an option to reduce the applicable rate of interest on their loan by changing the spread or by switching between the schemes i.e. applicable benchmark rates through our ROI Switch Policy.This option to switch is available to borrowers who have availed loans under Floating Rate of Interest.This switch option is available to Salaried, Self-Employed Professionals and Self-Employed NonProfessionals, who have availed below loans under Floating Rate of Interest -',
        },
        {
            id: 'f991f942-b7f8-4885-a9ef-ed30eec54d71',
            text: 'Home Loans',
        },
        {
            id: '9744107b-6684-414d-883f-6fbeca5e72be',
            text: 'Home Improvement Loan',
        },
        {
            id: '6f1dc36f-8b15-4c6f-9b3a-0d914bb4ea33',
            text: 'Home Construction Loan',
        },
        {
            id: '4eedbc92-6be6-45cc-b69f-7a6175eb98be',
            text: 'Plot Loan',
        },
        {
            id: '3cc7bac9-303f-4c21-996b-3f2f2e014464',
            text: 'Plot + Loan',
        },
        {
            id: '35efdf20-95ab-4181-b6cd-aceb26eb2a97',
            text: `Any change in the Interest Rate(s) (pursuant to the switch facility opted by the borrower/s) will subsequently have an effect on the Tenure of the Loan and amount of equated monthly instalment(s) ("EMI") will remain unchanged, unless specifically requested by the borrower/s (to give effect on EMI amount) and is subject to condition that it meets other norms and policy parameters of the Lender.`,
        },
        {
            id: '0404c6b5-b56e-4d3f-bd42-50e66dc516ba',
            text: 'Conversion Fee is payable on the principal outstanding at the time of switch and will be charged at the discretion of the lender.',
        },
        {
            id: '5d381de1-c9db-4247-9e65-285170e898e4',
            text: 'The fees payable shall be 25% or onwards of the difference of the two coupon rates i.e. between the existing and proposed revised rate, depending upon factors like profile, loan amount, property type and other risk parameters. In case of a partly disbursed loan, the switch fee is payable on the principal outstanding (POS) only. There will be no switch fee payable on the undisbursed loan amount out of the total contracted loan.',
        },
        {
            id: '6b325790-b49b-422e-bcef-415a49197aa8',
            text: 'Rate reduction through spread change will be at the discretion of lender and will depend upon various factors like -',
        },
        {
            id: '9495e8e0-dc4b-49be-ad0b-c317a959ab89',
            text: 'Account to be regular',
        },
        {
            id: '0989cd67-a187-4d3f-aeda-be5a57633410',
            text: 'There should be no document pending submission by borrower/s.',
        },
        {
            id: 'a9107d36-e15b-4743-85e6-3f8eb8a93ad3',
            text: 'There should be no material impairment in the value of the underlying collateral',
        },
        {
            id: '8c02dee9-5c81-4bcc-aff1-8baeabc1d77a',
            text: 'There should not be any breach in terms of loan agreement , which is not acceptable to the lender',
        },
        {
            id: '0623d178-4380-4dad-9778-15a9ebb85c62',
            text: 'Any other condition as imposed by the lender',
        },
        {
            id: 'fb3ef4c9-03aa-465a-ae50-6f80051233bb',
            text: 'Execution of switch documents as per norms.',
        },
        {
            id: '7183b1b0-d16f-4cdc-80e4-2ab8607dc9b8',
            text: 'The same shall be communicated to the borrower in an appropriate manner.The reset of the spread shall be effective from the billing cycle, following the month in which all necessary switch formalities and documentation are completed by the borrower/s.The Rate switch offer shall be valid subject to the fulfilment of conditions/ additional terms as imposed by the lender.',
        },
        {
            id: '667621ef-c834-49a9-971b-ec9a053b145e',
            text: 'Non Home Loans :',
        },
        {
            id: '8ff96208-5915-489e-845d-313f4e4e8c37',
            text: 'Existing customers have an option to reduce the applicable rate of interest on their loan by changing the spread or by switching between the schemes i.e. applicable benchmark rates through our ROI Switch Policy.This option to switch is available to borrowers who have availed loans under Floating Rate of InterestThis switch option is available to Salaried, Self-Employed Professionals and Self-Employed NonProfessionals, who have availed below loans under Floating Rate of Interest -',
        },
        {
            id: 'c2b9c6df-bf70-495d-8439-c3f376a93f51',
            text: 'Loan Against Property',
        },
        {
            id: '2b669ad9-b275-4c33-b68a-a0d43095c59e',
            text: 'Top-up Loan',
        },
        {
            id: '8493defb-6f07-4a03-b164-ccade428bd60',
            text: 'Construction Finance Loan',
        },
        {
            id: 'b1b7f3e6-128b-479e-9e52-f857587bf74e',
            text: 'Lease Rental Discounting',
        },
        {
            id: '5fb3932c-44af-4b93-97b5-69b5e2a7a3da',
            text: 'Non Residential Property Loan',
        },
        {
            id: '10d1ec27-3d1a-472d-a425-efeb6dd32fff',
            text: `Any change in the Interest Rate(s) (pursuant to the switch facility opted by the borrower/s) will subsequently have an effect on the Tenure of the Loan and amount of equated monthly instalment(s) ("EMI") will remain unchanged unless specifically requested by the borrower/s (to give effect on EMI amount) and is subject to condition that it meets other norms and policy parameters of the Lender.`,
        },
        {
            id: '7283203b-dff3-46fd-8160-43899a88fd27',
            text: 'Conversion Fee is payable on the principal outstanding at the time of switch and will be charged at the discretion of the lender',
        },
        {
            id: '7ca4d5ff-6bd6-4238-aeff-6be1f993506b',
            text: 'The fees payable shall be 50% or onwards of the difference of the two coupon rates i.e. between the existing and proposed revised rate, depending upon factors like profile, loan amount, property type and other risk parameters. In case of a partly disbursed loan, the switch fee is payable on the principal outstanding (POS) only. There will be no switch fee payable on the undisbursed loan amount out of the total contracted loan.',
        },
        {
            id: '5fb8454f-62a8-490f-8ea8-b3e82a6cdd1e',
            text: 'Rate reduction through spread change will be at the discretion of lender and will depend upon various factors like -',
        },
        {
            id: '16cdf84b-cafc-4e91-ae51-66e3f8fcb5ad',
            text: 'Account to be regular',
        },
        {
            id: '6f4d6a9f-dc2d-4843-8578-a7c9b42e7481',
            text: 'There should be no document pending submission by borrower/s.',
        },
        {
            id: '86bb76f2-ee97-4325-ac59-5cc5e25a230f',
            text: 'There should be no material impairment in the value of the underlying collateral',
        },
        {
            id: 'e34b8291-8309-47cd-b83e-c37b0edd2d64',
            text: 'There should not be any breach in terms of loan agreement , which is not acceptable to the lender',
        },
        {
            id: 'a5fa255b-4596-4c3a-ae86-b04ff156acd0',
            text: 'Any other condition as imposed by the lender',
        },
        {
            id: 'c61de93b-8cad-4421-bf8f-e66df3bba196',
            text: 'The same shall be communicated to the borrower in an appropriate manner.',
        },
        {
            id: 'd1aaa7c5-c32f-497c-8c2e-1c7aca37a956',
            text: 'The reset of the spread shall be effective from the billing cycle, following the month in which all necessary switch formalities and documentation are completed by the borrower/s.',
        },
        {
            id: 'e88891f1-ed8c-444e-82bb-819bfc591f1f',
            text: 'The Rate switch offer shall be valid subject to the fulfilment of conditions/ additional terms as imposed by the lender',
        },
        {
            id: '3475e41f-f0fe-4e87-92ce-4efa1a1cdd4c',
            text: 'The Lender reserves the right to accept or decline the borrowers request for switch based on its assessment of the proposal and other factors affecting the lending business. The decision of the Lender shall be final, conclusive and binding to the borrowers.',
        },
    ],

    homeLoanInIndia: [
        ...headerStrings,
        ...footerStrings,
        ...calculatorsStrings,
        {
            id: '5a131174-4eb5-4cb7-a2f2-e82f01abad76',
            text: 'Home Loan Locations in India',
        },
        {
            id: '7772df1e-23a4-4b50-810c-462ab9700978',
            text: '',
        },
        {
            id: '90e892be-1f50-469a-91c1-333afde81a4c',
            text: 'Mumbai',
        },
        {
            id: '4062aef5-efcd-4b34-ad50-ce2a4e8897fa',
            text: '',
        },
        {
            id: '8000a456-5e95-4e39-bd5a-fc0ed96d7e84',
            text: 'Pune',
        },
        {
            id: '46216c55-c496-4ae0-8069-f7e09fe9755a',
            text: '',
        },
        {
            id: 'b228316a-d3b9-4785-9f1b-9ef6ff2c3c26',
            text: 'Delhi',
        },
        {
            id: 'b1f1435b-92a1-4d7c-a0a4-8f523078d68b',
            text: '',
        },
        {
            id: 'a4a2bf8a-e10f-4e63-b5bb-af10ba64ff3d',
            text: 'Bengaluru',
        },
        {
            id: 'd4b985c3-1a93-4742-8367-0e8ddff1f5e2',
            text: '',
        },
        {
            id: '6b7c8abe-ef66-4bb5-8bd5-3ddbd462ac89',
            text: 'Hyderabad',
        },
        {
            id: 'cb987d6e-5fe5-4a8a-a05f-fc174f71a591',
            text: '',
        },
        {
            id: '9ee21e1a-fefb-412d-b350-d44e07f02f38',
            text: 'Chennai',
        },
        {
            id: '3a09b43e-e31f-402d-b091-0c28c9eb1a5c',
            text: '',
        },
        {
            id: '4c8941b7-5cb7-4d40-b2a0-9613bc4f11fe',
            text: 'Ahmedabad',
        },
        {
            id: '3955a798-0c07-43ca-86c2-ca12c71a5fa6',
            text: '',
        },
        {
            id: 'bb49479f-2918-442e-a108-a234daeaa7e3',
            text: 'Allahabad',
        },
        {
            id: '55b54584-3bf1-4dfe-8d3b-0c2664fc0087',
            text: '',
        },
        {
            id: '75288607-bf85-408b-9544-dba1d8124c1b',
            text: 'Kolkata',
        },
        {
            id: 'c191f588-dc16-4761-a21b-b6c53d31e177',
            text: '',
        },
        {
            id: '43892388-96ee-4f3b-b72a-a749beab264d',
            text: 'Chandigarh',
        },
        {
            id: '57abf295-27e6-47de-90b6-3adb941035a4',
            text: '',
        },
        {
            id: '8c23f73d-60ec-4bfc-bc63-cbe9413d1206',
            text: 'Lucknow',
        },
        {
            id: '64f8aac7-82f2-4512-b099-a1992ceb497f',
            text: '',
        },
        {
            id: '13f04b6d-c815-4d31-9c66-f4f698c6c2c5',
            text: 'Jaipur',
        },
        {
            id: '1d1a9c4a-62d8-4cb9-b7a2-7820aa963201',
            text: '',
        },
        {
            id: 'af29d9d8-b9f3-4118-bb62-ae69b2d2edba',
            text: 'Visakhapatnam',
        },
        {
            id: '064c9fc2-0a14-41b5-8019-2facdc1e0ab9',
            text: '',
        },
        {
            id: '67caeb94-a487-4fa2-a377-5eaf0587ce0f',
            text: 'Mysore',
        },
        {
            id: 'bcac28c5-6a09-4fb6-8976-39cafa683391',
            text: '',
        },
        {
            id: 'b8b1f6a7-8c39-452d-9302-4e3fe4fb789a',
            text: 'Surat',
        },
        {
            id: '1d613142-38d4-4497-b6ab-afe1b392b618',
            text: '',
        },
        {
            id: '473bbbe0-3615-4bd6-8546-a04e69126a35',
            text: 'Bhopal',
        },
        {
            id: '4889dc09-00f7-4746-b703-f3119027a992',
            text: '',
        },
        {
            id: '7b58d2e3-423a-4218-9665-1197af85f278',
            text: 'Gurugram',
        },
        {
            id: 'f045a94a-10b9-42fe-89db-8a705069dece',
            text: '',
        },
        {
            id: '9d4f370a-5d32-4467-918c-1749d6946fb4',
            text: 'Coimbatore',
        },
        {
            id: '081ee6e9-c27e-4380-9821-7a7e14ecaa1d',
            text: 'Find us in your city',
        },
        {
            id: '23ef4ae5-f24f-4c58-b054-8d5c482cf675',
            text: 'Visit Branch Locator',
        },
        {
            id: 'a32ae2b8-0405-4f50-bfa2-24e298fbdd3c',
            text: 'Why Choose Sammaan Capital Home Loan?',
        },
        {
            id: '5e3a2c66-0b24-4984-a9bd-5a66b2c3daf3',
            text: '',
        },
        {
            id: 'dce1f17a-14f9-4004-84e9-3e448902fc35',
            text: 'Instant Sanction',
        },
        {
            id: '0bcb8643-fc90-4a36-bc09-aa0ee7a953b6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'ef52f295-6e5f-4d3e-99d6-1bca84aaf993',
            text: '',
        },
        {
            id: '66c491e7-1b10-483a-a255-cdcc396fe8ae',
            text: 'Speedy Processing',
        },
        {
            id: 'c111f42b-2578-40c4-8ba1-75f537a31bac',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '5e16f94e-00c2-44a5-aacf-e92b42de9d95',
            text: '',
        },
        {
            id: '4c80d503-cc55-4ef5-9485-768ca87dc4df',
            text: 'Instant Sanction',
        },
        {
            id: 'fca2f187-d797-4e4f-8378-ccde8398a21e',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '6a8ff847-1994-45c7-9558-9bc1b6017a37',
            text: '',
        },
        {
            id: '93384b23-822f-44ce-9c75-9841c759d44c',
            text: 'Speedy Processing',
        },
        {
            id: 'db1aef4f-67da-46f2-a904-c622c0fabf61',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'f9895948-5821-4fa2-8e8f-f7699c5fd848',
            text: 'Calculate Your EMI',
        },
        {
            id: 'c8e732e8-f66d-4f94-a2e3-c7ceecb312d4',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '3fd65bd1-a871-4e01-be79-93862786093b',
            text: 'How can I check my home loan eligibility in India?',
        },
        {
            id: '643a170d-8fc8-45be-94b7-aac8fbd0bad9',
            text: 'Answer',
        },
        {
            id: '39d70b00-28b6-4985-8ed4-a34a734b4fd3',
            text: 'What documents are required for the home loan application process?',
        },
        {
            id: 'be28ed44-88ed-4733-9185-29cc42f76190',
            text: 'Answer',
        },
        {
            id: '9a077fd5-4eec-4400-b8ec-eac1f7c85f88',
            text: 'Can I apply for a home loan online, and how does the process work?',
        },
        {
            id: '81ed7ee0-4807-44d6-86c0-e0687afff46a',
            text: 'Answer',
        },
        {
            id: 'a974bbbe-da4b-4417-a7cc-a38953886533',
            text: 'What is the interest rate range for home loans at different locations in India?',
        },
        {
            id: 'c0ce2757-2d2c-4f95-9bdc-e4089dd22b3d',
            text: 'Answer',
        },
        {
            id: '63949015-a45d-4d25-8708-005d2974ddda',
            text: 'How long does it take for the home loan approval and disbursal process?',
        },
        {
            id: '25d4b99e-6b8a-413c-a374-49f09bdc96e5',
            text: 'Answer',
        },
    ],
    videoCenter: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '94c14336-ed58-4a44-ad0e-992068ab4f88',
            text: 'Video Gallery',
        },
        {
            id: '622fd952-d73c-4dba-840a-aeb591f25caa',
            text: 'Why should you create your personal online Sammaan Capital Home Loans’ account?',
        },
        {
            id: '58534ad8-0837-48e0-8576-3ea46590cbfb',
            text: 'How to log in into Sammaan Capital Mobile App using your fingerprint?',
        },
        {
            id: '2f4ee6cc-d3ea-4708-bb2f-b973fd682d29',
            text: 'How to create your personal Sammaan Capital account online?',
        },
        {
            id: '456192e9-f6ed-47b2-8da6-a8a00f9ccdb3',
            text: 'How to request for an additional disbursal?',
        },
        {
            id: 'd0d141a7-9e77-46db-8156-2131634c7ccf',
            text: 'By creating your personal online account, you can view/edit your account summary, transaction history, contact details; view/download your tax certificate, pay outstanding dues, and do much more. Watch to know how. #CustomerFirst',
        },
        {
            id: 'cb45c8b1-61dc-492d-a161-01243c238694',
            text: 'By creating your personal online account, you can view/edit your account summary, transaction history, contact details; view/download your tax certificate, pay outstanding dues, and do much more. Watch to know how. #CustomerFirst',
        },
        {
            id: '3387ea2a-cdb4-4e51-809f-c666bf1591b4',
            text: 'By creating your personal online account, you can view/edit your account summary, transaction history, contact details; view/download your tax certificate, pay outstanding dues, and do much more. Watch to know how. #CustomerFirst',
        },
        {
            id: 'f21b2f82-ee73-43c6-b04b-c22640eb6ebf',
            text: 'By creating your personal online account, you can view/edit your account summary, transaction history, contact details; view/download your tax certificate, pay outstanding dues, and do much more. Watch to know how. #CustomerFirst',
        },
        {
            id: 'cb961410-8a4e-4af5-8d61-19c1a0f01ccd',
            text: '/videoLink',
        },
        {
            id: '731f6dbc-dcb8-475a-a6c9-ec78126cd74b',
            text: '/videoLink',
        },
        {
            id: '6d9b7ce3-b0e5-4de6-939d-e098d1c44fa4',
            text: '/videoLink',
        },
        {
            id: 'b6000aaf-e0e0-4d40-b3c3-6be1ba5ce56f',
            text: '/videoLink',
        },
        {
            id: 'e9fcd31a-9540-48dd-b0ec-4575ad62cf87',
            text: '/imgLink',
        },
        {
            id: '66a255c8-fa22-434e-8f5b-3050722d6ec5',
            text: '/imgLink',
        },
        {
            id: '96ab9434-6564-4232-a3fe-467c4e7b7f7d',
            text: '/imgLink',
        },
        {
            id: '2a96abb0-5af4-4ae6-8d07-0d6be7623d70',
            text: '/imgLink',
        },
        {
            id: '23b0d42c-796e-435a-a373-33cf5a5e134d',
            text: 'Our Videos',
        },
        {
            id: 'd295430a-31f8-4867-b40e-3e8e8f1cdee9',
            text: 'Home Loan',
        },
        {
            id: '76b8cf9a-ab1f-41ae-a9a2-234cddad14b0',
            text: 'LAP',
        },
        {
            id: '88c273e5-de47-4a71-812e-13517a9135a0',
            text: 'More Videos',
        },
        {
            id: 'f6562ab4-cf99-46c8-be16-45df2e5bf114',
            text: 'Apply for Home Loan',
        },
    ],
    pressReleases: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '0adc8750-207c-4aca-a35b-21ed9f5effb3',
            text: 'Home',
        },
        {
            id: '2a89c503-cbf5-43e6-8f5f-8e0cbf077ff7',
            text: '/',
        },
        {
            id: '58f75ae4-371c-4bce-9ccf-18c34c8d72fc',
            text: 'Press Releases',
        },
        {
            id: '6944c850-acba-4e4b-beb7-93a3352d2e19',
            text: '#',
        },
    ],
    existingCustomersBenefits: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '94fb4ee1-ccfa-4a36-b904-d3e9c235089b',
            text: 'Home',
        },
        {
            id: '4b3cf1c9-001d-467f-a5c0-617347c16031',
            text: '/',
        },
        {
            id: '6f474f82-dfe4-4fa9-8c5f-6a8ddfee9a6e',
            text: 'Existing Customers Benefits',
        },
        {
            id: '961dfe38-254f-4ab5-9656-fd447d12e10a',
            text: '#',
        },
        {
            id: '32111c92-6668-4b57-a813-5cf1130b608d',
            text: 'You can now benefit from the below services available online as well as through our customer care support:',
        },
        {
            id: '6e671ca2-ef32-447c-a5ae-846d1ff36c9b',
            text: 'Update details via app, website.',
        },
        {
            id: 'e629dc8a-3f44-49fa-ba57-919979d09c32',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: 'f697989c-da60-4bae-8f08-c096057486ce',
            text: 'You can request for your credit information report',
        },
        {
            id: 'd8c60d14-a308-43fc-b09d-8e3506ea8021',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: 'cda9e2d6-05f3-467f-b5ea-d8491484cba9',
            text: 'Change the EMI cycle date',
        },
        {
            id: '555925b6-80f3-4474-9c18-e38abb04065c',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: '9b4202b6-85dd-4281-b9f2-a49fa9b0489e',
            text: ' Ask for the exemption letter',
        },
        {
            id: 'cb836f54-2569-4664-a578-144eb9ac0004',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: '226de225-cdf1-40c4-ad5e-3edb652401d6',
            text: 'Request for your repayment schedule',
        },
        {
            id: '8e946458-ca7b-45b1-adf7-a57626e4165c',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: '7210fef9-69cb-4c0f-aba5-7f68ab16fe81',
            text: 'Request for your repayment schedule',
        },
        {
            id: 'd238be79-924f-4f2c-b0b3-d1ec873d0667',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: '3271e222-3b9a-4753-ae3a-eb27b2e745b5',
            text: 'Request for a foreclosure statement',
        },
        {
            id: '41a66e87-a9eb-4034-baf9-2f19768b8430',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: '0f8cbc48-5dc0-4645-bc16-f2d1bdcc617f',
            text: 'Download interest certificate and interest rate history',
        },
        {
            id: '9ea11246-04a8-40f0-82f1-5053b14bb4ed',
            text: 'Lorem ipsum dolor sit amet. A eligendi asperiores ea internos libero sit neque tempora ab maiores voluptatibus. Est dolorem dignissimos in Quis animi et expedita dolorem.Est dolorem dignissimos in Quis animi et expedita dolorem.',
        },
        {
            id: 'ddfcac78-f392-4697-9f69-7a01659aa9b4',
            text: 'Login to your Account',
        },
        {
            id: '491f7831-7aba-45d4-9c86-89f9149286c6',
            text: 'Discover Our Blogs',
        },
        {
            id: '7b5c68c3-b68d-41ce-8afb-b6060b7edf42',
            text: '/',
        },
        {
            id: 'a4d3be81-0678-40ed-bae7-878948a2d86d',
            text: 'How It Works',
        },
        {
            id: '6c39ee2b-9c9c-4b75-88a3-2f08d7949689',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '84d3c677-cba8-4f6c-a667-58d9b6e52043',
            text: '22 June',
        },
        {
            id: 'e2922b04-a8ff-4ee1-a437-554a9ea6baa6',
            text: '/',
        },
        {
            id: '86c10003-e3cc-4ed6-96a6-d64624b697ec',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'c3fd20a7-6a01-4c4b-a4db-49ff54bba659',
            text: 'Helpful advice for those purchasing their first home.',
        },
        {
            id: '81cb49d4-3b75-4840-a285-1de109005d02',
            text: '22 June',
        },
        {
            id: 'e373d138-5aa7-4ecc-bf57-7b3914b1b9bf',
            text: '/',
        },
        {
            id: '95150bc8-7ef4-4cfe-b731-c9d58518d5d4',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '73c3ffec-90f6-4d1d-a3d9-a023cb61570a',
            text: 'Ensure you have all the necessary documents.',
        },
        {
            id: 'a746fa42-5e8f-430b-af41-e68bae270f0a',
            text: '22 June',
        },
        {
            id: 'a7df68fa-5eb4-485c-b042-7cae265c58b3',
            text: '/',
        },
        {
            id: 'ee4fd701-2cc7-4937-8e0f-0d30f960fdbf',
            text: 'Refinancing Options',
        },
        {
            id: '68e67f8e-a56f-40af-ba73-884840190d25',
            text: 'Explore refinancing solutions for your mortgage.',
        },
        {
            id: 'e4711036-a225-4b3d-be2e-7e4711091bcb',
            text: '22 June',
        },
        {
            id: '8b985e4c-47d6-42a1-9634-d1fe373a57c3',
            text: '/',
        },
        {
            id: '6e244d58-45a4-4f8f-96df-b98b5a7fbf9f',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'fa901f4b-9f39-47d6-a92d-cb482dec2e98',
            text: 'Find answers to commonly asked questions.',
        },
        {
            id: '2ef96786-2b97-44a3-8242-bc3d7fca56e6',
            text: '22 June',
        },
        {
            id: 'ad13edb6-f1c2-45c1-b50c-b859fb143ef5',
            text: '/',
        },
        {
            id: '48904624-1326-4a6b-b57c-c814d23d6275',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '3e4517ac-a06e-4c1a-88f1-a7a0329648bf',
            text: 'Find answers to commonly asked questions.',
        },
        {
            id: '40f9dbe1-0405-49c7-a086-ceab1be9f458',
            text: '22 June',
        },
    ],
    financialReports: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '32672588-a6ba-47b3-bdcf-4dfdb5d3ce21',
            text: 'Results',
        },
        {
            id: '83616dbb-d7ba-453a-8d85-f1e8ef45d40d',
            text: 'Earning updates',
        },
        {
            id: '35888176-b010-435e-b5e0-a3bd41c08aa0',
            text: 'Result and Earning Updates',
        },
        {
            id: '645feccb-a75b-444e-9f2c-8519c3f10dd0',
            text: "Get into the details of our business and discover how we're performing against our objectives. To access the annual and interim reports simply select the relevant year from the drop down.",
        },
        {
            id: '1180673c-fba8-41da-826a-6490dd0fd1c8',
            text: 'Filter by :',
        },
        {
            id: '5a084816-df1a-4e7e-a5e1-ba1d9b2c4071',
            text: ' Records Found',
        },
    ],
    kycGuidelines: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '6bc5d08e-0284-4d29-9377-ee26d314f5c6',
            text: 'KYC Guidelines',
        },
    ],
    csrPolicy: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'a95b4de7-6d8e-406f-b921-82b7f030c64f',
            text: 'CSR Policy',
        },
        {
            id: '4aff118d-28aa-4074-9976-8e51202a7530',
            text: 'We are committed to fostering positive societal impact through its comprehensive Corporate Social Responsibility (CSR) initiatives.',
        },
    ],
    disClaimer: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '3a438b83-4328-4ec3-a690-ce7dadf6d38e',
            text: 'Disclaimer',
        },
        {
            id: 'adf3734c-0d19-4887-adbf-e94ec40bd9c9',
            text: 'General',
        },
        {
            id: '419ead7b-678a-4d02-9ffd-d67daf462cf4',
            text: `This Agreement, sets forth the terms and conditions that apply to use of this site (http://www.Indiabulls.com/ and www.Indiabulls.com) and all sub sites that reside under the site (collectively "Indiabulls Sites"), by a Subscriber. "Subscriber" means each person who establishes or accesses a connection ("Account") for access to and use of the Indiabulls Sites.`,
        },
        {
            id: '8f405751-d59e-4041-9fe7-9d7d118b37f7',
            text: 'Restrictions on use',
        },
        {
            id: '3b2fd718-7dee-4b2d-bd99-c3844d15b7c7',
            text: "The Indiabulls Sites are owned and operated by Indiabulls Housing Finance Limited, an Indiabulls group company, and contains material which is derived in whole or in part from material supplied by the Company, its group companies, various news agencies and other sources (including content partners), and is protected by international copyright and trademark laws. The restrictions on use of the material and content on the Indiabulls Sites by the Subscriber are specified below. . Except where specifically authorised, the Subscriber may not modify, copy, reproduce, republish, upload, post, transmit or distribute in any way any material from the Indiabulls Sites including code and software.By using the Indiabulls Sites (other than to read this Agreement for the first time), Subscriber agrees to comply with all of the terms and conditions hereof. The right to use the Indiabulls Sites is personal to Subscriber and is not transferable to any other person or entity. Subscriber is responsible for all use of Subscriber's Account (under any screen name or password) and for ensuring that all use of Subscriber's Account complies fully with the provisions of this Agreement. Subscriber shall be responsible for protecting the confidentiality of Subscriber's password(s), if any.The Company shall have the right at any time to change or discontinue any aspect or feature of Indiabulls Sites, including, but not limited to, content, hours of availability and equipment needed for access or use.Changed Terms The Company shall have the right at any time to change or modify the terms and conditions applicable to Subscriber's use of the Indiabulls Sites, or any part thereof, or to impose new conditions, including but not limited to, adding fees and charges for use. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including but not limited to, posting on the Indiabulls Site, or by electronic or conventional mail, or by any other means by which Subscriber obtains notice thereof. Any use of the Indiabulls Site by Subscriber after such notice shall be deemed to constitute acceptance by Subscriber of such changes, modifications or additions.",
        },
        {
            id: '28c6f903-9b02-47a0-8d0b-5be61e4ed119',
            text: 'Equipment',
        },
        {
            id: 'e646d042-00de-420a-84b3-0f2da31a513e',
            text: 'Subscriber shall be responsible for obtaining and maintaining all telephone, computer hardware and other equipment needed for access to and use of the Indiabulls Sites and all charges related thereto.',
        },
        {
            id: 'a3bb6ab3-d9fd-4726-a18c-48366e4758a7',
            text: 'Website usage policy',
        },
        {
            id: '017fd3c7-6b01-4e2c-8b30-88a89fee7ccd',
            text: 'This is the official website of Indiabulls Housing Finance Limited and is solely owned by Indiabulls Housing Finance Limited.',
        },
        {
            id: '955c88f7-a451-4c89-89f6-66450db5882f',
            text: 'The information provided on this website for Indiabulls Housing Finance Limited is authenticated by Indiabulls Housing Finance Limited. It is further notified that Indiabulls Housing Finance Limited will not be responsible for any information about the organization or its products given by any other website on the internet.',
        },
        {
            id: 'a833c9d2-4106-41e0-8718-05ee3cb5fa2c',
            text: 'Indiabulls Housing Finance Limited neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data or information displayed on this Website and Indiabulls Housing Finance Limited shall not be in any manner liable for inaccuracy/error if any.',
        },
        {
            id: 'b1e8893f-62dd-4cc3-8cd6-d3ea0ea43951',
            text: 'While the site may be updated with changes periodically, Indiabulls Housing Finance Limited does not guarantee that this site reflects the latest amendments/information at all times or at any time.',
        },
        {
            id: '7df4dff5-1bc3-4db7-8550-ec4fd10bbabe',
            text: 'Disclaimer of Warranty: Limitation of Liability',
        },
        {
            id: '1e453705-8e7d-4421-bf70-d2272495a370',
            text: `Subscriber expressly agrees that use of Indiabulls Sites is at Subscriber's sole risk. Neither the Company, its affiliates nor any of their respective employees, agents, third party content providers or licensors warrant that Indiabulls Sites will be uninterrupted or error free; nor do they make any warranty as to the results that may be obtained from use of Indiabulls Sites, or as to the accuracy, reliability or content of any information, service, or merchandise provided through Indiabulls Sites.Indiabulls Sites is provided on an "As Is" basis without warranties of any kind, either express or implied, including, but not limited to, warranties of title or implied warranties of merchantability or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this agreement.This disclaimer of liability applies to any damages or injury, caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortious behavior, negligence, or under any other cause of action. In no event will the Company, or any person or entity involved in creating, producing or distributing Indiabulls Sites or the Indiabulls Sites software, be liable for any damages, including, without limitation, direct, indirect, incidental, special, consequential or punitive damages arising out of the use of or inability to use Indiabulls Sites. Subscriber hereby acknowledges that the provisions of this section shall apply to all content on Indiabulls Sites.In addition to the terms set forth above neither, the Company, not its affiliates, information providers or content partners shall be liable regardless of the cause or duration, for any errors, inaccuracies, omissions, or other defects in, or unauthenticity of, the information contained within Indiabulls Sites, or for any delay or interruption in the transmission thereof to the user, or for any claims or losses arising therefrom or occasioned thereby. None of the foregoing parties shall be liable for any third-party claims or losses of any nature, including, but not limited to, lost profits, punitive or consequential damages. The Company, its affiliates, information providers or content partners shall have no liability for investment decisions based on the information provided. Neither, the Company, nor its affiliates, information providers or content partners warrant or guarantee the timeliness, sequence, accuracy or completeness of any information.`,
        },
    ],
    homeLoanApp: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'cc56306b-7db8-4cc0-8dff-0c1674b1de6e',
            text: 'Download Sammaan Capital App',
        },
        {
            id: '886229d2-2003-479e-a940-68d50d3f9946',
            text: 'We will send you a link to download the app. Open it on your phone.',
        },
        {
            id: '389f2889-174f-4f3c-a271-409cbfbfb8e1',
            text: 'Mobile no.',
        },
        {
            id: '64b6c1b3-621e-41f4-82d2-151f78d6a98e',
            text: 'Email',
        },
        {
            id: '976654eb-5178-4a23-89eb-4f00670a4c7c',
            text: 'Enter your Mobile no.',
        },
        {
            id: '84ab74cf-b1eb-41dc-911a-8f11d481a536',
            text: 'SEND APP LINK',
        },
        {
            id: '1df10aae-91bf-4514-a7da-b34041795704',
            text: 'Download app from',
        },
        {
            id: 'a993db54-b907-42e4-800d-480bb7bdf345',
            text: 'Hassle-free Online Application to Disbursement ',
        },
        {
            id: '4d8b2ee4-5bc0-4c76-8226-9c16e7aadf9b',
            text: "With Sammaan Capital, customers have a completely digitized experience, starting from selection of homes all the way to receiving disbursal on one's home loan.",
        },
        {
            id: '75e8d88a-0ca0-43c5-8413-dfec6a197c8c',
            text: 'Download app from',
        },
        {
            id: 'e78b2070-de1d-43e8-a3c9-2a23ad46bfaa',
            text: '',
        },
        {
            id: '870337d0-188f-40da-81a5-eb6b1a747c35',
            text: '',
        },
        {
            id: '52dd99f1-059b-42d8-9115-cb9aeb6d7a95',
            text: '',
        },
        {
            id: '0e6df94b-de7a-4286-bc20-7359894c03ad',
            text: 'Know your Finance with our List of calculators',
        },
        {
            id: '82b4a8c4-3bab-405c-912f-6567fc16264a',
            text: "With Sammaan Capital, customers have a completely digitized experience, starting from selection of homes all the way to receiving disbursal on one's home loan.",
        },
        {
            id: 'ff645dea-2822-4b80-a5ec-d39e186d9863',
            text: '',
        },
        {
            id: '5e6120d5-3ca5-4c8f-b634-0a1b235ec837',
            text: '',
        },
        {
            id: '6052fafe-f182-4d29-9d03-b2b2133b6874',
            text: '',
        },
        {
            id: 'eb1002c0-7852-4818-8abf-9508bbd6577d',
            text: 'Single App for your multiple needs',
        },
        {
            id: 'be6b2b5f-7e12-4ae5-9541-0c4349f81bea',
            text: "With Sammaan Capital, customers have a completely digitized experience, starting from selection of homes all the way to receiving disbursal on one's home loan.",
        },
        {
            id: '',
            text: '',
        },
    ],
    benchmarkRates: [
        ...headerStrings,
        ...footerStrings,
        {
            id: 'f4d9131f-4951-4c41-a5d7-a4daebd89e4c',
            text: 'Benchmark Rates',
        },
        {
            id: 'eb240538-d5b9-4bdc-811b-e19e3c48d6ef',
            text: 'Rates',
        },
        {
            id: '6b36f79e-41be-423f-8137-457122d259e8',
            text: 'RMLR',
        },
        {
            id: 'c5552c84-6b8b-4599-b72c-faa997a436a5',
            text: 'With effect from 17th February;2023 onwards, RMLR is 12.60%',
        },
        {
            id: 'a06c1487-6444-430a-a7a4-601816d0772c',
            text: 'RCLR',
        },
        {
            id: 'e2b2247a-4a9a-4c0d-b3d4-2a576d600520',
            text: 'With effect from 17th February;2023 onwards, RCLR is 14.60%',
        },
        {
            id: 'fb66d4ba-0f7c-4338-aae0-9d6514e0b1e3',
            text: 'IMLR #',
        },
        {
            id: '42b5a5c7-e938-4095-ba6e-98dd842bdd7f',
            text: 'With effect from 17th February;2023 onwards, IMLR is 12.45%',
        },
        {
            id: 'db5f58fd-cfc4-4e3b-ad6e-c649f5c46477',
            text: 'ICLR #',
        },
        {
            id: 'f9c3099f-1142-4720-9c3c-ca5bee79b377',
            text: 'With effect from 17th February;2023 onwards, ICLR is 17.90%',
        },
        {
            id: 'd3e4c64c-71dd-4a6d-b144-40353b418ab3',
            text: 'IMLR #',
        },
        {
            id: 'da585100-a61d-4226-8e61-c06b320086c6',
            text: 'With effect from 17th February;2023 onwards, IMLR is 12.45%',
        },
        {
            id: '7307441f-4bad-4f52-a3a2-d13253881130',
            text: 'FRR*',
        },
        {
            id: '77aa5f8b-ac72-4525-be92-8351a0a33624',
            text: 'With effect from 17th February;2023 onwards, FRR is 20.35%',
        },
        {
            id: '9621cf76-4f11-40fa-bd4b-9a7e38ef4cea',
            text: 'LFRR**',
        },
        {
            id: '297c3749-845f-4a86-9cd7-0e1cac179440',
            text: 'With effect from 17th February;2023 onwards, LFRR is 24.95%',
        },
        {
            id: 'e20f749c-53a8-47d1-a9a2-28332a8fc814',
            text: '*PLR***',
        },
        {
            id: '1cd47544-667f-4c94-b450-3b811a9b30ea',
            text: 'Prime Lending Rate (PLR) is 24.40% applicable with effect from 10th May;2022.',
        },
        {
            id: 'cf25da3f-4d62-479b-9dcc-8bb2fbc4a263',
            text: 'Note : ',
        },
        {
            id: '140f7856-39e6-4b5a-9b54-8dde2b473929',
            text: '# (Company has since discontinued from Aug 2021 sanctioning of fresh Loans quoting the benchmark IMLR & ICLR. This rate is only applicable to old loans sanctioned at IMLR & ICLR respectively)',
        },
        {
            id: '64c400b7-883f-4401-8fab-2cdc8eda8f5e',
            text: '*(Company has since discontinued from January 2017 sanctioning of fresh Loans quoting the benchmark FRR. This rate is only applicable to old loans sanctioned at FRR)',
        },
        {
            id: '8b006d9b-8c8f-4dd2-9d66-dece72008d19',
            text: '**(Company has since discontinued from February 2018 sanctioning of fresh Loans quoting the benchmark LFRR. This rate is only applicable to old loans sanctioned at LFRR)',
        },
        {
            id: 'd8dc60ca-0edf-4823-9d6d-118c02d691d7',
            text: '***(Company has since discontinued from August 2011 sanctioning of fresh Housing Loans quoting the benchmark PLR. This rate is only applicable to old loans sanctioned at PLR)',
        },
    ],
    preApprovedProjects: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '69b05378-455e-4637-96c6-f9b4540d12c8',
            text: 'Our Approved Projects',
        },
    ],
    searchResultPage: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '3c399feb-4909-4515-ba62-a97f33578fa2',
            text: 'Home',
        },
        {
            id: '348c8fad-389f-45c2-a324-981ec22882aa',
            text: '/',
        },
        {
            id: 'f1c62841-d473-4d42-92d0-45ffe2420bc6',
            text: 'Search Result Page',
        },
        {
            id: '5f911aae-1e0d-4cd5-80d0-d3580e31092d',
            text: '#',
        },
        {
            id: 'c81cf15d-c7a7-4a1a-9093-f9e50985d15f',
            text: 'Search Here',
        },
        {
            id: '637dc778-6472-465a-bdf8-7eb0abac10cb',
            text: 'Find What You Need',
        },
        {
            id: '0cd8e74d-128e-4cb4-868b-ecffc40628a7',
            text: 'All',
        },
        {
            id: '6f90bed2-26bd-484e-889c-db5a83bf5475',
            text: 'Loans',
        },
        {
            id: '2558c94e-f93e-457d-8231-336384b7029a',
            text: 'Calculator',
        },
        {
            id: '15688b65-db11-41b9-9de6-6ef4424c2351',
            text: 'Blogs',
        },
        {
            id: '55732c05-9b49-43de-b398-1fc67543803e',
            text: 'News',
        },
        {
            id: '38b1c582-34f6-4364-abd4-317980a4e346',
            text: 'Videos',
        },
        {
            id: 'ce2f15ae-3152-48d3-a00f-2c7393179c58',
            text: 'Loans',
        },
        {
            id: 'c81ba44a-c2cd-4a5c-a125-02769cec3e5c',
            text: '#',
        },
        {
            id: '281f3e6c-0a70-447a-a951-43ad4bb764f1',
            text: 'Home Loan',
        },
        {
            id: '6c268635-9838-4140-92a1-8b988d870bd1',
            text: 'Apply Now',
        },
        {
            id: '38317fa8-68ae-4f39-a1ee-37dea95d3f4f',
            text: '#',
        },
        {
            id: '6f219ad9-1cb2-45fd-8a77-07520d1e25f0',
            text: '#',
        },
        {
            id: 'ddd9f37e-fb55-40cb-838e-c4343bf34210',
            text: 'Home Extension Loan',
        },
        {
            id: '9be23b22-d6e2-4011-a6a7-df9c4e5dee1f',
            text: 'Apply Now',
        },
        {
            id: '9c30de57-7327-44f5-af9c-e1fe27646927',
            text: '#',
        },
        {
            id: 'd0265d20-4bb3-40d6-8006-92abfdd91d6b',
            text: '#',
        },
        {
            id: '93882ddb-d96f-4184-9b6a-d89fa4562afc',
            text: 'Home Loan NRI’s',
        },
        {
            id: '6661ae28-4d55-44fd-9faa-a2706dad9867',
            text: 'Apply Now',
        },
        {
            id: 'a8392a5c-12ea-441c-8cba-1fa9761f2505',
            text: '#',
        },
        {
            id: '0d3da2a4-c0dc-4deb-aef9-fb2913447061',
            text: '#',
        },
        {
            id: 'fe0cca96-a0ed-446b-96d4-7192ed111ead',
            text: 'Home Loan Application Checklis',
        },
        {
            id: 'a2907cde-b91e-4af0-ba1c-8662be6252e6',
            text: 'Apply Now',
        },
        {
            id: '5c8874bd-d94c-4916-8cfb-0c95fb3b6480',
            text: '#',
        },
        {
            id: '0f263b37-a75c-409e-be29-35ecf06c8610',
            text: '#',
        },
        {
            id: 'a9bc41b8-3f98-40b6-bed9-6938d987bcfe',
            text: 'EMI Calculator',
        },
        {
            id: '23139cce-c235-4bb9-bd8b-484855ad6d40',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '720f092a-047e-4df1-8943-734c6686cbec',
            text: 'Calculate Now',
        },
        {
            id: '8ec5e07c-34a4-4191-bebf-ac7b29d4aede',
            text: '#',
        },
        {
            id: 'e45450d7-8ae3-4683-b855-4802ca3defd3',
            text: 'Calculators',
        },
        {
            id: '1791cc7c-1b51-4bbf-8dda-3397e61830ce',
            text: '#',
        },
        {
            id: '5306233b-fdf7-4d72-9a6f-b1e4106e5473',
            text: 'Eligibility Calculator',
        },
        {
            id: 'b8434ac3-6122-4bb8-aa16-6c758583ec92',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '5469de18-5b34-41af-9dc5-8ff0dd936415',
            text: 'Calculate Now',
        },
        {
            id: 'fcdc16d5-f6e7-4eab-9acf-3a0f346e6f62',
            text: '#',
        },
        {
            id: '029f61dd-0aca-4328-9cf0-00364b06e9d7',
            text: '#',
        },
        {
            id: 'f41f20ea-0f84-4e54-bab5-fdbc54b4a4a8',
            text: 'PMAY Calculator',
        },
        {
            id: 'c44ea1aa-55a4-4d78-90d1-6e9a2f28ce8a',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '17db047d-a0b1-4865-b0ce-ccb93162f7f5',
            text: 'Calculate Now',
        },
        {
            id: 'ed57c6c8-2e77-4b51-ba0d-d4f4ed560e78',
            text: '#',
        },
        {
            id: '45b88abb-0d06-4e46-a875-b6ff5d25c98f',
            text: 'Discover Our Blogs',
        },
        {
            id: '2ef5fa59-62bc-4a0b-9e28-e4912ed9e8a2',
            text: '#',
        },
        {
            id: '5a54d3ba-7d80-4602-9684-c29936628269',
            text: 'How It Works',
        },
        {
            id: '005c8176-4d16-4a10-9bdf-d39002208338',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'f18e9683-865b-4e9d-8743-c648e9bac402',
            text: '22 June',
        },
        {
            id: '1e067193-41a6-4e17-98d3-e88e9d199f03',
            text: '#',
        },
        {
            id: '9ad55202-7c44-47fd-afd2-c6bf13cf794a',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'f09f08f3-28b3-43c4-9da9-0157d3d24364',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '7c5bf21e-34bc-413f-8c84-52e2d6c07b98',
            text: '22 June',
        },
        {
            id: '87279ef5-1312-4d0b-991d-3b97fb92e30b',
            text: '#',
        },
        {
            id: 'd0d1d48f-b6fc-4aae-a796-cb76ddc687c2',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '534c5808-39ef-4f84-be4f-fe3aede28a16',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '0fa2af40-2efb-4f27-a08a-12b2f700b480',
            text: '22 June',
        },
        {
            id: 'd0ad317d-37bb-4d86-83f5-84a06939e0fb',
            text: '#',
        },
        {
            id: 'b7e3685b-befe-4939-a5a6-7fe000b3081e',
            text: 'Refinancing Options',
        },
        {
            id: '010290fe-e408-40f6-8165-5092d8fca8cd',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '3c4076ff-7e29-49b9-9c9e-ab17ad8e5973',
            text: '22 June',
        },
        {
            id: 'ea094b87-50f7-4248-a207-62b0c1e63593',
            text: '#',
        },
        {
            id: '02e8cca2-20b6-4a73-9e8f-9f690458721a',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'eb1a4e6b-f5b9-4947-bbb4-1c2b77b90c51',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '377c3b15-6921-410a-816b-cbb1db10cc78',
            text: '22 June',
        },
        {
            id: '71907a48-5b6e-4832-9748-979a31b3fb0c',
            text: '#',
        },
        {
            id: 'f5b773a5-63b7-442f-8161-1d219019635a',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '94bd7509-18f3-48be-a279-b8b631d7bcaf',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '5e49938c-0f0b-4a75-863a-43609dee6d0c',
            text: '22 June',
        },
        {
            id: 'cd380df9-31bd-41cb-94fc-ef1b2d93517a',
            text: 'News Corner',
        },
        {
            id: 'cae3d715-6670-4ce8-a1c0-e3755358b6f9',
            text: '#',
        },
        {
            id: 'd9442989-e52a-4548-b7c0-a8c2016b6585',
            text: '22 May',
        },
        {
            id: '04023b1e-46f1-4f3f-8d27-53c80860b2d8',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: 'd3bd8a73-4ea8-480d-86bf-49c03bbe792b',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '9bb24be2-15f0-4124-b94f-63ea767a1145',
            text: 'Know more',
        },
        {
            id: '7645803e-d1fc-4988-ad88-bbd88318a620',
            text: '#',
        },
        {
            id: 'e806a99f-5526-44f7-8646-e87327baa292',
            text: '#',
        },
        {
            id: '358bc9d1-8369-47e9-b170-e7d1470c364e',
            text: '21 July',
        },
        {
            id: '35cb00c4-3896-49ac-8f02-9ec475e51490',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: '661d1703-8d05-4102-bcbc-2afe1b30608b',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '83dc8825-c6f4-4737-90c9-c81679550485',
            text: 'Know more',
        },
        {
            id: 'aad7c0ca-59a3-4735-b5ef-31a5b880dfb2',
            text: '#',
        },
        {
            id: '5c9c5ce8-f3f6-4f5e-bff0-59f7b406a424',
            text: 'Videos',
        },
        {
            id: 'da808c2f-564e-4d74-b13a-4b5c9f0fb905',
            text: 'How to log in into Sammaan Capital Mobile App using your fingerprint?',
        },
        {
            id: 'b129204a-48ad-4c46-9512-3901d56ba4eb',
            text: 'How to create your personal Sammaan Capital account online?',
        },
        {
            id: 'ff9afd2a-2494-4dd0-9668-79e45c98d394',
            text: 'How to request for an additional disbursal?',
        },
    ],
    saleNotice: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '04bf45df-7b9c-425d-b67e-b730143a6cf3',
            text: 'Home',
        },
        {
            id: 'f8680433-9397-4433-ad7e-49fb44a1c1e7',
            text: '/',
        },
        {
            id: 'cf4ded50-34e2-484b-8007-949740e7eb72',
            text: 'Sales Notice',
        },
        {
            id: '97453d79-2239-4591-9d0d-71700fa8be51',
            text: '#',
        },
        {
            id: 'de6b3a39-7ebd-4716-85a1-53161ca8eb46',
            text: "Sale Notice's",
        },
        {
            id: '415fd990-4dfc-4711-856b-09d7a98314b6',
            text: 'Customers can now easily download important documents and forms to apply for their home loans',
        },
        {
            id: '',
            text: '',
        },
        {
            id: '',
            text: '',
        },
    ],
    grievanceRedressalPolicy: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '0b73c0e2-8f7c-4b9e-a156-2ce8fd812052',
            text: 'Home',
        },
        {
            id: '7650ae99-52ee-441c-97dd-5704ab46c86d',
            text: '/',
        },
        {
            id: 'bfa13bde-23cd-48ef-90f0-c741c122b580',
            text: 'Grievance Redressal Policy',
        },
        {
            id: 'fad71641-6e18-43be-b96a-b15001fd2940',
            text: '#',
        },
        {
            id: '370e8699-c80e-41db-b437-3da9b4d44650',
            text: 'Grievance Redressal Policy',
        },
        {
            id: '84b43b79-0b50-4e15-aba4-a710100d08ba',
            text: 'A protocol for addressing and resolving customer concerns and complaints.',
        },
        {
            id: '124260ee-16f9-4998-9120-323626824ead',
            text: 'Grievance Redressal Policy',
        },
    ],
    downloadsPage: [
        ...headerStrings,
        ...footerStrings,
        {
            id: '523f5be9-3b19-4d42-b091-b8a1db57a6e0',
            text: 'Home',
        },
        {
            id: '3c0ee1f1-bd5f-4524-9849-0fe18cbe1603',
            text: '/',
        },
        {
            id: 'bb3f130d-08a7-4ba1-a06b-996900e22ddb',
            text: 'Downloads',
        },
        {
            id: 'f69a21ea-2694-473b-b405-3bbbe3f5ba80',
            text: '#',
        },
        {
            id: '02247a9e-15cf-4c38-a0ec-d339ec44c993',
            text: 'Downloads',
        },
    ],
    balanceTransferPage: [
        ...headerStrings,
        ...footerStrings,
        ...helpSectionString,
        needHelpString,
        {
            id: '02c7e3a3-368c-4f72-8e1a-b8b36371d407',
            text: 'Home',
        },
        {
            id: '65793f9b-b871-44c3-b4da-aabde8669fc7',
            text: '/',
        },
        {
            id: 'f053b3ae-a8de-48bc-8f74-76a472755a2d',
            text: 'Home Loan Balance Transfer',
        },
        {
            id: '530fb468-259e-4a3e-8eb2-b684adc2fc4d',
            text: '#',
        },
        {
            id: '3330658c-1893-4910-96ee-5e9ffc2c4879',
            text: `Home Loan Humara <br /> <span class="tw-text-primary-500-ight">Sammaan</span> Aapka`,
        },
        {
            id: 'b4fb44bd-df8a-490a-81e6-a1e154981b4b',
            text: 'Home Loan Balance Transfer',
        },
        {
            id: '5ed33e97-8675-4528-adec-3a76f80cef56',
            text: 'Consider Sammaan Capital Home Loans for a customer-centric approach with online convenience. Experience attractive interest rates, and if dissatisfied with your current home loan interest rate, explore our balance transfer option for benefits like zero prepayment charges, flexible tenure, multiple repayment options, and maximum loan-to-value ratio. Apply easily through our app or website, anytime, anywhere.',
        },
        {
            id: '511f1fb2-52bf-4c8c-9b14-c13c663930d1',
            text: 'Home Loan ranging from',
        },
        {
            id: 'd9e38eaa-1088-41fe-bc7d-3fdedd9e16f6',
            text: '9.75%* onwards',
        },
        {
            id: 'a9e9323f-c796-4786-a24e-23f071824380',
            text: 'Apply Now',
        },
        {
            id: '5cfc357e-a5f0-4b54-aed7-921b8d2fecf4',
            text: '# Interest will depend upon Profile, Loan amount, tenor and property type.',
        },
        {
            id: '7377d97f-81aa-47eb-944a-925279d35007',
            text: 'Why Choose Sammaan Capital Home Loan?',
        },
        {
            id: '664ef767-23bc-4b9e-99e3-deb1fe4ea71c',
            text: '#',
        },
        {
            id: '6315acdf-8fd6-48f9-be88-00d53034502c',
            text: 'Instant Sanction',
        },
        {
            id: '62dc6898-a4d3-4f71-a903-15cb11870994',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '5799e861-e195-4d20-944b-4e817ead4074',
            text: '#',
        },
        {
            id: 'e45998c9-6ca7-464c-a237-00c3adcfa5c7',
            text: 'Speedy Processing',
        },
        {
            id: 'e45a9a46-f1f3-4029-ada8-b106249ccc0e',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'f80b1abd-43ab-4cae-bdba-4703fd6f1688',
            text: '#',
        },
        {
            id: '29cafc18-4f19-425b-afe9-8a82aded7e92',
            text: 'Speedy Processing',
        },
        {
            id: '21ea0f4f-de71-4343-87f1-fe66d635a065',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '8d052831-0150-43ea-9c27-e9250dbe6249',
            text: '#',
        },
        {
            id: '88f35617-9b72-4bac-b8b3-d71769010e50',
            text: 'Instant Sanction',
        },
        {
            id: 'ba9d616d-940a-469e-8246-74bd4a4bb384',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'ba9457d0-cac9-42af-911f-a3a7687c1a28',
            text: 'Our customer’s reviews',
        },
        {
            id: '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            text: 'Komal Kumari',
        },
        {
            id: '4bb61937-c33d-4b53-baad-b09b031fd200',
            text: '1',
        },
        {
            id: 'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            text: 'Delhi',
        },
        {
            id: 'e95c7d35-8171-4718-9303-c83933fd2f28',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: '67934bac-6fb6-4f52-8e29-a676e60a3a77',
            text: 'Steps to take Home Loan',
        },
        {
            id: '5acdc664-370a-4036-95cd-6f3798f78d5b',
            text: '01/04',
        },
        {
            id: '79159acd-4a32-4cdc-8ab0-dbe8a0b791b3',
            text: '#',
        },
        {
            id: 'cfceeac7-82c1-4ffc-818c-72172cf8eef0',
            text: 'Fill the Loan Application Form',
        },
        {
            id: '0a3c5bc4-86df-4161-b534-d02a89ccba03',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'e362fac8-d07d-41d9-9e82-bfae7fe0119c',
            text: '02/04',
        },
        {
            id: '156370a8-e6ce-4fe0-9f49-ad14359a03a2',
            text: '#',
        },
        {
            id: '0b13714e-b99a-41ca-af55-2315506a793a',
            text: 'Confirm the details with our agent',
        },
        {
            id: 'f6134fd5-e265-4f7c-8659-50d3e6f3f992',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 'da0d189d-f00c-4499-be2b-8d3816d2b148',
            text: '03/04',
        },
        {
            id: '2bab9c15-296a-434f-8220-799af016b6e5',
            text: '#',
        },
        {
            id: '77ff562e-da84-4581-a2b8-142093b716f6',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: 'd37457ac-a408-4f45-b607-8ac868d0a418',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '83256cd9-16ea-49cb-8d3b-1cd6253ffc2a',
            text: '04/04',
        },
        {
            id: '562bb6e0-c72a-4b4d-b675-30d25fb94686',
            text: '#',
        },
        {
            id: 'e7ff3dc9-ec85-4155-abb5-206099d3e295',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '37988a04-dbaf-4c6b-b7bd-f84b530a4c04',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '29780653-e206-4f5c-a0ad-76545e2a32ae',
            text: 'Calculate Your EMI',
        },
        {
            id: 'd7dd44b7-8f85-4d31-a921-120c6d1547b1',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '6cb5ea94-7b10-4be1-a7ad-2b8c21176c81',
            text: 'EMI',
        },
        {
            id: '3d192092-5fda-47ac-b2df-60ce8ef718da',
            text: 'Eligibility',
        },
        {
            id: '8a71e84b-c86c-4f68-924b-009f3682b7a9',
            text: 'Stamp duty',
        },
        {
            id: 'da7c1573-7737-4914-a7ca-6aff9b05df4c',
            text: 'Tax benefit',
        },
        {
            id: '049a0f3a-b43f-4ab2-8bc6-de598aa64fb5',
            text: 'Our solutions',
        },
        {
            id: '1ea3a5cc-90e0-4c63-8afc-8d8a9d0c3c68',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        },
        {
            id: '332578fd-b805-44d3-87ee-1698fa8a43f8',
            text: 'Value added features',
        },
        {
            id: '7f5ed14a-966c-4828-bc9e-320e61bc7375',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        },
        {
            id: '3a958725-c72b-4224-b3df-e15615f6b2bd',
            text: 'Who can apply',
        },
        {
            id: 'cbfca81a-b963-4e4d-bb21-8ee541f47333',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        },
        {
            id: '02c1605e-5fbf-43a8-8944-3548da42ff63',
            text: 'Loan Term',
        },
        {
            id: '34faf226-191c-4190-919b-bfa42fe7ba81',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        },
        {
            id: '779322b4-cc1d-40ad-a6ee-385d121fd36a',
            text: 'Resource Center',
        },
        {
            id: '6e37bee0-fc44-4e69-bed7-bc445283b0fb',
            text: 'Discover Our Blogs',
        },
        {
            id: '5c2af689-cd14-4acd-b071-31378d879632',
            text: '#',
        },
        {
            id: '74734ca5-ee66-4747-82cb-f365c3269548',
            text: 'How It Works',
        },
        {
            id: '1d9459c6-74e2-4c35-bb5a-f7688e07ee48',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'c3ab5578-b8e2-40e8-b13b-3bd9d1ada9d9',
            text: '22 June',
        },
        {
            id: '1299fecf-f1cf-451b-840b-d760b7a79bcc',
            text: '#',
        },
        {
            id: '50844ed3-e78b-4bfd-b764-e22da46af86a',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '0ac546e9-424a-4255-89f3-2b7f5ebe6e64',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'ef9faa49-ecb6-4a15-a315-4d9d986dd3ae',
            text: '22 June',
        },
        {
            id: 'b0c05d6f-98d1-42b7-bd0b-939a5e706e07',
            text: '#',
        },
        {
            id: 'f2408a93-a575-4f19-80b2-d7e5c8607376',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'afb3093f-69f8-4a27-979b-3f1ba7ddc7f1',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'f067df1f-65ef-4bfc-9cbc-1f0af5c41614',
            text: '22 June',
        },
        {
            id: 'ac992e7c-4e2c-4676-af67-9e40908b7b08',
            text: '#',
        },
        {
            id: 'a522bc5d-e3fe-474f-98e5-f4990c321856',
            text: 'Refinancing Options',
        },
        {
            id: 'a9d6f857-2f8b-40fc-92ed-04c77fcba0af',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '229df2e9-f1d6-4979-9e5e-7da06c72a834',
            text: '22 June',
        },
        {
            id: 'e2bba964-c420-4ccd-941e-a1e0c626a399',
            text: '#',
        },
        {
            id: '0c1c8584-8c8a-4b4f-a65f-0b1b8cd1d084',
            text: 'Tips for First-time Buyers',
        },
        {
            id: 'b2d6ff0d-c38a-45b0-99b8-381c567d5873',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '0e5c05c6-f802-4121-8aa6-07692f188ad6',
            text: '22 June',
        },
        {
            id: 'c50df9f8-9751-4c7c-895c-47caeb7ac85d',
            text: '#',
        },
        {
            id: '29f6d030-4aad-40bb-8459-8b29ed365e53',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'd0760aa6-acca-47c7-8574-871df7f26b80',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'd34b0239-c032-4441-a2b1-d3fae80b3655',
            text: '22 June',
        },
        {
            id: '2c3434af-3cab-4bcf-ad3f-e2e183f45f30',
            text: '#',
        },
        {
            id: '448ddb0c-65c9-4b5e-b0bb-610618f9b926',
            text: '22 June',
        },
        {
            id: '9dc93aa1-608b-4903-a35e-061788029446',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: '7d0a00af-9aa0-4d74-85d9-055d0bc3c880',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '51b71adb-c74b-442f-b03d-b6774695bc05',
            text: 'Know more',
        },
        {
            id: 'e250b070-b632-4493-bf49-f9c961a8cbc1',
            text: '#',
        },
        {
            id: 'b670f9ed-989c-4c7c-9212-d19b88283663',
            text: '#',
        },
        {
            id: 'f52b0ae8-cdd0-469a-9503-ee736e135e8d',
            text: '23 July',
        },
        {
            id: '0a7455b5-1246-46df-a59b-077a553e0abb',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: 'a9d2c040-b493-4e12-a9db-c27423cbc310',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '25a4d2c8-8ad9-4be6-82fc-c5a95b853598',
            text: 'Know more',
        },
        {
            id: '1bf4f493-77fb-4fc8-956a-24f46ced0b09',
            text: '#',
        },
        {
            id: 'ffa4a0b6-37e7-4d3c-98f6-54d7ff25d9f5',
            text: '#',
        },
        {
            id: '782e2ceb-5280-4074-b693-59d88f2424f0',
            text: '22 June',
        },
        {
            id: 'e7c255cc-08db-41fa-861b-c56b62d272b5',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: '1c402362-0d1a-4d92-92ca-deb28e562143',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '51211d76-330b-406b-b8f7-959037a011c4',
            text: 'Know more',
        },
        {
            id: 'e412d463-15c7-4276-b65f-1885161c96c4',
            text: '#',
        },
        {
            id: 'ec3b32a9-9cd8-4377-b7dd-3815b44d446f',
            text: 'News Corner',
        },
        {
            id: '00057b9f-613a-4151-bd96-62229470fefe',
            text: 'What are the stages involved in taking loan?',
        },
        {
            id: '83185fa0-c7f8-409e-b486-a8bcbe7c32b8',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',
        },
        {
            id: 'c4181045-d8da-4e28-b9a4-2f87645c9cdb',
            text: 'Who can apply for a home loan?',
        },
        {
            id: '91315e0c-cfcb-444d-892a-1f5a265d5838',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',
        },
        {
            id: '08f2f1e2-e4f8-4f4c-97ec-49341c79d022',
            text: 'When can you apply for a loan?',
        },
        {
            id: 'f8f751d9-eaf2-48de-a29e-48c91f1b9448',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',
        },
        {
            id: '8c341ef1-d884-4bbc-b6e5-96ea68d43d2c',
            text: 'What are the loan tenure options?',
        },
        {
            id: '891baf32-5035-4bf2-87e5-11ec4d06b18e',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',
        },
        {
            id: '143a4ddc-dc1e-4338-bbdf-6967ba91b861',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: '745507f4-e866-4418-93a2-360eb9693efa',
            text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',
        },
        {
            id: 'cfd92f5d-4bdb-4586-89b6-ef58a72c90a6',
            text: 'Need help?',
        },
        {
            id: 'd555b7fb-79fc-4b2e-92ad-188219417472',
            text: 'Get in touch with us',
        },
        {
            id: '9af61317-894c-4059-b9f9-8af246901fa4',
            text: 'Apply for Home Loan Balance Transfer',
        },
    ],
    nriHomeLoan: [
        ...headerStrings,
        ...footerStrings,
        ...helpSectionString,
        ...needHelpString,
        {
            id: 'a138bd9c-5d9c-4c51-8e20-92ff76703f92',
            text: '',
        },
        {
            id: '157628fe-2ce1-489b-b2e1-8503b309259f',
            text: 'Apply for Home Loan',
        },
        {
            id: '8510369a-4468-48de-b190-61fe8e3e9379',
            text: '#',
        },
        {
            id: '0221b828-fa09-4df0-9ac7-acff40162347',
            text: `Home Loan Humara <br /> <span class="tw-text-primary-500">Sammaan</span> Aapka`,
        },
        {
            id: 'a0088aa7-c336-4bd0-a994-44393450241e',
            text: `Home Loan Humara <br /> <span class="tw-text-primary-500">Sammaan</span> Aapka`,
        },
        {
            id: '58b84855-6384-4775-b3e5-668efca70319',
            text: '',
        },
        {
            id: 'c5cc8603-4278-436b-9399-48250b9c70ac',
            text: 'Apply for Home Loan',
        },
        {
            id: '66f6764a-db12-425c-b665-f7c3c3e9b2c1',
            text: '#',
        },
        {
            id: '038d8271-61e3-4ae0-bc90-147ec076e4d2',
            text: 'Home',
        },
        {
            id: 'eb20ccf6-4bcd-497d-9758-82bd7cf44f73',
            text: '/',
        },
        {
            id: 'e4f307aa-73e7-4d64-810c-14ab5b2958d2',
            text: "Home Loan for NRI's",
        },
        {
            id: 'e6441b36-8679-4ce8-804e-d1a78036b9ad',
            text: '#',
        },
        {
            id: '98932b9b-859f-4b82-b09f-4b7f7cd256c0',
            text: 'Home Loan for NRI’s',
        },
        {
            id: 'd6bb42b0-f159-462c-b83a-5b113705d0d7',
            text: 'Sammaan Capital Home Loans caters to the dreams of NRIs wanting to own a home in India. Offering a one-stop solution, the process includes property selection, document filing, and EMI customization. With a streamlined application process, accessible services in Dubai, and a nationwide branch network in India, SC provides tailor-made NRI home loans with attractive rates, minimal paperwork, flexible terms, and virtual guidance for a hassle-free experience.',
        },
        {
            id: 'feb204d9-85c8-4975-b390-fe24c06b0e0a',
            text: ' # Interest will depend upon Profile, Loan amount, tenor and property type.',
        },
        {
            id: '820c1e0c-416d-4396-8518-f293a5da3f01',
            text: 'Home Loan ranging from',
        },
        {
            id: '08db8dad-7758-4753-b5c2-1bcd19a60607',
            text: '9.75%* onwards',
        },
        {
            id: 'f1761cc7-6793-4091-8d2c-ec826e03f898',
            text: 'Apply Now',
        },
        {
            id: '8415fd19-9d0f-4502-a5ed-2ba17b0b299f',
            text: '#',
        },
        {
            id: '1f231041-5197-4803-a74c-c2a5c2a013ec',
            text: 'Why Choose Sammaan Capital Home Loan?',
        },
        {
            id: '09e27ab4-81ec-4ba9-8fdf-25e3762e53ab',
            text: '#',
        },
        {
            id: '1b6bc646-3a78-49e3-9e62-8e0ee1a124ef',
            text: 'Speedy Processing',
        },
        {
            id: 'd519a7ae-cc9b-42b5-b03b-aa0b7a18ee26',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '713dcd5e-9567-4c34-b514-b880b0c061c2',
            text: '#',
        },
        {
            id: 'ef15358a-0ec2-4ae5-aabf-2815e1f8c8ba',
            text: 'Speedy Processing',
        },
        {
            id: 'ff63645b-38e2-4037-b795-3b987fa1f6ff',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '399233c8-2b3d-412e-bc5c-5aa28a090cc4',
            text: '#',
        },
        {
            id: '37e53bb3-00ba-4ab9-a043-3c75d4acc729',
            text: 'Instant Sanction',
        },
        {
            id: '3bdbc464-14eb-4577-8e8e-8684c078adec',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '4a03e175-bc83-469d-9f77-480cd4411bc4',
            text: '#',
        },
        {
            id: 'c657cc9b-bfd5-4066-b6e0-4d476173df52',
            text: 'Instant Sanction',
        },
        {
            id: 'c76798dd-d835-48f1-9bfb-7ac09f2bdc33',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            text: 'Komal Kumai',
        },
        {
            id: '9efa41c5-0835-4b8a-8818-a37278a61b36',
            text: '1',
        },
        {
            id: 'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            text: 'Delhi',
        },
        {
            id: '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
            text: '“Lorem ipsum dolor sit amet conse ctetur. Rhoncus nulla eleifend con sectetur id. Tellus eget sit in vi tae.”',
        },
        {
            id: 'a88308bc-376c-45f2-85b3-2e8f9a9b9741',
            text: 'Our customer’s reviews',
        },
        {
            id: '33dd9ea3-0f52-4be4-aade-3bf3e2acdd8c',
            text: '#',
        },
        {
            id: '8e607272-9108-4c75-ab5d-7fbf2913a4d0',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '57158435-ecfa-45ef-81b5-eef6ca1844ae',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '50ba1107-f14f-44bb-bfd4-82e83410c9a7',
            text: '#',
        },
        {
            id: '784f9e85-9717-493a-a71d-95894dfe93be',
            text: 'Confirm the details with our agent',
        },
        {
            id: '0686bf92-1335-43c1-99fb-08142a9710fc',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'a687a59c-7aa4-4f23-8fce-c3ec44fec6c8',
            text: '#',
        },
        {
            id: 'f05c3c8c-239a-4671-9369-2921b00711da',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '9434b255-4c4a-4cae-a566-d1fcb668865c',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '4f5e8630-b8d3-4301-bc09-667a62fcf6ac',
            text: '#',
        },
        {
            id: '8f596b54-c80b-48dc-9396-a1f8eb8a21ae',
            text: 'Fill the Loan Application Form ',
        },
        {
            id: '9216e635-1220-4465-9433-1d1a98c87ff3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '97d3b19c-c935-4419-a9d0-c569baeab6b9',
            text: 'Steps to take Home Loan',
        },
        {
            id: '5b6cfc5d-0123-48e3-9d4d-e572a2296387',
            text: 'Calculate Your EMI',
        },
        {
            id: 'a4f4926f-28e8-4e52-bb42-02e94f0a92e1',
            text: 'This calculator estimates your monthly home loan payments using your loan amount, tenure, and interest rate.',
        },
        {
            id: '8a86f873-6cb2-4660-86ea-747854391e38',
            text: 'EMI',
        },
        {
            id: '8964654f-7d64-4dff-a2ad-0214dc6a5bef',
            text: 'Eligibility',
        },
        {
            id: 'a634bb26-51e5-4bfd-8b17-1385952e6489',
            text: 'Affordability',
        },
        {
            id: '84e5ddab-1541-49ac-a5d0-f130ce83f05b',
            text: 'PMAY Subsidy',
        },
        {
            id: 'ee69d41d-fbaf-412d-bd3b-58a7a1a6f62b',
            text: 'Stamp duty',
        },
        {
            id: 'a31bd47d-4ce0-48c2-b68e-987fa002bec0',
            text: 'Tax benefit',
        },
        {
            id: 'b4eb45bc-c095-47d6-9f00-fcf2c143c603',
            text: 'Resource Center',
        },
        {
            id: '9d1ed014-a806-46c6-ae40-9f847bc045c6',
            text: 'Key Feaures & Benefits',
        },
        {
            id: '1da104c3-0bd5-4f46-b3eb-dc2cc9775be4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'c194e6f5-3d4f-414c-a28b-74af17cfcfab',
            text: 'Who can apply',
        },
        {
            id: 'a5cec791-38a3-43c0-a2b7-0f2c26d73211',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '0c91f169-c6e1-4b14-b31d-b2895060e591',
            text: 'Contact us',
        },
        {
            id: 'ccb98d63-bd8f-4006-b2b5-771e6639d080',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: '963edfc3-4539-4fe8-93d6-94d7d05d50f2',
            text: 'NRI Document Checklist',
        },
        {
            id: '26681065-dbae-4621-a160-e1db9d486c40',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            id: 'c7acc424-ad47-4e2e-be82-5d0283817aca',
            text: 'Discover Our Blogs',
        },
        {
            id: 'caeab850-ede2-4603-b2d0-507289e1dd05',
            text: '#',
        },
        {
            id: 'ef03b814-045a-4178-9705-8293660e6428',
            text: 'How It Works',
        },
        {
            id: '549826ff-1f5b-4734-9541-680a3f72f31a',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '8bcccb49-e243-4edd-b61d-3947e94e4b0b',
            text: '22 June',
        },
        {
            id: '5f31ac28-be9e-4a5e-a32d-d52315f66a9c',
            text: '#',
        },
        {
            id: '26212db3-af20-4460-ade5-341f34185bd5',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '10fccf13-d675-413b-9371-8c422e9f3ca6',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '22feef69-823c-4da9-892b-4f27ad9d1db6',
            text: '22 June',
        },
        {
            id: '58beff89-546a-4d7a-a5c2-0900b2c2e5c0',
            text: '#',
        },
        {
            id: 'e557b101-2af2-4dbc-91a8-49756b7777af',
            text: 'Home Loan Application Checklist',
        },
        {
            id: '540aa2a1-0f44-4ad7-a40f-0beb00f324ea',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '42f2b59d-0ed7-4966-becb-9b85b4e29d72',
            text: '22 June',
        },
        {
            id: '812827b5-3c76-4302-8d6d-0f4f936758be',
            text: '#',
        },
        {
            id: '0f2c122b-6f82-4620-ba39-bcbb4d3ed4a0',
            text: 'Refinancing Options',
        },
        {
            id: '4018a800-d5bd-41c2-872d-9a0f60b9c2dd',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: '670f6c82-2250-41e0-8da3-d37240485665',
            text: '22 June',
        },
        {
            id: '7a84123a-193f-4800-8493-aa2aa7f5b5c3',
            text: '#',
        },
        {
            id: '52a10949-0056-4594-a187-0da674acf58a',
            text: 'Tips for First-time Buyers',
        },
        {
            id: '4cea2ccf-17d5-4f46-8393-731ad4ebb35d',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'e9f131f6-668b-4f4f-ad71-f22891542802',
            text: '22 June',
        },
        {
            id: '51c360cf-1657-4f9c-900c-4be41345fdb7',
            text: '#',
        },
        {
            id: 'a079ef6d-6737-4a71-bf21-cebf9d740836',
            text: 'Home Loan Application Checklist',
        },
        {
            id: 'fddf975e-7001-42bf-bfaa-9c3178e192a7',
            text: 'Learn about the process of getting a home loan.',
        },
        {
            id: 'bdfa47fe-64e5-45a6-b8cb-045710e2b5a2',
            text: '22 June',
        },
        {
            id: '6f37ac14-2cb4-4b58-91b4-c08c02070bd1',
            text: 'News Corner',
        },
        {
            id: '96f01687-954e-4518-9313-555148a4e106',
            text: '#',
        },
        {
            id: '5e8b6d80-dce4-4dba-8a32-462545666711',
            text: '22 June',
        },
        {
            id: '2891fbe6-10f1-499e-bee2-3a2e0cb36ded',
            text: 'Ranked 20th among India’s Best Companies to Work For 2019',
        },
        {
            id: 'ae9c9a80-0b12-45c8-9599-03dfb19b43f8',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '8c7a7489-f072-4bc4-8994-3eb90042c928',
            text: 'Know more',
        },
        {
            id: 'ba4237eb-0274-40d8-97e8-490d9bbd50f8',
            text: '#',
        },
        {
            id: '0b1151a5-b6da-4d64-a916-001d9c7d821f',
            text: '#',
        },
        {
            id: '2e81e60f-48c8-4343-b874-1be7e39b9110',
            text: '22 july',
        },
        {
            id: '48fde03d-af7f-424b-98ba-ae31e2134f44',
            text: "Indiabulls Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: '74f11d7c-783d-47a6-ad38-d4080d0b8ae4',
            text: 'A study by Economic Times & Great Place to Work ® Institute',
        },
        {
            id: '78edf878-d839-401d-aaf1-df9744c5ba84',
            text: 'Know more',
        },
        {
            id: 'f6a32085-0bb0-4563-8195-b33a53d253b3',
            text: '#',
        },
        {
            id: '74e4fc34-d301-4e64-8080-7128171fa5dc',
            text: 'What are the stages involved in taking loan?',
        },
        {
            id: '474a7c23-2b32-4b9e-9394-9011c289864e',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'fa59bba3-164f-4f7c-9d11-0510e69e59f3',
            text: 'Who can apply for a home loan?',
        },
        {
            id: '69e3a01d-c0a5-40fd-b00c-16104118a3cd',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '5913acf8-ea36-4d82-8cf8-9261c79eeef4',
            text: 'When can you apply for a loan?',
        },
        {
            id: '4aa31ca7-8681-4928-9796-af3ee0179e2a',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 'aa388701-68e9-4cf7-b226-9a2932b235b3',
            text: 'What are the loan tenure options?',
        },
        {
            id: '9b95a4d0-d7a6-4070-9acf-8422421d8e88',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '9f57ec31-0199-4af2-987b-ab66ed64c7b4',
            text: 'Who can be the co-applicant for the loan?',
        },
        {
            id: '0cd55fb0-66ee-4e92-9f88-6ab241bb6466',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '3f922a6e-45f9-45f0-b34c-126c2724ac85',
            text: 'Need help?',
        },
        {
            id: 'b25c9826-0ff7-4ff2-85e8-2d3416fe915f',
            text: 'Get In Touch With Us',
        },
    ],
    productPortfolio: [
        ...footerStrings,
        ...headerStrings,
        ...needHelpString,
        {
            id: 'b2fa7cdd-49cf-409d-b96b-0f9021e80e9b',
            text: `One Destination <br /> Multiple Loans`,
        },
        {
            id: '5cadbfe5-3bd4-4c4a-b96e-c8bc26279adc',
            text: `Our wide range of loan products`,
        },
        {
            id: '5ef264ad-9586-4a0b-8140-2cc9fcdfedca',
            text: '',
        },
        {
            id: 'eb268dbd-cf19-4690-b0d1-ca219c5160ee',
            text: 'Need Help?',
        },
        {
            id: 'd3d236c3-8768-45e5-b2bf-101b2233e8c1',
            text: 'News Corner',
        },
        {
            id: '5513892e-83a8-4d41-a710-0f5af01a5ce4',
            text: 'New Home Loan',
        },
        {
            id: '9a815ab2-dcf5-4bbf-80e3-dea8d33acefb',
            text: '',
        },
        {
            id: '11ac6c4b-c7a1-4938-84b7-a6a1a726be04',
            text: 'Loan against Property',
        },
        {
            id: '88eacd21-ab3f-4ce6-9b95-332d4b737fc1',
            text: '',
        },
        {
            id: 'f347b987-60b8-4cdf-bcb0-5aebe7f293f8',
            text: 'Home Renovation',
        },
        {
            id: 'a9c88ca2-b471-46c5-a560-ebdf05ad0d0b',
            text: '',
        },
        {
            id: '82dd7dcc-8b32-47b8-aa6d-5f722170fc77',
            text: 'Apply Now',
        },
        {
            id: '23bed7c8-832f-4330-8b4d-e62f93f5fa93',
            text: 'Home Extension',
        },
        {
            id: '86b392ba-e03c-422a-9d34-cdfcb5b01aaa',
            text: '',
        },
        {
            id: '68a1a075-4085-4360-8143-7a44650d216d',
            text: 'Rural Home Loan',
        },
        {
            id: 'b6f62765-8983-413e-8468-cc2e34fe30ce',
            text: '',
        },
        {
            id: '25f02f85-8e64-4d7d-bba5-9f17eb6e3bee',
            text: 'NRI Home Loan',
        },
        {
            id: '9643c984-983e-4fbb-85e2-0116116411c1',
            text: '',
        },
        {
            id: '3c87c51b-5895-46e5-8d11-74b09f78fde9',
            text: 'Balance Transfer',
        },
        {
            id: 'd2c0aec0-a093-4808-954a-eeabc3907ffa',
            text: 'From 8.75%',
        },
        {
            id: 'd0bf8f56-87c3-4819-badc-90ea9046eba5',
            text: '4-step process',
        },
        {
            id: '06dee4a7-691d-4cae-a770-fbab544a88fa',
            text: '24X7 Support',
        },
        {
            id: '09a82303-b187-4fab-893f-fca3081af71c',
            text: 'Flexible Repayment Plans',
        },
        {
            id: '7ba6c582-3816-4702-9ffb-5c30e90ea78f',
            text: 'Home Loan with Sammaan',
        },
        {
            id: 'e9a6e7c8-9608-4220-841b-16a615edc663',
            text: "Sammaan Capital's Home Loan is your pathway to homeownership. With attractive interest rates and flexible repayment plans, we make your dream home a reality. Experience a hassle-free application process and step into the comfort and security of your own home with Sammaan Capital.",
        },
        {
            id: 'cd7deeb0-159e-4d05-a1f6-600deb800f4b',
            text: 'Plan your home with us',
        },
        {
            id: 'de61e6db-bba9-43b5-9a60-093b213c9cdc',
            text: '/',
        },
        {
            id: '4cc67408-0d1c-41a4-a77f-9e43338df9f6',
            text: '',
        },
        {
            id: '8ab25c1b-1109-4e84-abf5-fcf46dbb4314',
            text: 'Home Extension',
        },
        {
            id: '30c2be35-ee88-45dc-8b22-19635eacad02',
            text: "Maximize your property's value with our swift and convenient LAP.",
        },
        {
            id: 'f91d0ede-59af-494d-bc1d-371685b89764',
            text: 'Know more',
        },
        {
            id: '0b84e8fe-13c5-4280-8102-0b8fa4ab0013',
            text: '/',
        },
        {
            id: '03d81a90-5219-444e-9b03-9ae04bffff2d',
            text: '',
        },
        {
            id: '17068e64-fd69-436e-96ca-d609947e3702',
            text: 'Home Renovation Loan',
        },
        {
            id: '0976534d-c102-4adc-8f50-033059cfaa66',
            text: "Maximize your property's value with our swift and convenient LAP.",
        },
        {
            id: '09edfaba-eb87-41a9-b126-d4b8922d4411',
            text: 'Know more',
        },
        {
            id: '294d3c85-2d72-400b-ba77-3a4f9d2013f5',
            text: '',
        },
        {
            id: 'df8daa1f-94e6-4e5b-8396-8609b09dd806',
            text: 'Other Loans Related to Home',
        },
        {
            id: 'eecb6673-b289-4180-b515-a4cd1199cb3c',
            text: 'Loan against Property for you with Sammaan',
        },
        {
            id: 'ab6f7617-2f41-452f-9766-5ce71921b272',
            text: "Sammaan Capital's Home Loan is your pathway to homeownership. With attractive interest rates and flexible repayment plans, we make your dream home a reality. Experience a hassle-free application process and step into the comfort and security of your own home with Sammaan Capital.",
        },
        {
            id: 'f0cd08c3-6e72-47ba-9a5e-c9e601d06ab4',
            text: 'Plan your loan with us',
        },
        {
            id: '1fcc07be-9d45-4293-af6f-4883cacafebf',
            text: '/',
        },
        {
            id: 'd1b45061-af52-424d-ae78-074618683ab0',
            text: 'From 8.75%',
        },
        {
            id: 'bd937358-367d-4c53-8c3e-b975f52cd9dc',
            text: '4-step process',
        },
        {
            id: 'a26a9f9b-6ba0-4232-8b0b-e4e4e9f37497',
            text: '24X7 Support',
        },
        {
            id: '6be5913d-47b6-4706-9034-0e3de31aa1f6',
            text: 'Flexible Repayment Plans',
        },
        {
            id: '51ab076e-92cd-4e4a-a17f-e9cdf0d4b38c',
            text: '',
        },
        {
            id: '8073d45b-ee7a-4851-a6c9-3ff82465fba6',
            text: 'EMI Calculator',
        },
        {
            id: 'b8eae257-0cde-4142-abc6-60bc5c22fa45',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: 'e16c92ca-7f2c-4375-86fb-25e5caccd90f',
            text: 'Calculate Now',
        },
        {
            id: 'ca4813a4-4a9d-4db3-94fc-e984dd29d6a8',
            text: '',
        },
        {
            id: '8b89d37e-9afe-48bb-aeb8-e00988dad8bf',
            text: '',
        },
        {
            id: '6e4b410e-c27d-4451-9c32-c8445e1a6f65',
            text: 'Eligibility Calculator',
        },
        {
            id: '55e30f82-5aa0-4613-b91e-93e09a41fae8',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '76041965-0ae7-4c4c-aa2d-1e54971a92e1',
            text: 'Calculate Now',
        },
        {
            id: 'ef65fdb7-19e6-4524-9ef3-79518f2b32b3',
            text: '',
        },
        {
            id: '7758b211-7066-4160-9dac-dc6e4576fa4b',
            text: '',
        },
        {
            id: '72632872-f5dd-44c4-ab81-c0a0fe0eeeec',
            text: 'PMAY Subsidy Calculator',
        },
        {
            id: '03a8b50e-be39-4d87-b2b1-f89044f52b10',
            text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculator',
        },
        {
            id: '2dd1d851-8bb2-4eab-982d-0ee5ba5ad6b7',
            text: 'Calculate Now',
        },
        {
            id: 'af0ed049-a1a3-4316-bb02-db4d841a9db6',
            text: '',
        },
        {
            id: 'c828df99-1bbb-4357-afb7-c2780ddf3450',
            text: 'View All Calculators',
        },
        {
            id: '15c12807-f16a-4ab9-8297-5accf6db8d84',
            text: 'Calculate Your Loans',
        },
        {
            id: 'b17ebcd4-850c-42e9-a548-fc4782cf336f',
            text: '',
        },
        {
            id: '8b2b5287-8403-4576-a297-003f0f80d023',
            text: 'Know your Application Status',
        },
        {
            id: '4462b704-26af-411e-acf2-60a120833024',
            text: '',
        },
        {
            id: '7aaf2354-bb0a-4e50-b707-6149b7dcd90c',
            text: 'Request for repayment details ',
        },
        {
            id: '89546064-eee9-47cb-9591-5f6d91534df9',
            text: '',
        },
        {
            id: 'fe4d0e27-aa69-4e3c-8470-7cb547972e51',
            text: 'Get Loan Interest Certificate',
        },
        {
            id: '9a1fe332-9ed2-4a21-ba91-851d4f89cb3a',
            text: '',
        },
        {
            id: '2934447b-52a5-4ef2-967c-f95fff358b85',
            text: 'Request to change your contact details',
        },
        {
            id: '38678f58-fb47-42d8-bcda-fa95d0715bda',
            text: 'Manage your Loan',
        },
        {
            id: '7aaedd00-a98f-49b7-b187-84f65e93bfb2',
            text: 'Empower your financial journey with easy access to essential loan services',
        },
        {
            id: '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            text: 'Sachin',
        },
        {
            id: '4b9426fc-9926-4dfa-817f-fb0af5ab028c',
            text: '4',
        },
        {
            id: 'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            text: 'delhi',
        },
        {
            id: '0b213458-c6af-472e-8f56-f4986a95fd35',
            text: 'Exceptional experience! Streamlined process, competitive rates, and responsive customer support made securing my home loan a breeze.',
        },
        {
            id: 'ea3019f5-d3be-449b-951e-ead9fceab1d7',
            text: 'Loan Success Stories',
        },
        {
            id: 'aa675433-88ea-4177-bc3e-f139f31cc3f5',
            text: 'All',
        },
        {
            id: '6ff50e9f-71f6-4eaf-915f-803b662a2752',
            text: 'Partners',
        },
        {
            id: '732bfa75-7cfa-4bcb-85c3-74b43eda297d',
            text: 'Job Seekers',
        },
        {
            id: 'e18eb943-8e47-4803-8edd-f73ac571be8f',
            text: 'Investors',
        },
        {
            id: '46e2e380-709d-4ea2-90ca-62faf6daafb2',
            text: 'Insights for Astute Investors',
        },
        {
            id: '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
            text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
        },
        {
            id: 'b6ead393-0078-49a4-9f9f-04fa35c5be82',
            text: 'Discover Sammaan Capital',
        },
        {
            id: '16c4242d-0261-4a82-ab3c-3834b746a164',
            text: 'Read More Articles',
        },
        {
            id: '09a26d7b-7abb-406d-991b-b5a186bdef8a',
            text: 'News Corner',
        },
        {
            id: '76b65842-2676-4ed0-a178-1c8d26be2fc3',
            text: 'View All',
        },
        {
            id: '40a138bc-671a-4807-93a5-31c1beaf21b1',
            text: '',
        },
        {
            id: '133aec50-12a2-4e44-87d9-f76bd400746b',
            text: '22 Nov',
        },
        {
            id: '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            text: "Sammaan Capital Housing Finance's net profit up 2.94% in Q2 FY24",
        },
        {
            id: '9eac687c-743c-494f-9e74-843be35e7446',
            text: "Sammaan Capital  Housing Finance's net consolidated total...",
        },
        {
            id: '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            text: 'Know more',
        },
        {
            id: 'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            text: '',
        },
        {
            id: '9a1d90fe-5e53-4fee-86fe-05353dd198f2',
            text: `Download Our <br /> Sammaan Capital App`,
        },
        {
            id: 'f982d49b-0925-4bd8-8517-aea9d75c504a',
            text: 'Mobile Application',
        },
        {
            id: '6f78d225-5ccd-48eb-a99b-933b0408e304',
            text: 'Feature 1',
        },
        {
            id: '8e0388cc-c1f4-45c9-97a0-b843580a87ea',
            text: 'Mobile Application',
        },
        {
            id: '0ea652ba-6918-4716-ae45-631d9611441c',
            text: 'Feature 2',
        },
        {
            id: '442e0290-246e-4129-968c-09f50423593c',
            text: 'Mobile Application',
        },
        {
            id: 'd9882d9e-7d05-4e11-b001-5040966cef38',
            text: 'Feature 3',
        },
        {
            id: '68c89764-e212-45e6-9592-08f1e122f126',
            text: 'Mobile Application',
        },
        {
            id: '06644477-76ea-4c42-b4bb-2f52b69608af',
            text: 'Feature 4',
        },
        {
            id: '0cb1e9de-9371-4f6a-9e2b-a4f7efbc3f22',
            text: 'Download the App',
        },
        {
            id: 'cf1996bb-b003-40e7-b5bb-3c1e990115c5',
            text: 'Download app from',
        },
        {
            id: '52c16e93-73d9-4a46-8e9c-54bc2a01c9f5',
            text: 'Inquiry Gateway',
        },
        {
            id: 'ff040bef-f2da-44b8-afe6-0ef3440f4058',
            text: 'We’d love to help you.',
        },
        {
            id: 'd9dd30d8-0568-4a8d-ab85-30ace18a3056',
            text: 'Sammaan Capital',
        },
    ],
    eligibilityCalculator: [
        ...footerStrings,
        ...headerStrings,
        {
            id: '08a93f82-ca7e-4d27-bc1e-8a32f24dea3f',
            text: 'Calculate your Eligibility',
        },
        {
            id: '58f3cae9-f314-4099-9474-ffd22ac28516',
            text: 'Faqs',
        },
        {
            id: 'dca9c1bf-32e9-4ad7-897d-976ff34cedb1',
            text: 'This calculator estimates maximum loan amount based on income, tenure, interest rate, and existing EMIs for informed borrowing decisions.',
        },
        {
            id: 'ae404997-2c38-4918-acc6-6d58431f7fdc',
            text: 'About EMI Calculator',
        },
        {
            id: '1485efe2-6992-4b7b-bd23-9ced2f49bd79',
            text: 'An EMI (Equated Monthly Installment) calculator is a valuable financial tool designed to assist individuals in estimating their monthly loan repayment obligations. Users input essential details such as the principal loan amount, interest rate, and loan tenure into the calculator.',
        },
        {
            id: '6b0e82e1-490a-498e-bd2f-80d7a4e01a02',
            text: 'The tool then employs a formula, typically ( EMI = \frac{P \times r \times (1+r)^n}{(1+r)^n-1} ), to compute the fixed, equal monthly installment. This breakdown enables borrowers to gain a clear understanding of their anticipated monthly repayment amounts, facilitating informed financial planning and aiding in decision-making when considering loans.',
        },
        {
            id: '1f362712-9b15-47e2-8bfc-cdc72ad12581',
            text: 'EMI & Planning',
        },
        {
            id: '7470b126-05cc-41c6-9e5f-5bcd73295a00',
            text: 'EMI (Equated Monthly Installment) is a fixed monthly payment for loan repayment, covering both principal and interest. It serves as a cornerstone in financial planning, allowing borrowers to budget effectively and ensure timely repayments, contributing to a well-organized and sustainable financial strategy.',
        },
    ],
};

export function getVernacularFromBackend(
    pageName: string,
): Array<{id: string; text: string}> {
    return contentData[pageName];
}

export async function getData(
    ids: Array<string>,
): Promise<Array<{id: string; text: string}> | Error> {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    let selectQuery = 'SELECT * FROM  website_content WHERE content_id in ( ';
    ids.forEach(row => {
        const subPart = `'${row}'${row == ids[ids.length - 1] ? '' : ','}`;
        if (row != '') {
            selectQuery = selectQuery.concat(subPart);
        }
    });
    selectQuery = selectQuery.concat(')');

    // console.log("query> == ", selectQuery);

    const result = await postgresDatabaseManager.execute(selectQuery);

    // console.log("resutl == ", result)

    if (result instanceof Error) {
        console.log('Result rows', result);
        return result;
    }

    return result.rows.map((row: any) => {
        return {id: row.content_id, text: row.content};
    });
}

export async function getBlogs(ids) {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    let selectQuery = 'SELECT * FROM  blogs WHERE blog_id in ( ';
    ids.forEach(row => {
        const subPart = `'${row}'${row == ids[ids.length - 1] ? '' : ','}`;
        if (row != '') {
            selectQuery = selectQuery.concat(subPart);
        }
    });
    selectQuery = selectQuery.concat(')');

    const lead = await postgresDatabaseManager.execute(selectQuery);

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    return lead.rows.map(row => {
        return {
            imgLink: row.image_link,
            title: row.title,
            text: row.description,
            subText: row.created_on,
        };
    });
}

export async function getNews(ids: Array<string>) {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    let selectQuery = 'SELECT * FROM  news_corner WHERE news_id in ( ';
    ids.forEach(row => {
        const subPart = `'${row}'${row == ids[ids.length - 1] ? '' : ','}`;
        if (row != '') {
            selectQuery = selectQuery.concat(subPart);
        }
    });
    selectQuery = selectQuery.concat(')');

    const lead = await postgresDatabaseManager.execute(selectQuery);

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    return lead.rows.map(row => {
        return {
            image: row.image_link,
            title: row.title,
            text: row.description,
            date: row.created_on,
        };
    });
}

export async function getReviews(ids: Array<string>) {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    let selectQuery = 'SELECT * FROM  reviews WHERE review_id in ( ';
    ids.forEach(row => {
        const subPart = `'${row}'${row == ids[ids.length - 1] ? '' : ','}`;
        if (row != '') {
            selectQuery = selectQuery.concat(subPart);
        }
    });
    selectQuery = selectQuery.concat(')');

    const lead = await postgresDatabaseManager.execute(selectQuery);

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    return lead.rows.map(row => {
        return {
            video: row.video_link,
            name: row.name,
            rating: row.rating,
            description: row.description,
            location: row.location,
        };
    });
}

export async function getFaqs(ids) {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    let selectQuery = 'SELECT * FROM  faqs WHERE faq_id in ( ';
    ids.forEach(row => {
        const subPart = `'${row}'${row == ids[ids.length - 1] ? '' : ','}`;
        if (row != '') {
            selectQuery = selectQuery.concat(subPart);
        }
    });
    selectQuery = selectQuery.concat(')');

    const lead = await postgresDatabaseManager.execute(selectQuery);

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    return lead.rows.map(row => {
        return {question: row.question, answer: row.answer};
    });
}

export async function getProjects() {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    const lead = await postgresDatabaseManager.execute(
        'SELECT * FROM projects',
    );

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    return lead.rows.map(
        (row: {
            project_id: string;
            image_link: string;
            project_name: string;
            address: string;
            location: string;
        }) => {
            return {
                imageUrl: row.image_link,
                projectName: row.project_name,
                address: row.address,
                location: row.location,
            };
        },
    );
}
