let ftp = ["20", "21"];
let tftp = "69";
let sftp = "22";
let ssh = "22";
let telnet = "23";
let smtp = "25";
let imap4 = "143";
let pop3 = "110";
let http = "80";
let https = "443";
let ldap = "389";
let rdp = "3389";
let dns = "53";
let snmp = "161";
let ntp = "123";
let sip = ["5060", "5061"];
let rtsp = "554";
let dhcp = ["67", "68"];
let portNames = ["ftp", "tftp", "sftp", "ssh", "telnet", "smtp", "imap4", "pop3", "http", "https", "ldap", "rdp", "dns", "snmp", "ntp", "sip", "rtsp", "dhcp"];
let portNumbers = [ftp, tftp, sftp, ssh, telnet, smtp, imap4, pop3, http, https, ldap, rdp, dns, snmp, ntp, sip, rtsp, dhcp];
let randomPort = portNames[Math.floor(Math.random() * portNames.length)];


const startClick = () => {
  document.getElementById("card-text").innerHTML = "Get Ready!";
};

const checkAnswer = () => {
  let input = document.getElementById("input").value;
  for (i = 0; i < portNames.length; i++) {
    for (y = 0; y < portNumbers.length; y++) { 
      if (portNames[i] == document.getElementById("card-text").innerHTML) {
        portNames[i] = portNumbers[i];
        if (input == portNames[i]) {
          return document.getElementById("card-text").innerHTML = "Correct!";
        } else {
          return document.getElementById("card-text").innerHTML = "Sorry, wrong port number...";
        }
      } else {
        continue;
      }
    }
  }
};

const newCard = () => {
  portNames = ["ftp", "tftp", "sftp", "ssh", "telnet", "smtp", "imap4", "pop3", "http", "https", "ldap", "rdp", "dns", "snmp", "ntp", "sip", "rtsp", "dhcp"];
  return portNames[Math.floor(Math.random() * portNames.length)];
};

// layers script

let layer7 = ["application", "data", "http", "ftp", "dns", "pop3", "imap4", "telnet"];
let layer6 = ["presentation", "data"];
let layer5 = ["session", "data"];
let layer4 = ["transport", "segments", "tcp", "udp"];
let layer3 = ["network", "packets", "routers", "ipv4", "ipv6", "icmp", "arp"];
let layer2 = ["data link", "frames", "switches", "mac"];
let layer1 = ["physical", "bits", "hub"];

let input1;
let input2 = document.getElementById("data-layer");
let input3 = document.getElementById("nwrk-layer");
let input4 = document.getElementById("trans-layer");
let input5 = document.getElementById("sess-layer");
let input6 = document.getElementById("pres-layer");
let input7 = document.getElementById("app-layer");

let input11 = document.getElementById("phys-prot");
let input12 = document.getElementById("data-prot");
let input13 = document.getElementById("nwrk-prot");
let input14 = document.getElementById("trans-prot");
let input15 = document.getElementById("sess-prot");
let input16 = document.getElementById("pres-prot");
let input17 = document.getElementById("app-prot");
let correctAnswers1;
let correctAnswers2;
let counter1;
let counter2;


const checkAnswerLayer = () => {
  counter1 = document.getElementById("counter1");
  counter2 = document.getElementById("counter2");
  correctAnswers1 = 0;
  correctAnswers2 = 0;
  input1 = document.getElementById("phys-layer");
  input2 = document.getElementById("data-layer");
  input3 = document.getElementById("nwrk-layer");
  input4 = document.getElementById("trans-layer");
  input5 = document.getElementById("sess-layer");
  input6 = document.getElementById("pres-layer");
  input7 = document.getElementById("app-layer");
  input11 = document.getElementById("phys-prot");
  input12 = document.getElementById("data-prot");
  input13 = document.getElementById("nwrk-prot");
  input14 = document.getElementById("trans-prot");
  input15 = document.getElementById("sess-prot");
  input16 = document.getElementById("pres-prot");
  input17 = document.getElementById("app-prot");
  if (input1.value == layer1[0]) {
    correctAnswers1 += 1;
  }
  if (input2.value == layer2[0]) {
    correctAnswers1 += 1;
  }
  if (input3.value == layer3[0]) {
    correctAnswers1 += 1;
  }
  if (input4.value == layer4[0]) {
    correctAnswers1 += 1;
  }
  if (input5.value == layer5[0]) {
    correctAnswers1 += 1;
  }
  if (input6.value == layer6[0]) {
    correctAnswers1 += 1;
  }
  if (input7.value == layer7[0]) {
    correctAnswers1 += 1;
  }
  if (correctAnswers1 === 7) {
      counter1.innerHTML = "Great job, you got all the layer names correct!!!";
  } else {
      counter1.innerHTML = "Not a perfect score but you got a " + correctAnswers1 + "/7";
  }

  if (input11.value == layer1[1] || input11.value == layer1[2]) {
    correctAnswers2 += 1;
  }
  if (input12.value == layer2[1] || input12.value == layer2[2] || input12.value == layer2[3] || input12.value == layer2[4] ) {
    correctAnswers2 += 1;
  }
  if (input13.value == layer3[1] || input13.value == layer3[2] || input13.value == layer3[3] || input13.value == layer3[4] || input13.value == layer3[5] || input13.value == layer3[6] ) {
    correctAnswers2 += 1;
  }
  if (input14.value == layer4[1] || input14.value == layer4[2] || input14.value == layer4[3] ) {
    correctAnswers2 += 1;
  }
  if (input15.value == layer5[1]) {
    correctAnswers2 += 1;
  }
  if (input16.value == layer6[1]) {
    correctAnswers2 += 1;
  }
  if (input17.value == layer7[1] || input17.value == layer7[2] || input17.value == layer7[3] || input17.value == layer7[4] || input17.value == layer7[5] || input17.value == layer7[6] || input17.value == layer7[7]) {
    correctAnswers2 += 1;
  }

  if (correctAnswers1 === 7 && correctAnswers2 === 7){
      counter2.innerHTML = "";
      counter1.innerHTML = "WOW, ur a genius!";
  }
  else if (correctAnswers2 === 7) {
      counter2.innerHTML = "Great job, you got all the protocol names correct!!!";
  } else if (correctAnswers2 === 0 || correctAnswers1 === 0) {
    counter1.innerHTML = "";
      counter2.innerHTML = "At least try...";
  }
  else {
      counter2.innerHTML = "Not a perfect score but you got a " + correctAnswers2 + "/7";
  }



};

const reset = () => {
  window.location.reload()
};

// TCP model script

let srcPort;
let destPort;
let seqNum;
let ackNum;
let dataOffset;
let reserved;
let cwr;
let ece;
let urg;
let ack;
let psh;
let rst;
let syn;
let fin;
let windowSize;
let checksum;
let urgPointer;
let options;
let data;
let tcpStartVal;
let arr = ["source port", "destination port", "sequence number", "acknowledgement number", "data offset", "reserved", "cwr", "ece", "urg", "ack", "psh", "rst", "syn", "fin", "window size", "checksum", "urgent pointer", "options", "data"];
let valArr;
let correctAnswer = 0;

const tcpOnLoad = () => {
  document.getElementById("src-port").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("dest-port").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("seq-number").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("ack-number").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("data-offset").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("reserved").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("cwr").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("ece").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("urg").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("ack").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("psh").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("rst").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("syn").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("fin").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("window-size").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("checksum").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("urgent-pointer").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("options").value = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("data").value = arr[Math.floor(Math.random() * arr.length)];
  tcpStartVal = arr[Math.floor(Math.random() * arr.length)];
};

const checkAnswerTcp = () => {
  valArr = [document.getElementById("src-port").value, document.getElementById("dest-port").value, document.getElementById("seq-number").value, document.getElementById("ack-number").value, document.getElementById("data-offset").value, document.getElementById("reserved").value, document.getElementById("cwr").value, document.getElementById("ece").value, document.getElementById("urg").value, document.getElementById("ack").value, document.getElementById("psh").value, document.getElementById("rst").value, document.getElementById("syn").value, document.getElementById("fin").value, document.getElementById("window-size").value, document.getElementById("checksum").value, document.getElementById("urgent-pointer").value, document.getElementById("options").value,document.getElementById("data").value];
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < valArr.length; i++) {
      if (arr[i] == valArr[i]) {
        correctAnswer += 1;
      } else {
        continue;
      }
    }
      if (correctAnswer == 19) {
      return document.getElementById("tcp-score").innerHTML = correctAnswer + "/19 EXAM READY!";
    } else if (correctAnswer == 0) {
      return document.getElementById("tcp-score").innerHTML = "Better start practicing! " + correctAnswer;
    } else {
      return document.getElementById("tcp-score").innerHTML = "you got " + correctAnswer + "/19 answers correct, good job!";
    }
  }
}

