const data = {
    2022: {
        01: {
            Wouter: 1, // 03-01 (& Jisk door Jorik+Ricardo)
            Jisk: 1 // 03-01 (& Wouter door Jorik+Ricardo)
        },
        02: {
            Wouter: 2, // 08-02 (& Stan door Jelle+Beau) + 08-02 (& Kevin door Jelle+Beau)
            Stan: 1, // 08-02 (& Wouter door Jelle+Beau)
            Kevin: 1, // 06-02 (& Wouter) door Jelle+Beau;
        },
        03: {
            Wouter: 3, // 08-03 (& Stan door Jelle+Joël) + 17-03 (& Kevin door Ricardo+Joël; 3-10 achter elkaar) + 22-03 (& Joël door Erwin+Stan; 9-10 verliezer kruipt)
            Stan: 1, // 08-03 (& Wouter door Jelle+Joël)
            Joël: 3, // 07-03 (& Ricardo door Stan+Wouter; 6-10 achter elkaar) + 08-03 (& Maarten door Jelle+Wouter) + 22-03 (& Wouter door Erwin+Stan; 9-10 verliezer kruipt)
            Ricardo: 1, // 07-03 (& Joël door Stan+Wouter; 6-10 achter elkaar)
            Maarten: 1, // 08-03 (& Joël door Jelle+Wouter)
            Kevin: 1, // 17-03 (& Wouter door Ricardo+Joël; 3-10 achter elkaar)
            Beau: 1, // 31-03 (& Robin door Jelle+Ricardo)
            Robin: 1 // 31-03 (& Beau door Jelle+Ricardo)
        },
        04: {
            Stan: 1, // 11-04 (& Joey door Joël+Ricardo; 1-10 achter elkaar)
            Joey: 1, // 11-04 (& Stan door Joël+Ricardo; 1-10 achter elkaar)
            Maarten: 1, // 12-04 (door Beau)
            Beau: 1, // 25-04 (& Daan door Jorik+Ricardo)
            Daan: 1, // 25-04 (& Beau door Jorik+Ricardo)
            Ricardo: 1, // 28-04 (& Kevin door Jelle+Beau)
            Kevin: 1, // 28-04 (& Ricardo door Jelle+Beau)
            Cristhian: 1, // 28-04 (& Stan door Beau+Erwin)
            Stan: 1 // 28-04 (& Cristhian door Beau+Erwin)
        },
        05: {
            Kevin: 1, // 12-05 (& Joël door Beau+Ricardo)
            Joël: 2, // 12-05 (& Kevin door Beau+Ricardo) + 23-05 (& Stan door Jelle+Jorik)
            Ricardo: 1, // 19-05 (& Cristhian door Beau+Joël)
            Cristhian: 1, // 19-05 (& Ricardo door Beau+Joël)
            Stan: 1, // 23-05 (& Joël door Jelle+Jorik)
        },
        06: {
            Beau: 2, // 02-05 (& Kevin door Jelle+Joël) + 02-06 (& Joël door Jelle+Erwin)
            Kevin: 2, // 02-06 (& Joël door Jelle+Beau) + 02-06 (& Beau door Jelle+Joël)
            Joël: 2, // 02-06 (& Kevin door Jelle+Beau) + 02-06 (& Beau door Jelle+Erwin)
        },
        07: {
            Daan: 1, // 18-07 (& Jorik door Beau+Joël)
            Jorik: 1, // 18-07 (& Daan door Beau+Joël)
        },
        09: {
            Kevin: 1, // 12-09 (& Ricardo door Jelle+Jorik)
            Ricardo: 2, // 12-09 (& Kevin door Jelle+Jorik) + 20-09 (& Stan door Beau+Joël 7-10 achter elkaar)
            Stan: 1, // 20-09 (& Ricardo door Beau+Joël 7-10 achter elkaar)
        },
        10: {
            Stan: 4, // 03-10 (& Joël door Beau+Ricardo) + 06-10 (& Kevin) door Jelle+Ricardo + 20-10 (& Erwin) door Kevin+Ricardo + 27-10 (& Joël door Kevin+Beau)
            Joël: 3, // 03-10 (& Stan door Beau+Ricardo) + 04-10 (& Stan) door Ricardo+Stan + 27-10 (& Stan door Kevin+Beau)
            Maarten: 1, // 04-10 (& Joël) door Ricardo+Stan
            Kevin: 2, // 06-10 (& Stan) door Jelle+Ricardo + 20-10 (& An) door Beau+Jorik
            An: 1, // 20-10 (& Kevin) door Beau+Jorik
            Erwin: 1, // 20-10 (& Stan) door Kevin+Ricardo
            // Ricardo + Kevin: 1 // 31-10 door Jelle [solo]
        },
        11: {
            Kevin: 1, // 01-11 (& An) door Beau+Ricardo
            An: 1, // 01-11 (& Kevin) door Beau+Ricardo
            Joël: 1, // 03-11 (& Beau) door Ricardo+Jelle
            Beau: 1, // 03-11 (& Joël) door Ricardo+Jelle
            Jelle: 1, // 🥳 08-11 (& Karin) door Kevin+Ricardo
            // Karin: 1, // 08-11 (& Jelle) door Kevin+Ricardo [niet gekropen]
        },
        12: {
            // Jorik: 1, // 05-12 (Geweigerd kruipen na verlaten potje!)
            Joël: 1, // 22-12 (& Max) door Jelle+Erwin
            Max: 1, // 22-12 (& Joël) door Jelle+Erwin
            Ricardo: 1, // 22-12 (& An) door Jelle+Beau
            An: 1, // 22-12 (& Ricardo) door Jelle+Beau
        },
        weigeraars: {
            Stan: 1, // 02-06 (geweigerd kruipen tegen Jelle+Beau)
            Sophie: 1, // 02-06 (geweigerd kruipen tegen Jelle+Beau)
            Jelle: 1, // 31-05 (Geweigerd kruipen; potje verlaten door telefoontje)
            Beau: 2, // 01-08 (geweigerd kruipen na verlaten potje); 02-08 (& Ricardo) door Jelle+Jorik multiplier 13-1 verloren;
            Ricardo: 1, // 02-08 (& Beau) door Jelle+Jorik multiplier 13-1 verloren;
        },
    },
    2023: {
        01: {
            An: 1, // 05-01 (& Max) door Kevin+Beau;
            Max: 1, // 05-01 (& An) door Kevin+Beau;
        },
        02: {
            Kevin: 1, // 14-02 (& Marijn) door Jelle+An;
            Marijn: 1, // 14-02 (& Kevin) door Jelle+An;
            Joël: 1, // 23-02 (& An) door Jelle+Marijn; (Onofficieel: 14-02 Even meegespeeld met Kevin&Marijn);
            An: 1, // 23-02 (& Joël) door Jelle+Marijn;
        },
        03: {
            An: 3, // 07-03 (& Ricardo) door Jelle+Beau; 16-03 (& Jasper) door Jelle+Marijn; 16-03 (& Jelle) door Ricardo+Beau;
            Ricardo: 1, // 07-03 (& An) door Jelle+Beau;
            Jasper: 1, // 16-03 (& An) door Jelle+Marijn;
            Jelle: 1, // 🥳 16-03 (& An) door Ricardo+Beau;
        },
        05: {
            Ricardo: 1, // 01-05 (& Marijn) door Beau+Jorik;
            Marijn: 2, // 01-05 (& Ricardo) door Beau+Jorik; 1x-05 (& Jasper) door Beau+Ricardo;
            Jasper: 1, // 1x-05 (& Marijn) door Beau+Ricardo;
        },
        06: {
            Jasper: 1, // 01-06 (& An) door Jelle+Marijn;
            An: 2, // 01-06 (& Jasper) door Jelle+Marijn; 27-06 (& Beau) door Joël+Ricardo;
            Marijn: 1, // 06-06 door Jelle+Kevin;
            Beau: 2, // 06-06 (& Marijn) door Jelle+Kevin; 27-06 (& An) door Joël+Ricardo;
        },
        07: {
            Joël: 1, // 17-07 (& Kevin) door Jelle+Marijn;
            Kevin: 1, // 17-07 (& Joël) door Jelle+Marijn;
            An: 1, // 25-07 (& Janoeska) door Jelle+Beau;
        },
        09: {
            Kevin: 1, // 14-09 (& Jorik) door Jelle+Marijn;
            Jorik: 2, // 14-09 (& Kevin) door Jelle+Marijn; 28-09 (& An) door Jelle+Joël;
            An: 1, // 28-09 (& Jorik) door Jelle+Joël;
        },
        10: {
            Beau: 1, // 05-10 (& Janoeska) door Jelle+Marijn; 12-10 (& An) door Ricardo+Jorik
            An: 1, // 12-10 (& Beau) door Ricardo+Jorik;
            Janoeska: 1, // 19-10 (& Marijn) door Ricardo+An;
            Marijn: 2, // 19-10 (& Janoeska) door Ricardo+An; 31-10 (& Jelle) door Ricardo+Beau;
            Jelle: 1, // 31-10 (& Marijn) door Ricardo+Beau;
        },
        11: {
            Joël: 1, // 14-01 (& An) door Marijn+Beau;
            An: 2, // 14-01 (& Joël) door Marijn+Beau; 16-01 (& Janoeska) door Marijn+Beau;
            Janoeska: 1, // 16-01 (& An) door Marijn+Beau;
        },
        weigeraars: {
            Marijn: 1, // 27-02 door Jelle;
            An: 2, // 16-03 (& Beau) door Ricardo+Jelle; 10-08 (& Janoeska) door Ricardo+Beau;
            Beau: 2, // 16-03 (& An) door Ricardo+Jelle; 28-06 (& Erwin) door Jelle+An;
            Erwin: 1, // 28-06 (& Beau) door Jelle+An;
            Janoeska: 3, // 25-07 (& An) door Jelle+Beau; 10-08 (& An) door Ricardo+Beau; 05-10 (& Beau) door Jelle+Marijn;
        },
    },
    2024: {
        01: {
            Kevin: 2, // 18-01 (& An) door Jelle+Jasper; 18-01 (& An) door Jelle+Beau;
            An: 3, // 18-01 (& Kevin) door Jelle+Jasper; 18-01 (& Marijn) door Beau+Janoeska; 18-01 (& Kevin) door Jelle+Beau;
            Marijn: 2, // 18-01 (& An) door Beau+Janoeska; 25-01 (& Shaldi) door Beau+An;
            Joël: 1, // 25-01 (& Jorik) door Beau+Ricardo;
            Jorik: 1, // 25-01 (& Joël) door Beau+Ricardo;
            Shaldi: 1, // 25-01 (& Marijn) door Beau+An;
        },
        02: {
            Shaldi: 1, // 06-02 (& Brandon) door Marijn+Janoeska;
            Brandon: 2, // 06-02 (& Shaldi) door Marijn+Janoeska; 26-02 (& Ricardo) door Beau+Kevin;
            Marijn: 3, // 08-02 (& An) door Jelle+Janoeska; 27-02 (& An) door Beau+Brandon; 29-02 (& Beau) door Jelle+An;
            An: 2, // 08-02 (& Marijn) door Jelle+Janoeska; 27-02 (& Marijn) door Beau+Brandon;
            Ricardo: 1, // 26-02 (& Brandon) door Beau+Kevin;
            Beau: 1, // 29-02 (& Marijn) door Jelle+An;
        },
        03: {
            Brandon: 1, // 04-03 (& Thomas) door Lars+Marijn;
            Kevin: 1, // 26-03 (& Beau) door Jelle+An;
            Beau: 1, // 26-03 (& Kevin) door Jelle+An;
        },
        04: {
            An: 1, // 04-04 (& Marijn) door Jelle+Janoeska;
            Marijn: 2, // 04-04 (& An) door Jelle+Janoeska; 09-04 (& Brandon) door Kevin+Janoeska;
            Brandon: 1, // 09-04 (& Marijn) door Kevin+Janoeska;
        },
        05: {
            An: 1, // 06-05 (& Brandon) door Ricardo+Jorik;
            Brandon: 1, // 06-05 (& An) door Ricardo+Jorik;
        },
        06: {
            An: 1, // 24-06 (& Marijn door Jelle+Joël)
            Marijn: 1, // 24-06 (& An door Jelle+Joël)
        },
        07: {
            Kevin: 1, // 08-07 (& Joël) door Ricardo+Lars;
            Joël: 1, // 08-07 (& Kevin) door Ricardo+Lars;
            Lars: 1, // 18-07 (& Brandon) door Jelle+An
            Brandon: 1, // 18-07 (& Lars) door Jelle+An
            An: 1, // 23-07 (& Lennart) door Ricardo+Brandon;
            Lennart: 1, // 23-07 (& An) door Ricardo+Brandon;
        },
        08: {
            Ricardo: 1, // 15-08 (& Thomas) door Brandon+Lars;
            Thomas: 1, // 15-08 (& Ricardo) door Brandon+Lars;
            Jorik: 1, // 23-08 (& Lars) door Ricardo+Stan;
            Lars: 1, // 23-08 (& Jorik) door Ricardo+Stan;
            An: 1, // 28-06 (& Beau) door Jelle+Lars
            Beau: 1, // 26-08 (& An) door Jelle+Lars
        },
        09: {
            Lars: 1, // 09-09 (& An) door Jelle+Marijn;
            An: 1, // 09-09 (& Lars) door Jelle+Marijn;
        },
        10: {
            Marijn: 1, // 03-10 (& Jasper) door Lars+An;
            Jasper: 1, // 03-10 (& Marijn) door Lars+An;
            An: 1, // 07-10 (& Brandon) door Jorik+Ricardo;
            Brandon: 1, // 07-10 (& An) door Jorik+Ricardo;
        },
        11: {
            Diederik: 1, // 07-11 (& An) door Beau+Jelle;
            An: 1, // 07-11 (& Diederik) door Beau+Jelle;
            Brandon: 1, // 19-11 (& Marijn) door Beau+Jelle;
            Marijn: 1, // 19-11 (& Brandon) door Beau+Jelle;
        },
        weigeraars: {
            Thomas: 1, // 04-03 (& Brandon) door Lars+Marijn;
        },
    },
    2025: {
        01: {
            Marijn: 1, // 14-01 (& Jasper) door Jelle+An;
            Jasper: 2, // 14-01 (& Marijn) door Jelle+An; 30-01 (& Jelle) door Beau+Lars;
            Jorik: 1, // 16-01 (& Brandon) door Jelle+An;
            Brandon: 1, // 16-01 (& Jorik) door Jelle+An;
            Jelle: 1, // 30-01 (& Jasper) door Beau+Lars;
        },
        02: {
            An: 1, // 11-02 (& Lars) door Jelle+Marijn;
            Lars: 2, // 11-02 (& An) door Jelle+Marijn; 27-02 (& Jasper) door Jelle+Marijn;
            Stan: 1, // 26-02 (& Stefan) door Jelle+Jasper;
            Stefan: 1, // 26-02 (& Stan) door Jelle+Jasper;
            Jasper: 1, // 27-02 (& Lars) door Jelle+Marijn;
        },
        04: {
            Marijn: 1, //07-04 (& Brandon) door Lars+Michel;
            Brandon: 1, //07-04 (& Marijn) door Lars+Michel;
            An: 1, // 08-04 (& Ricardo) door Jelle+Beau;
            Ricardo: 1, // 08-04 (& An) door Jelle+Beau;
        },
        06: {
            Brandon: 2, // 02-06 (& Mike) door Jorik+Marijn; 02-06 (& Marijn) door Jorik+Jelle;
            Mike: 1, // 02-06 (& Brandon) door Jorik+Marijn;
            Marijn: 1, // 02-06 (& Brandon) door Jorik+Jelle;
        },
        07: {
            Marijn: 1, // 03-07 (& Jasper) door Beau+Lars;
            Jasper: 1, // 03-07 (& Marijn) door Beau+Lars;
            An: 1, // 21-07 (& Jorik) door Brandon+Ricardo;
            Jorik: 1, // 21-07 (& An) door Brandon+Ricardo;
            Igor: 1, // 31-07 (& Stefan) door An&Beau;
            Stefan: 1, // 31-07 (& Igor) door An&Beau;
        },
        08: {
            Boyd: 2, // 07-08 (& Brandon) door Jasper+Lars; 07-08 (& Reno) door Brandon+Lars;
            Brandon: 1, // 07-08 (& Boyd) door Jasper+Lars;
            Reno: 1, // 07-08 (& Boyd) door Brandon+Lars;
            Igor: 1, // 26-08 (& Mike) door Boyd+Ricardo;
            Mike: 1, // 26-08 (& Igor) door Boyd+Ricardo;
            Denise: 1, // 28-08 (& Jelmer) door An+Jelle;
            Jelmer: 1, // 28-08 (& Denise) door An+Jelle;
            Rudwan: 1, // 29-08 (& Sander) door Lars+Ricardo;
            Sander: 1, // 29-08 (& Rudwan) door Lars+Ricardo;
        },
        09: {
            Jelmer: 6, // 2-09 (& Mike) door An+Beau; // 10-09 (& Maartje) door Lars+Boyd; // 24-09 (& Stefan) door Lars+Jasper; // 25-09 (solo) door Beau; // 30-09 (& Mike) door Beau+Igor; // 30-09 (& Stefan) door Beau+Mike;
            Mike: 5, // 2-09 (& Jelmer) door An+Beau; // 15-09 (& Brandon) door Lars+Jorik; // 15-09 (& Igor) door Ricardo+Lars; // 19-09 (& Igor) door Jorik+Ricardo; // 30-09 (& Jelmer) door Beau+Igor;
            Maartje: 2,  // 10-09 (& Jelmer) door Lars+Boyd; // 19-09 (& Sander) door Lars+Jorik;
            An: 1, // 12-09 (& Kevin) door Jelle+Jasper;
            Kevin: 1, // 12-09 (& An) door Jelle+Jasper;
            Brandon: 1, // 15-09 (& Mike) door Lars+Jorik;
            Igor: 2, // 15-09 (& Mike) door Ricardo+Lars; // 19-09 (& Mike) door Jorik+Ricardo;
            Rudwan: 1, // 16-09 (& Beau) door Jasper+Ricardo;
            Beau: 1, // 16-09 (& Rudwan) door Jasper+Ricardo;
            Sander: 1,  // 19-09 (& Maartje) door Lars+Jorik;
            Stefan: 2,  // 24-09 (& Jelmer) door Lars+Jasper; // 30-09 (& Jelmer) door Beau+Mike;
        },
        10: {
            Mike: 3, // 02-10 (& Stefan) door Jelmer+Beau; // 20-10 (& Igor) door An+Beau; // 30-10 (& Brandon) door Beau+Jorik;
            Stefan: 4, // 02-10 (& Mike) door Jelmer+Beau; // 16-10 (& Marijn) door Ricardo+Boyd; // 16-10 (& Reno) door Lars (solo); // 23-10 (& Igor) door Lars+Brandon;
            Jelmer: 3, //06-10 (Hakbijl gooien) door Mike; // 27-10 (& Igor) door Lars+Beau;
            Marijn: 1, // 16-10 (& Stefan) door Ricardo+Boyd;
            Reno: 1, // 16-10 (& Stefan) door Lars (solo);
            Igor: 3, // 20-10 (& Mike) door An+Beau; // 23-10 (& Stefan) door Lars+Brandon // 27-10 (& Jelmber) door Lars+Beau;
            Brandon: 1, // 30-10 (& Mike) door Beau+Jorik;
        },
        11: {
            Mike: 4,  // 4-11 (& Stefan) door Beau+Marijn; // 20-11 (& Stefan) door Beau+Jasper // 24-11 (&Jelmer) door Beau+Marijn // 27-11(& Brandon) door Igor+Ricardo
            Stefan: 3, // 06-11 (& Jelmer) door Marijn+Boyd; // 4-11 (& Mike) door Beau+Marijn; // 20-11 (& Mike) door Beau+Jasper
            Jelmer: 4, // 06-11 (& Stefan) door Marijn+Boyd; // 10-11 (& Brandon) door An+Beau; // 10-11 (& Jorik) door Brandon+Beau; // 24-11 (& Mike) door Beau+Maartje
            Brandon: 4, // 10-11 (& Jelmer) door An+Beau; // 20-11 (& Igor) door Lars+Beau; // 20-11 (& Igor) door Mike+Ricardo; // 27-11 (& Mike) door Igor+Ricardo
            Jorik: 1, // 10-11 (& Jelmber) door Brandon+Beau;
            Igor: 3, // 13-11 (& Reno) door An+Beau; // 20-11 (& Brandon) door Lars+Beau; // 20-11 (& Brandon) door Mike+Ricardo;
            Reno: 2, // 13-11 (& Igor) door An+Beau; // 13-11 (& Floor) door Beau+Denise;
            Floor: 1, // 13-11 (& Reno) door Beau+Denise;
        },
        12: {
            Jelmer: 5, // 01-12 (& Marijn) door Lars+Boyd; 03-12 (& Jasper) Door Lars+Rick; 04-12 (& Stefan) Door Lars+Marijn; 11-12 (& Brandon) door Beau+Jorik; 15-12 (& Stefan) door Beau+Marijn;
            Marijn: 3, // 01-12 (& Jelmer) Door Lars+Boyd; 09-12 (& Mike) Door Beau+Ricardo; 09-12 (& Mike) Door Beau+Ricardo;
            Jasper: 1, // 03-12 (& Jelmer) Door Lars+Rick;
            Stefan: 6, // 04-12 (& Jelmer) Door Lars+Marijn; // 08-12 (& Mike) Door Beau+Jorik; // 11-12 (& Reno) door Beau+Denise; // 15-12 (& Jelmer) door Beau+Marijn; // 23-12 (& Igor) door Marijn+Ricardo;
            Mike: 3, // 08-12 (& Stefan) Door Beau+Jorik; 09-12 (& Marijn) Door Beau+Ricardo; 09-12 (& Marijn) Door Beau+Ricardo;
            Reno: 1, // 11-12 (& Stefan) door Beau+Denise;
            Brandon: 1, // 11-12 (& Jelmer) door Beau+Jorik;
            Igor: 1, // 23-12 (& Stefan) door Marijn+Ricardo;
        },
    },
    2026: {
        01: {
            Igor: 1, // 12-01 (& Stefan) door Jorik+Mike
            Stefan: 5, // 12-01 (& Igor) door Jorik+Mike; // 12-01 (& Marijn) door Beau+Mike; // 12-01 (& Mike) door Beau+Marijn; // 12-01 (& Mike) door Beau+Marijn // 22-01 (& BoydF) door Jorik+Mike;
            Marijn: 1, // 12-01 (& Stefan) door Beau+Mike
            Mike: 2, // 12-01 (& Stefan) door Beau+Marijn; // 12-01 (& Stefan) door Beau+Marijn
            BoydF: 1, // 22-01 (& Stefan) door Jorik+Mike;
        },
        02: {
            Jasper: 1, // 04-02 (& Jelmer) door Sander+Lars;
            Jelmer: 2, // 04-02 (& Jasper) door Sander+Lars; // 04-02 (& Stefan) door Jasper+Lars
            Stefan: 1, // 04-02 (& Jelmer) door Jasper+Lars
        },
    },
};
