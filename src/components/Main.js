import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import photo1 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (1).jpg";
import photo2 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (2).jpg";
import photo3 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (3).jpg";
import photo4 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (4).jpg";
import photo5 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (5).jpg";
import photo6 from "../kuruyemis/PHOTO-2021-08-09-20-47-34.jpg";
import photo7 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (1).jpg";
import photo8 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (2).jpg";
import photo9 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (3).jpg";
import photo10 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (4).jpg";
import photo11 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (5).jpg";
import photo12 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (6).jpg";
import photo13 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (7).jpg";
import photo14 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (8).jpg";
import photo15 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (9).jpg";
import photo16 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (10).jpg";
import photo17 from "../kuruyemis/PHOTO-2021-08-09-20-47-35.jpg";
import photo18 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (1).jpg";
import photo19 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (2).jpg";
import photo20 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (3).jpg";
import photo21 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (4).jpg";
import photo22 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (5).jpg";
import photo23 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (6).jpg";
import photo24 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (7).jpg";
import photo25 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (8).jpg";
import photo26 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (9).jpg";
import photo27 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (10).jpg";
import photo28 from "../kuruyemis/PHOTO-2021-08-09-20-47-36.jpg";
import photo29 from "../kuruyemis/PHOTO-2021-08-09-20-47-37 (1).jpg";
import photo30 from "../kuruyemis/PHOTO-2021-08-09-20-47-37.jpg";
import Erzincan_tulum from "../kuruyemis/Erzinjan_tulum_peynir.PNG";
import Kabak_chekirdegi from "../kuruyemis/Kabak_chekirdegi.PNG";
import Tarhana_chips from "../kuruyemis/Tarhana_chips.PNG";
import Nar_eksisi from "../kuruyemis/Nar_eksisi.PNG";
import refa_gida from "../kuruyemis/refa_gida.png";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright ?? "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const items = [
  { id: 1, serial_number:"001",image: photo1, name:'Antep fistikli fitil lokum', description: "Do??al pancardan ??retilen S??tl?? Antep f??st??kl?? fitil lokumlar??m??z farkl?? g??r??nt??s?? ve tad??yla keyifle t??ketebilece??iniz, k??lt??r??m??z??n vazge??ilmez lezzetlerinden birisi haline gelmi??tir. Lokumlar??m??z do??al yollar ile ??retilir ve en taze katk??s??z haliyle siz m????terilerimize sunulmak i??in haz??rlan??r.", price: 13 },
  { id: 2, serial_number:"002",image: photo2, name:'Sumak', description: "Adana dan getirdigimiz me??hur suma??imiz ek??imsi tad?? ve m??kemmel kokusuyla mutfa????n??z??n vazge??ilmezi olacak ", price: 10 },
  { id: 3, serial_number:"003",image: photo3, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 4, serial_number:"004",image: photo4, name:'Fistik Ezmesi', description: "Gaziantepte yeti??en Antep F??st??klar??n??n do??al y??ntemlerle ezilmesi ve belirli oranda ??eker ile kar????t??r??lmas?? sonucu haz??rlanan bir ??ekerlemiz i??in", price: 14 },
  { id: 5, serial_number:"005",image: photo5, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 6, serial_number:"006",image: photo6, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 7, serial_number:"007",image: photo7, name:'Fistikli, Meyveli Fitil Lokum', description: "F??st??kl?? , meyveli fitil lokum ; hem de glikoz kullan??lmadan saf ??eker pancar?? ile ??retilen bu lezzeti sizler de tatmak ister misiniz ??????", price: 13 },
  { id: 8, serial_number:"008",image: photo8, name:'Manisa U?? Yapra???? Salamura', description: "Manisa U?? Yapra???? Salamurasi. Hem do??al, hem ince damarl??, hem kolay pi??er olmal?? diyorsan??z isteyin g??nderelim ", price: 10 },
  { id: 9, serial_number:"009",image: photo9, name:'Baklava Ozel Kare', description: "Tatl?? dendi??inde ilk akla gelen tatl??lar??n y??ld??z?? olan baklavad??r. F??st??k lezzetini ve aromas??n?? ??ok yo??un bir ??ekilde hissedebilece??iniz bu muhte??em lezzet f??st??kl?? baklava tatl??s??n?? tamam?? do??al ve taze malzemeler ile ??retip sizlere ula??t??r??l??yoruz.", price: 19 },
  { id: 10, serial_number:"010",image: photo10, name:'F??st??k Ezmesi(Fistik Dolama)', description: "Antep' in en kaliteli i?? f??st??????n?? ve do??al pancar ??ekerini sevgiyle yo??urduk , baklavay?? aratmayacak bu lezzetle sizde tan????mak ister misiniz ?", price: 20 },
  { id: 11, serial_number:"011",image: photo11, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 12, serial_number:"012",image: photo12, name:'Ye??il Zeytin', description: "Meyveleri iri ve ??ekirdekleri orta b??y??kl??kte olup, %24,7 oran??nda ya?? i??erir. Zeytinya???? ise alt??n sar??s?? renginde, meyve kokusu i??eren, ho?? kokulu, kimyasal ve duyusal ??zellikleri bak??m??ndan birinci s??n??fta yer alan zeytindir.", price: 9 },
  { id: 13, serial_number:"013",image: photo13, name:'Antep F??st??kl?? Muska', description: "Gaziantep y??resel ??z??m pekmezinden elde etti??imiz pestilimiz ve Antep f??st??????n??n birle??mesiyle ortaya ????kan nefis bir lezzet. farkl?? gramaj se??enekleri ile ile bir t??kla kap??nda.", price: 13 },
  { id: 14, serial_number:"014",image: photo14, name:'F??nd??kl?? Rulo Pestil Sarmas??', description: "G??m????hane???nin y??resel lezzetlerinden muhte??em lezzete sahip olan pestil sarmas?? , pestilin kendine has lezzetini ve aramas??n?? net bir ??ekilde hissetmenizi sa??l??yor. ??zellikle f??nd??k tad??ndan ho??lananlar?? adeta mest eden sa??l??kl?? bir at????t??rmal??k .", price: 13 },
  { id: 15, serial_number:"015",image: photo15, name:'Midye Baklava', description: "F??st??kl?? Baklava???n??n en sevilenlerinden, baklava???n??n yeni y??z?? ???F??st??kl?? Midye Baklava ??? tatl??severlerin ??nce g??zlerini Sonra Kalplerini Mutlu Ediyor.", price: 19 },
  { id: 16, serial_number:"016",image: photo16, name:'Kahramanmaras toz biber', description: "Yemeklerinizin lezzetine lezzet katacak e??siz aromas?? ve ac??s?? ile Kahramanmara??'??n me??hur toz biberini kendi diyar??ndan sofran??za getiriyoruz.", price: 10 },
  { id: 17, serial_number:"017",image: photo17, name:'Gaziantep usul?? cevizli baklava', description: "Antep y??resine has lezzeti ve i????ili??iyle be??enilen tatl??lar aras??nda bulunan Gaziantep usul?? cevizli baklavam??z?? sizlere de ikram etmek istiyoruz. Cevizli baklavam??z haz??rlan??rken i??erisinde kullan??lan yerli ??retim cevizler kullan??lm????t??r.", price: 13 },
  { id: 18, serial_number:"018",image: photo18, name:'Kabuksuz Antep Fistigi', description: "Birinci kalite Antep f??st??????n??n kabuklar??ndan ayr????t??r??lmayla elde edilen ye??ilinin en g??zel tonuna sahip Boz i?? f??st??klar??m??z?? nefis kokusu ve tad??yla taptaze sizlere sunuyoruz.", price: 13 },
  { id: 19, serial_number:"019",image: photo19, name:'Domates Salcasi Katkisiz Guneste Kurutulmus', description: "Antalya'l?? kad??nlar??n el eme??iyle yap??lm???? katk??s??z ve %100 do??al g??ne??te kurutulmu?? domates sal??as??.", price: 11 },
  { id: 20, serial_number:"020",image: photo20, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 21, serial_number:"021",image: photo21, name:' Da?? ??nciri', description: "Egenin incisi Ayd??n ??ncirliova'n??n da??l??k b??lgelerinde yeti??en Nat??rel Da?? ??nciri ve %100 do??al kendi dal??nda kurumu??tur.", price: 13 },
  { id: 22, serial_number:"022",image: photo22, name:'Cevizli Sucuk', description: "Anadolu tatl?? k??lt??r??n??n ??nemli bir ????esi Cevizli Sucuk ; ??z??mden elde edilen ????ra ve ceviz kullanilarak yap??l??r , baz?? y??relerde K??me ve Orcik ad??yla bilinen bu enfes tat bir t??kla kap??nda", price: 12 },
  { id: 23, serial_number:"023",image: photo23, name:'Tarhana', description: "Miss gibi Tarhana. Kendi el eme??imizle sevgimizi katarak ??retti??imiz tarhanalar??m??z?? t??m d??nyaya ula??t??r??yoruz.", price: 10 },
  { id: 24, serial_number:"024",image: photo24, name:'Antep Fistigi', description: "Damaklar??n vazge??ilmez lezzeti kavrulmu?? Antep f??st??????, g??n??n her saatinde keyifle t??ketilebilecek besleyici bir at????t??rmal??k olarak kar????m??za ????k??yor. Tamamen do??al i??eri??iyle hi??bir katk?? ve koruyucu madde b??nyesinde bulunmayan Antep F??st??klar??m??z duble boy ve az tuzlu kavrulmu?? olarak haz??rlanmaktad??r.", price: 13 },
  { id: 25, serial_number:"025",image: photo25, name:'Saf Zeytinya????', description: "100% Saf So??uk S??k??m Nat??rel S??zma Zeytinya????m??z ile sofralar??n??zda lezzet hikayelerinize e??lik ediyoruz.Herhangi bir kimyasal i??lem g??rmeden, katk?? maddesi eklenmeden do??rudan t??ketime uygun ??retilmi??tir. Yemeklere verdi??i g??zel tat ve kokunun d??????nda, i??erisindeki vitaminler ile sa??l??kl?? bir ya??am isteyen insanlar i??in bir t??kla kap??n??zday??z???", price: 10 },
  { id: 26, serial_number:"026",image: photo26, name:'Acve Hurmas??', description: "Acve Hurmas?? Peygamber hurmas?? olarak bilinen k??????k taneli ??ok lezzetli ve kaliteli bu hurma, erik benzeri bir tada sahip, nefis bir ??ekilde yumu??ak ve meyvemsidir.", price: 13 },
  { id: 27, serial_number:"027",image: photo27, name:'??z??m Pestili', description: "G??m????hane 'nin y??resel lezzetlerinden %100 do??al ??z??m pekmezinden elde etti??imiz ??z??m pestilimizi en g??zel ??ekilde paketleyip sizlerin be??enisine sunuyoruz. Hi??bir katk?? maddesi i??ermemektedir.", price: 10 },
  { id: 28, serial_number:"028",image: photo28, name:'Findik', description: "Giresun ??linde yeti??en ve D??nya'n??n en lezzetli f??nd??klar?? olarak kabul edilen Giresun'un Tombul F??nd?????? katk??s??z bir ??ekilde ??zenle se??ilip, elenip, paketlenmesini yap??p kaliteden ??d??n vermeden sizlere ula??t??rmaya devam ediyoruz.", price: 13 },
  { id: 29, serial_number:"029",image: photo29, name:'F??st??kl?? Ball?? Sarma', description: "??ncecik serilmi?? dut pestili ??zerine bal kapland??ktan sonra f??st??k serpilerek rulo yap??ld??ktan sonra iki parmak kal??nl??????nda kesilen ve enfes bir tad?? olan, bu ??zel at????t??rmal??k F??st??kl?? Ball?? Sarma Pestilimiz bir t??kla kap??n??zda .", price: 13 },
  { id: 30, serial_number:"030",image: photo30, name:'Havu?? Dilimi Baklava', description: "A????zda da????lan Havu?? Dilim Baklava damakta b??rakt?????? e??siz tatla ak??llar?? ba??lardan al??yor. Boyutuyla baklavaya doyamayanlara!", price: 19 },
  { id: 31, serial_number:"031",image: refa_gida, name:'??ak??l ta???? ??ikolata', description: "??ak??l ta???? ??ikolata kalpleri yumu??atan ??ikolata", price: 13 },
  { id: 32, serial_number:"032",image: Nar_eksisi, name:'Tatl?? ve ek??inin m??kemmel uyumu Nar ek??isi', description: "Her ??eyin yapayla??t?????? d??nyam??zda ger??ek aromas?? ve lezzeti ile miss gibi nar eksilerimizde hi?? bir koruyucu madde kullanm??yoruz", price: 13 },
  { id: 33, serial_number:"033",image: Erzincan_tulum, name:'Erzincan tulum peyniri', description: "Esas ??retimi ger??ekle??tiren ve Tunceli???de bulunan ??avak a??iretinin ismiyle an??lan bu peynir, g??n??m??zde ticaretinin Erzincan???da ??n plana ????kmas?? nedeniyle ??lke genelinde Erzincan tulum peyniri olarak tan??nm????t??r. Erzincan tulum peynirini farkl?? hale getiren ba??l??ca ??zellik b??lgedeki obruk olarak isimlendirilen i??erisinde kendine ??zg?? yerle??ik bir k??f floras?? bulunan bu ma??arada 90-120 g??n olgunla??t??r??lmas??d??r. Peynir yap??m??nda do??al ??irden mayas?? ve koyun s??t?? kullan??lmaktad??r.", price: 13 },
  { id: 34, serial_number:"034",image: Kabak_chekirdegi, name:'Kabak Cekirdegi', description: "Kalbe ve damarlar??na iyi gelir.????inde bulundurdu??u ??inko sayesinde kemik olu??umu i??in ??nemli bir magnezyum kayna????d??r. E vitamini bar??nd??rd?????? i??in g????l?? bir antioksidand??r????", price: 13 },
  { id: 35, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
  { id: 36, serial_number:"036",image: refa_gida, name:'Antep Peyniri', description: "Lorem ipsum", price: 13 },
  { id: 37, serial_number:"037",image: refa_gida, name:'Peynir Canakkale Ezine', description: "Lorem ipsum", price: 12 },
  { id: 38, serial_number:"038",image: refa_gida, name:'Peynir Kars Kasar', description: "Lorem ipsum", price: 13 },
  { id: 39, serial_number:"039",image: refa_gida, name:'Ev Yapimi Biber Salcasi', description: "Lorem ipsum", price: 10 },
  { id: 40, serial_number:"040",image: refa_gida, name:'Isot Biberi', description: "Lorem ipsum", price: 10 },
  { id: 41, serial_number:"041",image: refa_gida, name:'Fistikli Cikolatali Bohca', description: "Lorem ipsum", price: 12 },
  { id: 42, serial_number:"042",image: refa_gida, name:'FindikliPestil+Rulo Findik Ezmesi+Sarma Pestil Cesitleri', description: "Lorem ipsum", price: 12},
  { id: 43, serial_number:"043",image: refa_gida, name:'Burma Kadaif Fistikli', description: "Taze tel kaday??ftan tereya?? ve boz i?? antep f??st?????? kullan??larak yap??lan, a????zda ????t??r ????t??r da????lan kaday??fl?? tatl??lar?? kim sevmez ki?", price: 17 },
  { id: 44, serial_number:"044",image: refa_gida, name:'Baklava Ozel Sobiyet', description: "Lorem ipsum", price: 19 },
  { id: 45, serial_number:"045",image: refa_gida, name:'Baklava Fistikli', description: "Lorem ipsum", price: 18 },
  { id: 46, serial_number:"046",image: refa_gida, name:'Yufka El Yapimi', description: "Lorem ipsum", price: 17 },
  { id: 47, serial_number:"047",image: refa_gida, name:'Peynir Kars Gavyeri', description: "Lorem ipsum", price: 19 },
  { id: 48, serial_number:"048",image: refa_gida, name:'Kadaif El Yapimi', description: "Lorem ipsum", price: 10 },
  { id: 49, serial_number:"049",image: refa_gida, name:'Ici Antep Fistik-Disi Cikolatali Draje', description: "Lorem ipsum", price: 14 },
  { id: 50, serial_number:"050",image: refa_gida, name:'Ici-Badem Disi-Cikolatali Draje', description: "Lorem ipsum", price: 13 },
  { id: 51, serial_number:"051",image: refa_gida, name:'Ici-Findik Disi-Cikolatali Draje', description: "Lorem ipsum", price: 13 },
  { id: 52, serial_number:"052",image: refa_gida, name:'Kimyon', description: "T??rk mutfa????n??n vazge??ilmez baharatlar??ndan olan Kimyonun yarar?? saymakla bitmez ;", price: 11 },
  { id: 53, serial_number:"053",image: refa_gida, name:'Karabiber', description: "Antalya y??resinde yeti??en bitkilerin kurutulup ??????t??lmesiyle elde edilen taze ??ekilmi?? karabiber gerek d??nya mutfa????nda gerekse T??rk mutfa????nda en s??k kullan??lan baharatlardan biridir.", price: 11 },
  { id: 54, serial_number:"054",image: refa_gida, name:'Nane', description: "Antalya'n??n g??zel ikliminden getirdi??imiz enfess nanemiz yemeklerinize lezzet ve sa??l??k katacak", price: 10 },
  { id: 55, serial_number:"055",image: refa_gida, name:'Pekmez Keceboynuzu/Andiz/Karadut', description: "Lorem ipsum", price: 14 },
  { id: 56, serial_number:"056",image: refa_gida, name:'Kurumeyve Seftali/Erik/Mango', description: "Lorem ipsum", price: 14 },
  { id: 57, serial_number:"057",image: refa_gida, name:'Uzum Pekmez', description: "Lorem ipsum", price: 14 },
  { id: 58, serial_number:"058",image: Tarhana_chips, name:'Maras Chips Tarhanasi', description: "Lorem ipsum", price: 13 },
  { id: 59, serial_number:"059",image: refa_gida, name:'Draje / Disi meyveli Cikolata Kapli Bademli(elma,portokal,kiwi)', description: "Lorem ipsum", price: 13 },
  { id: 60, serial_number:"060",image: refa_gida, name:'Draje / Disi meyveli(elma,portokal,kiwi) Cikolata Kapli Findikli Draje', description: "Lorem ipsum", price: 13 },
  { id: 61, serial_number:"061",image: refa_gida, name:'Draje / Disi meyveli(elma,portokal,kiwi) Cikolata Kapli Antep Fistikli Draje', description: "Lorem ipsum", price: 15 },
  { id: 62, serial_number:"062",image: refa_gida, name:'Baharatlar (kofte/sucuk/pastirma baharat)', description: "Lorem ipsum", price: 11 },
  { id: 63, serial_number:"063",image: refa_gida, name:'Cecil Peynir', description: "Lorem ipsum", price: 13 },
  { id: 64, serial_number:"064",image: refa_gida, name:'Deri Tulum Peynir(Van yoresi otlu)', description: "Lorem ipsum", price: 13 },
  // { id: 65, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
  // { id: 66, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
 
];



const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              REFA GIDA (USA)
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              FRESH ITEMS FROM TURKEY TO USA ONLY IN ONE WEEK
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography>
                    kod:{card.serial_number}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
