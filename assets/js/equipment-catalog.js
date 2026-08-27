(function(){
  'use strict';

const DATA = [
  { id:'mirrorless', label:'Mirrorless / DSLR', accent:'--sky',
    groups:[
      { name:'กล้อง (Camera)', items:[
        {b:'Canon', m:'EOS R6 Mark II', role:'camera', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Full-Frame CMOS 24.2MP</b> พร้อม In-Body Image Stabilization (IBIS)</li>
            <li>วิดีโอสูงสุด <b>4K 60p 10-bit</b> (oversample จาก 6K เต็มเฟรม) บันทึกได้ไม่จำกัดเวลา · FHD สูงสุด <b>180fps</b></li>
            <li>ถ่ายภาพต่อเนื่องสูงสุด 40fps (ชัตเตอร์ไฟฟ้า) / 12fps (กลไก) · ISO 100–102400 (ขยายถึง 204800)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Canon</div>`},
        {b:'Canon', m:'EOS R7', role:'camera', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>APS-C CMOS 32.5MP</b> (ไม่ใช่ Full Frame — crop factor 1.6x)</li>
            <li>วิดีโอสูงสุด <b>4K 60p</b> (ครอปเฟรม) หรือ 4K 30p oversample จาก 7K · FHD สูงสุด <b>120fps</b></li>
            <li>IBIS สูงสุด 7–8 stops · ถ่ายต่อเนื่องสูงสุด 30fps (ไฟฟ้า) / 15fps (กลไก)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Canon</div>`},
        {b:'Canon', m:'EOS RP', role:'camera', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Full-Frame CMOS 26.2MP</b> — กล้อง Full Frame ที่เบาและเล็กที่สุดของ Canon</li>
            <li>วิดีโอสูงสุด <b>4K 25p</b> (มีครอปประมาณ 1.7x) · FHD สูงสุด 60p</li>
            <li>ไม่มี IBIS ในตัว (ต้องพึ่ง IS ของเลนส์) · ISO 100–40000</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Canon</div>`},
        {b:'Panasonic', m:'Lumix S5 II', role:'camera', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Full-Frame CMOS 24.2MP</b> พร้อม Phase Hybrid AF (รุ่นแรกของ LUMIX)</li>
            <li>วิดีโอ <b>6K 30p 10-bit 4:2:0</b> และ <b>4K สูงสุด 60p 10-bit 4:2:2</b> บันทึกไม่จำกัดเวลา · FHD สูงสุด 120fps (S&Q ถึง 180fps)</li>
            <li>Active I.S. ในตัวสูงสุด 6.5 stops · V-Log 14+ stops dynamic range</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Panasonic</div>`},
        {b:'Panasonic', m:'Lumix S5', role:'camera', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Full-Frame CMOS 24.2MP</b> (ตัวเดียวกับ S1 / S1H)</li>
            <li>วิดีโอสูงสุด <b>4K 60p 10-bit 4:2:0</b> (มีครอป APS-C) หรือ 4K 30p แบบเต็มเฟรมไม่ครอป · FHD สูงสุด 180fps</li>
            <li>Dual I.S. ในตัวสูงสุด 6.5 stops · V-Log 14+ stops dynamic range · ไม่มี Phase Hybrid AF (ใช้ Contrast-detect DFD)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Panasonic</div>`},
      ]},
      { name:'เลนส์ Canon', items:[
        {b:'Canon', m:'kit 24-105mm F4-7.1', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมช่วงกว้าง–เทเลระยะกลาง ครอบคลุมการใช้งานทั่วไปในตัวเดียว เหมาะเป็นเลนส์หลักติดกล้องไว้ใช้งานประจำวัน</li>
            <li>ใช้ได้ทั้งถ่ายวิว บุคคล ไปจนถึงระยะใกล้เทเลเล็กน้อย ไม่ต้องเปลี่ยนเลนส์บ่อย</li>
          </ul>`},
        {b:'Canon', m:'kit 70-200mm F4', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลโฟโต้ซูม ดึงระยะไกลได้ดี เหมาะถ่ายกีฬา คอนเสิร์ต หรือฉากที่เข้าใกล้ตัวแบบไม่ได้</li>
            <li>บีบระยะให้ภาพหลังเบลอสวย เหมาะกับการถ่ายบุคคลระยะไกลด้วยเช่นกัน</li>
          </ul>`},
        {b:'Canon', m:'35mm F1.8', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์มาตรฐาน (Prime) รูรับแสงกว้าง ถ่ายในที่แสงน้อยได้ดี</li>
            <li>ใช้ได้หลากหลาย ทั้งวล็อก สัมภาษณ์ หรือถ่ายให้เห็นบรรยากาศรอบตัวแบบ</li>
          </ul>`},
        {b:'Canon', m:'50mm F1.8', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน มุมมองใกล้เคียงกับสายตาคนดูมากที่สุด ภาพดูเป็นธรรมชาติ</li>
            <li>เหมาะถ่ายบุคคล/สัมภาษณ์ หน้าชัดหลังเบลอสวย ราคาประหยัด</li>
          </ul>`},
        {b:'Canon', m:'85mm F2.0', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลระยะกลาง (Portrait) บีบระยะให้หลังเบลอนุ่มมาก</li>
            <li>เหมาะถ่ายพอร์เทรตหรือสัมภาษณ์แบบมีระยะห่างจากตัวแบบ ให้ภาพดูมีมิติ</li>
          </ul>`},
        {b:'Canon', m:'RF-S 18-150mm F3.5-6.3', role:'lens', mount:'canon-rf',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ <b>RF-S สำหรับเซนเซอร์ APS-C</b> (เทียบเท่า 29–240mm บนฟูลเฟรม) ครอบคลุมมุมกว้างถึงเทเลโฟโต้ในตัวเดียว</li>
            <li>ระบบกันสั่น IS ในตัว <b>4.5 stop</b> (สูงสุด 6.5 stop เมื่อใช้ร่วมกับ IBIS ของบอดี้ที่รองรับ)</li>
            <li>มอเตอร์โฟกัส STM หมุนเงียบ เหมาะกับวิดีโอ · ใส่ได้กับบอดี้ RF-mount ทุกตัว แต่ถ้าใช้กับกล้อง Full Frame (เช่น R6 II, RP) จะถูกครอปภาพเหลือ APS-C อัตโนมัติ</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Canon</div>`},
      ]},
      { name:'เลนส์ Panasonic', items:[
        {b:'Panasonic', m:'kit 24-105mm F4', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมเอนกประสงค์กว้าง–เทเลระยะกลาง คุณภาพระดับโปร รูรับแสงคงที่ F4 ตลอดช่วงซูม</li>
            <li>เหมาะเป็นเลนส์หลักติดกล้องไว้ใช้งานทั่วไป ไม่ต้องเปลี่ยนเลนส์บ่อย</li>
          </ul>`},
        {b:'Panasonic', m:'18mm F1.8', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มุมกว้าง (Wide) รูรับแสงกว้าง ถ่ายในที่แสงน้อยได้ดี</li>
            <li>เหมาะถ่ายวิว สถานที่ วล็อก หรือฉากที่ต้องการเก็บบรรยากาศกว้างๆ ในเฟรมเดียว</li>
          </ul>`},
        {b:'Panasonic', m:'24mm F1.8', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มุมกว้างมาตรฐาน ใช้งานได้หลากหลาย ทั้งวล็อกและงานสารคดี</li>
            <li>รูรับแสงกว้าง เหมาะถ่ายในที่แสงน้อยหรือให้หลังเบลอเล็กน้อย</li>
          </ul>`},
        {b:'Panasonic', m:'50mm F1.8', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน มุมมองใกล้เคียงสายตาคน ภาพดูเป็นธรรมชาติ</li>
            <li>เหมาะถ่ายบุคคล/สัมภาษณ์ หน้าชัดหลังเบลอสวย</li>
          </ul>`},
        {b:'Panasonic', m:'85mm F1.8', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลพอร์เทรต บีบระยะให้หลังเบลอนุ่มมาก</li>
            <li>เหมาะถ่ายบุคคลระยะไกล ให้ภาพดูมีมิติแบบภาพยนตร์</li>
          </ul>`},
        {b:'Panasonic', m:'70-200mm F4', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลโฟโต้ซูม ดึงระยะไกลได้ดี เหมาะถ่ายกีฬา สัตว์ หรือฉากที่เข้าใกล้ไม่ได้</li>
            <li>รูรับแสงคงที่ F4 ตลอดช่วงซูม แสงไม่เปลี่ยนเวลาซูมเข้าออก</li>
          </ul>`},
        {b:'Panasonic', m:'20-60mm F3.5-5.6', role:'lens', mount:'l-mount',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมมุมกว้างอเนกประสงค์ ครอบคลุมตั้งแต่ไวด์ถึงเทเลระยะสั้น</li>
            <li>ขนาดเล็ก น้ำหนักเบา เหมาะเป็นเลนส์ติดกล้องตัวแรกสำหรับใช้งานทั่วไป</li>
          </ul>`},
      ]},
    ]
  },
  { id:'cinema', label:'Cinema Camera', accent:'--red',
    groups:[
      { name:'Cinema Camera', items:[
        {b:'Sony', m:'FX6', role:'camera', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Full-Frame CMOS 10.2MP</b> (Back-illuminated Exmor R) — สายพันธุ์เดียวกับ a7S III</li>
            <li>วิดีโอสูงสุด <b>4K UHD 120fps</b> (10-bit 4:2:2 เต็มเฟรม) และ 4K DCI 60p · FHD สูงสุด 240fps</li>
            <li>Dynamic Range 15+ stops · ISO พื้นฐาน 800 (ขยายได้ถึง 409600) · มี Variable ND ในตัว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sony</div>`},
        {b:'Sony', m:'FS7', role:'camera', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Super 35mm CMOS 11.6MP</b> (ไม่ใช่ Full Frame)</li>
            <li>วิดีโอสูงสุด <b>4K UHD/DCI 60p</b> (10-bit 4:2:2 ผ่าน XAVC-I) · FHD สูงสุด 180fps</li>
            <li>Dynamic Range 14 stops · รองรับเลนส์ PL/EF/Nikon ผ่านอะแดปเตอร์ (ฐาน flange สั้น)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sony</div>`},
        {b:'Sony', m:'FS5', role:'camera', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Super 35mm CMOS 11.6MP</b> (ไม่ใช่ Full Frame) — ตัวเล็กกว่า FS7</li>
            <li>วิดีโอสูงสุด <b>4K UHD 30p</b> (XAVC Long GOP) · FHD สูงสุด 120fps ในกล้อง (240fps ผ่าน RAW ภายนอก), Super Slow Motion ถึง 960fps ใน FS5 II</li>
            <li>Dynamic Range ~14 stops · มี Variable ND ในตัว · เบาและกะทัดรัดกว่า FS7 เหมาะงานถือถ่ายคนเดียว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sony</div>`},
        {b:'RED', m:'DRAGON', role:'camera', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>RED DRAGON Super 35mm CMOS 19.4MP</b> ให้ความละเอียดสูงสุด <b>6K (6144×3160)</b></li>
            <li>ถ่ายสูงสุด 100fps ที่ 6K, 120fps ที่ 5K และสูงสุดถึง 300fps ที่ความละเอียด 2K</li>
            <li>Dynamic Range 16.5+ stops · บันทึก REDCODE RAW (R3D) ให้ความยืดหยุ่นสูงในขั้นตอน Color Grading</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RED Digital Cinema</div>`},
        {b:'Blackmagic', m:'Pocket 4K', role:'camera', mount:'canon-ef',
          desc:`<ul class="im-spec-list">
            <li>เซนเซอร์ <b>Micro Four Thirds (4/3") CMOS</b> ความละเอียด 4096×2160 (ไม่ใช่ Full Frame)</li>
            <li>วิดีโอสูงสุด <b>4K DCI 60fps</b> · โหมด HD windowed สูงสุด 120fps</li>
            <li>Dynamic Range 13 stops · Dual Native ISO สูงสุด 25600 · บันทึก Blackmagic RAW / ProRes ได้ในตัว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Blackmagic Design</div>`},
      ]},
      { name:'Cinema Lens — Sony E Mount', items:[
        {b:'Sony', m:'E Mount 28-135mm', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมสำหรับงานวิดีโอโดยเฉพาะ มีมอเตอร์ซูมไฟฟ้า (Power Zoom) ซูมได้นุ่มนวลสม่ำเสมอ ไม่กระตุก</li>
            <li>เหมาะกับงานที่ต้องซูมขณะกำลังถ่ายจริง เช่น งานอีเวนต์ สารคดี หรือไลฟ์สด</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sony</div>`},
      ]},
      { name:'Cinema Lens — Sigma (PL Mount)', items:[
        {b:'Sigma', m:'35mm T1.5', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์ Cine พรีเมียม รูรับแสงกว้าง T1.5 ถ่ายในที่แสงน้อยได้ดี หน้าชัดหลังเบลอนุ่ม</li>
            <li>ทุกตัวในชุด Sigma ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว ไม่ต้องขยับ Follow Focus ใหม่</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sigma</div>`},
        {b:'Sigma', m:'50mm T1.5', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน Cine มุมมองใกล้เคียงสายตาคน คมชัดสูง เหมาะถ่ายบทสนทนา</li>
            <li>ทุกตัวในชุด Sigma ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sigma</div>`},
        {b:'Sigma', m:'105mm T1.5', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเล Cine บีบระยะให้หลังเบลอนุ่มมาก เหมาะถ่ายพอร์เทรตหรือฉากระยะไกล</li>
            <li>ทุกตัวในชุด Sigma ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sigma</div>`},
      ]},
      { name:'Cinema Lens — Tokina (PL Mount)', items:[
        {b:'Tokina', m:'16-28mm T3', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมมุมกว้าง Cine รูรับแสงคงที่ตลอดช่วงซูม ไม่ต้องปรับแสงใหม่เวลาซูมเข้าออก</li>
            <li>เหมาะถ่ายฉากกว้าง สถานที่ หรืองานที่ต้องขยับกล้องเข้าใกล้ฉากขณะถ่าย</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Tokina Cinema</div>`},
        {b:'Tokina', m:'50-135mm T3', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมเทเล Cine รูรับแสงคงที่ตลอดช่วงซูม ดึงระยะไกลได้นุ่มนวล ไม่กระตุก</li>
            <li>เหมาะกับฉากที่เข้าใกล้ตัวแบบไม่ได้ หรืองานที่ต้องซูมขณะถ่ายจริง</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Tokina Cinema</div>`},
      ]},
      { name:'Cinema Lens — Tokina (EF Mount)', items:[
        {b:'Tokina', m:'16-28mm T3', role:'lens', mount:'canon-ef',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมมุมกว้าง Cine รูรับแสงคงที่ตลอดช่วงซูม ไม่ต้องปรับแสงใหม่เวลาซูมเข้าออก</li>
            <li>เหมาะถ่ายฉากกว้าง สถานที่ หรืองานที่ต้องขยับกล้องเข้าใกล้ฉากขณะถ่าย</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Tokina Cinema</div>`},
        {b:'Tokina', m:'50-135mm T3', role:'lens', mount:'canon-ef',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ซูมเทเล Cine รูรับแสงคงที่ตลอดช่วงซูม ดึงระยะไกลได้นุ่มนวล ไม่กระตุก</li>
            <li>เหมาะกับฉากที่เข้าใกล้ตัวแบบไม่ได้ หรืองานที่ต้องซูมขณะถ่ายจริง</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Tokina Cinema</div>`},
      ]},
      { name:'Cinema Lens — Dzofilm (PL Mount)', items:[
        {b:'Dzofilm', m:'12mm T2.8', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์พิเศษ (Ultra-wide) มุมกว้างมาก เหมาะถ่ายวิว สถานที่ หรือฉากที่ต้องการความอลังการ</li>
            <li>ให้ภาพโค้งบิดเบี้ยวน้อยแม้มุมกว้างขนาดนี้ เมื่อเทียบกับเลนส์ไวด์ทั่วไป</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DZOFilm</div>`},
        {b:'Dzofilm', m:'25mm T2.1', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มุมกว้าง Cine ขนาดเล็ก น้ำหนักเบา เหมาะกับงานถือถ่ายหรือติดกิมบอล/โดรน</li>
            <li>เหมาะถ่ายฉากบรรยากาศ หรือฉากที่มีหลายคนอยู่ในเฟรมเดียวกัน</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DZOFilm</div>`},
        {b:'Dzofilm', m:'35mm T2.1', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์มาตรฐาน Cine อเนกประสงค์ ใช้ได้ทั้งถ่ายฉากกว้างและถ่ายบุคคล</li>
            <li>ขนาดเล็ก น้ำหนักเบา เหมาะกับงานถือถ่ายหรือติดกิมบอล/โดรน</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DZOFilm</div>`},
        {b:'Dzofilm', m:'50mm T2.1', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน Cine มุมมองใกล้เคียงสายตาคน เหมาะถ่ายบทสนทนา</li>
            <li>ขนาดเล็ก น้ำหนักเบา เหมาะกับงานถือถ่ายหรือติดกิมบอล/โดรน</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DZOFilm</div>`},
        {b:'Dzofilm', m:'100mm T2.1', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเล Cine บีบระยะให้หลังเบลอนุ่มมาก เหมาะถ่ายพอร์เทรตหรือฉากระยะไกล</li>
            <li>ขนาดเล็ก น้ำหนักเบา เหมาะกับงานถือถ่ายหรือติดกิมบอล/โดรน</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DZOFilm</div>`},
      ]},
      { name:'Cinema Lens — ATHENA (E Mount)', items:[
        {b:'ATHENA', m:'14mm T2.4', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์พิเศษ Cine มุมกว้างมาก เหมาะถ่ายฉากกว้าง สถาปัตยกรรม หรือฉากแอ็กชันระยะประชิด</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'25mm T1.9', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มุมกว้าง Cine รูรับแสงกว้าง ถ่ายในที่แสงน้อยได้ดี เหมาะถ่ายฉากบรรยากาศ</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'35mm T1.9', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์มาตรฐาน Cine อเนกประสงค์ ใช้ได้ทั้งถ่ายฉากกว้างและถ่ายบุคคล</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'50mm T1.9', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน Cine มุมมองใกล้เคียงสายตาคน เหมาะถ่ายบทสนทนา</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'85mm T1.9', role:'lens', mount:'sony-e',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลพอร์เทรต Cine หน้าชัดหลังเบลอนุ่มมาก เหมาะถ่ายบุคคลระยะไกล</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
      ]},
      { name:'Cinema Lens — ATHENA (PL Mount)', items:[
        {b:'ATHENA', m:'14mm T2.4', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์พิเศษ Cine มุมกว้างมาก เหมาะถ่ายฉากกว้าง สถาปัตยกรรม หรือฉากแอ็กชันระยะประชิด</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'25mm T1.9', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มุมกว้าง Cine รูรับแสงกว้าง ถ่ายในที่แสงน้อยได้ดี เหมาะถ่ายฉากบรรยากาศ</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'35mm T1.9', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์ไวด์มาตรฐาน Cine อเนกประสงค์ ใช้ได้ทั้งถ่ายฉากกว้างและถ่ายบุคคล</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'50mm T1.9', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์มาตรฐาน Cine มุมมองใกล้เคียงสายตาคน เหมาะถ่ายบทสนทนา</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
        {b:'ATHENA', m:'85mm T1.9', role:'lens', mount:'pl',
          desc:`<ul class="im-spec-list">
            <li>เลนส์เทเลพอร์เทรต Cine หน้าชัดหลังเบลอนุ่มมาก เหมาะถ่ายบุคคลระยะไกล</li>
            <li>ทุกตัวในชุด ATHENA ขนาดและตำแหน่งเกียร์เท่ากัน สลับเลนส์กลางกองถ่ายได้เร็ว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ NiSi</div>`},
      ]},
    ]
  },
  { id:'lights', label:'Lights', accent:'--amber',
    groups:[
      { name:'Video Lights', items:[
        {b:'Aputure', m:'MC 4-Kit',
          desc:`<ul class="im-spec-list">
            <li>ไฟ RGB ขนาดพกพา 4 ดวงในชุดเดียว ปรับสีได้ทุกโทน (RGBWW) และปรับอุณหภูมิสีขาว 3200–6500K</li>
            <li>ขนาดเล็กพอวางในฝ่ามือ มีแม่เหล็กในตัวติดกับพื้นผิวโลหะได้ ควบคุมผ่านแอปมือถือ</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Aputure</div>`},
        {b:'Amaran', m:'300c',
          desc:`<ul class="im-spec-list">
            <li>ไฟ COB กำลังสูง (แบรนด์ลูกของ Aputure) ปรับสีได้ทุกโทน (RGBWW) ให้แสงสว่างจัดพอสำหรับเป็นไฟหลักในฉาก</li>
            <li>คุณภาพสีสูง เหมาะทั้งงานวิดีโอและถ่ายภาพนิ่ง ราคาประหยัดกว่ารุ่น Aputure</li>
          </ul>`},
        {b:'Nanlite', m:'Fs-60',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED Monolight แสงเดย์ไลท์ (5600K) ตัวเล็กสุดในซีรีส์ FS ให้แสงสว่างสม่ำเสมอ สีสมจริง (CRI สูง 96+)</li>
            <li>เหมาะเป็นไฟเสริม (Fill) หรือไฟหลักสำหรับฉากเล็กๆ ใช้ร่วมกับ Softbox ได้ (เมาท์ Bowens)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fs-150',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED Monolight แสงเดย์ไลท์ (5600K) ให้แสงสว่างจัดจ้าน สีสมจริงสูง (CRI/TLCI 96/98)</li>
            <li>เหมาะเป็นไฟหลักของฉาก ปรับความสว่างได้ 0–100% ไม่มีไฟกระพริบ ใช้ร่วมกับ Softbox ได้ (เมาท์ Bowens)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fs-150 B',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED รุ่น Bi-color ปรับอุณหภูมิสีได้ 2700–6500K (จากโทนอุ่นไปเย็น) สีสมจริงสูง (CRI 96+)</li>
            <li>น้ำหนักเบา กะทัดรัด เหมาะพกพาไปกองถ่ายนอกสถานที่</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fs-200',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED Monolight แสงเดย์ไลท์ (5600K) กำลังสูงกว่า Fs-150 ให้แสงสว่างจัดจ้านกว่า สีสมจริงสูง (CRI/TLCI 96/98)</li>
            <li>เหมาะเป็นไฟหลักของฉากขนาดกลาง–ใหญ่ ใช้ร่วมกับ Softbox ได้ (เมาท์ Bowens)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fs-300 B',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED รุ่น Bi-color กำลังสูง ปรับอุณหภูมิสีได้ 2700–6500K สีสมจริงสูง (CRI 96+)</li>
            <li>สว่างจัดจ้าน เหมาะเป็นไฟหลักที่ต้องการความยืดหยุ่นเรื่องโทนสี</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fs-300 C',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED รุ่นสีเต็มรูปแบบ (RGBW) ปรับได้ทุกโทนสี อุณหภูมิสี 2700–7500K สีสมจริงสูง (CRI 95+)</li>
            <li>เหมาะกับงานที่ต้องการสร้างบรรยากาศด้วยแสงสี เช่น มิวสิควิดีโอหรือโฆษณา</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Nanlite</div>`},
        {b:'Nanlite', m:'Fc-300 B',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED Fresnel รุ่น Bi-color ปรับอุณหภูมิสีได้ 2700–6500K มีเลนส์รวมแสงให้ลำแสงคมและควบคุมทิศทางได้ดี</li>
            <li>เหมาะกับงานที่ต้องการแสงเป็นลำชัดเจน เช่น สร้างเงาหรือไฟจัดแสงแบบภาพยนตร์</li>
          </ul>`},
        {b:'Godox', m:'TL120 LED Tube Light',
          desc:`<ul class="im-spec-list">
            <li>ไฟหลอดยาว RGB พกพาสะดวก ปรับสีและความสว่างได้อิสระ น้ำหนักเบา</li>
            <li>เหมาะใช้เป็นไฟตกแต่งฉากหลัง ไฟไลน์ หรือสร้างเอฟเฟกต์แสงสีในฉาก</li>
          </ul>`},
        {b:'SmallRig', m:'Vibe P108 RGB',
          desc:`<ul class="im-spec-list">
            <li>ไฟ RGB ขนาดพกพาจิ๋ว ปรับสีได้ทุกโทน ใช้แบตในตัว พกพาสะดวกมาก</li>
            <li>เหมาะเสริมแสงจุดเล็กๆ ในฉาก หรือติดกับริกกล้องสำหรับงานวล็อก</li>
          </ul>`},
        {b:'Yongnuo', m:'YN 600L II',
          desc:`<ul class="im-spec-list">
            <li>ไฟพาแนล LED รุ่น Bi-color ปรับอุณหภูมิสีได้ 3200–5500K สีสมจริงในระดับดี ราคาประหยัด</li>
            <li>เหมาะเป็นไฟเสริมหรือไฟหลักของกองถ่ายงบประมาณจำกัด ใช้งานง่าย</li>
          </ul>`},
        {b:'Ulanzi', m:'VL119',
          desc:`<ul class="im-spec-list">
            <li>ไฟ RGB ขนาดพกพาเล็ก เหมาะติดบนกล้องหรือมือถือสำหรับงานวล็อก คอนเทนต์ครีเอเตอร์</li>
            <li>ปรับสีและความสว่างได้ผ่านปุ่มบนตัวไฟ ใช้งานง่าย น้ำหนักเบา</li>
          </ul>`},
        {b:'—', m:'LED Light Stick',
          desc:`<ul class="im-spec-list">
            <li>ไฟหลอดยาวพกพา ให้แสงกระจายทั่วบริเวณ เหมาะใช้เป็นไฟเสริมหรือไฟตกแต่งฉาก</li>
            <li>น้ำหนักเบา ติดตั้งง่าย ใช้ร่วมกับขาตั้งไฟทั่วไปได้</li>
          </ul>`},
        {b:'NanGuang', m:'CN-600HS',
          desc:`<ul class="im-spec-list">
            <li>ไฟพาแนล LED รุ่น Bi-color ปรับอุณหภูมิสีได้ (โทนอุ่นถึงเย็น) ให้แสงกระจายทั่วสม่ำเสมอ</li>
            <li>เหมาะเป็นไฟหลักหรือไฟเสริมของกองถ่ายงบประมาณกลาง ใช้งานง่าย ราคาคุ้มค่า</li>
          </ul>`},
        {b:'—', m:'Ring Light 60w',
          desc:`<ul class="im-spec-list">
            <li>ไฟวงแหวน ให้แสงสม่ำเสมอรอบใบหน้า ลดเงาไม่พึงประสงค์ เห็นแววตาเป็นวงกลมสวย</li>
            <li>เหมาะกับงานสัมภาษณ์ ถ่ายภาพบุคคล หรือไลฟ์สด</li>
          </ul>`},
        {b:'Nicefoto', m:'100w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED Monolight กำลังปานกลาง ให้แสงสว่างเพียงพอสำหรับฉากขนาดเล็ก–กลาง</li>
            <li>ใช้ร่วมกับ Softbox หรือร่มสะท้อนแสงได้ (เมาท์ Bowens) ราคาประหยัด</li>
          </ul>`},
      ]},
      { name:'Softbox', items:[
        {b:'Nicefoto', m:'Lantern 60',
          desc:`<ul class="im-spec-list">
            <li>ซอฟท์บ็อกซ์ทรงโคม ขนาด 60cm ช่วยกระจายแสงจากไฟให้นุ่มขึ้น ลดเงาแข็งบนตัวแบบ</li>
            <li>ใช้สวมกับหัวไฟที่มีเมาท์ Bowens ได้ทั่วไป</li>
          </ul>`},
        {b:'Nanlite', m:'Lantern 80',
          desc:`<ul class="im-spec-list">
            <li>ซอฟท์บ็อกซ์ทรงโคม ขนาด 80cm ให้แสงนุ่มกระจายรอบทิศทาง เหมาะเป็นไฟหลักที่นุ่มนวล</li>
            <li>ติดตั้งง่าย พับเก็บได้ ใช้ร่วมกับหัวไฟเมาท์ Bowens</li>
          </ul>`},
        {b:'Aputure', m:'Lantern 90',
          desc:`<ul class="im-spec-list">
            <li>ซอฟท์บ็อกซ์ทรงโคม ขนาด 90cm ให้แสงนุ่มมากและกระจายรอบทิศทาง เหมาะเป็นไฟหลักในฉากขนาดใหญ่</li>
            <li>ติดตั้งและพับเก็บง่าย ใช้ร่วมกับหัวไฟเมาท์ Bowens</li>
          </ul>`},
        {b:'Aputure', m:'Octadome 120',
          desc:`<ul class="im-spec-list">
            <li>ซอฟท์บ็อกซ์ทรงแปดเหลี่ยม ขนาด 120cm ให้แสงนุ่มและวงกลมของแสงสะท้อนในดวงตาดูสวยงาม</li>
            <li>เหมาะกับงานถ่ายบุคคลระดับมืออาชีพที่ต้องการแสงนุ่มแบบสตูดิโอ</li>
          </ul>`},
        {b:'Nanlite', m:'Parabolic 60',
          desc:`<ul class="im-spec-list">
            <li>ร่มพาราโบลาทรงลึก ขนาด 60cm ให้แสงนุ่มแต่ยังคุมทิศทางได้ดีกว่าซอฟท์บ็อกซ์ทั่วไป</li>
            <li>เหมาะเป็นไฟหลักสำหรับถ่ายบุคคลหรือสัมภาษณ์</li>
          </ul>`},
        {b:'Nanlite', m:'Parabolic 90',
          desc:`<ul class="im-spec-list">
            <li>ร่มพาราโบลาทรงลึก ขนาด 90cm ให้แสงนุ่มกว้างขึ้น ยังคุมทิศทางแสงได้ดี</li>
            <li>เหมาะเป็นไฟหลักของฉากขนาดกลาง–ใหญ่ ที่ต้องการแสงนุ่มแบบมีทิศทาง</li>
          </ul>`},
      ]},
      { name:'Reflector', items:[
        {b:'Godox', m:'110',
          desc:`<ul class="im-spec-list">
            <li>แผ่นสะท้อนแสงพับได้ ขนาด 110cm มีหลายด้าน (ขาว/เงิน/ทอง/ดำ) ช่วยเติมแสงหรือลดคอนทราสต์โดยไม่ต้องใช้ไฟเพิ่ม</li>
            <li>พกพาสะดวก พับเก็บได้ เหมาะกับงานถ่ายนอกสถานที่</li>
          </ul>`},
        {b:'Godox', m:'100x150',
          desc:`<ul class="im-spec-list">
            <li>แผ่นสะท้อนแสงพับได้ ขนาดใหญ่ 100x150cm ครอบคลุมพื้นที่กว้าง เหมาะเติมแสงตัวแบบเต็มตัว</li>
            <li>มีหลายด้าน (ขาว/เงิน/ทอง/ดำ) ปรับโทนแสงสะท้อนได้ตามต้องการ</li>
          </ul>`},
      ]},
      { name:'Cinema Lights', items:[
        {b:'MOVMAX', m:'Slide Page',
          desc:`<ul class="im-spec-list">
            <li>ไฟกำลังสูงระดับ 800W สำหรับงานโปรดักชันขนาดใหญ่ ให้แสงสว่างจัดจ้านครอบคลุมพื้นที่กว้าง</li>
            <li>เหมาะเป็นไฟหลักของฉากที่ต้องการความสว่างสูง เช่น จำลองแสงแดดผ่านหน้าต่าง</li>
          </ul>`},
        {b:'Filmgear', m:'575w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ HMI Fresnel กำลัง 575W ให้แสงเดย์ไลท์สว่างจัดจ้าน ประหยัดไฟกว่าทังสเตนกำลังเท่ากันมาก</li>
            <li>เหมาะใช้จำลองแสงแดดยิงผ่านหน้าต่างหรือเป็นไฟหลักฉากกลางแจ้ง</li>
          </ul>`},
        {b:'Filmgear', m:'1200w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ HMI Fresnel กำลัง 1200W สว่างจัดจ้านกว่ารุ่น 575W เหมาะกับฉากที่ต้องการความสว่างสูงมาก</li>
            <li>ให้แสงเดย์ไลท์คมชัด ควบคุมทิศทางลำแสงได้ด้วยเลนส์ Fresnel</li>
          </ul>`},
        {b:'Filmgear', m:'2000w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ HMI Fresnel กำลังสูงสุดในกลุ่ม 2000W ให้แสงสว่างจัดจ้านที่สุด เหมาะกับฉากขนาดใหญ่มาก</li>
            <li>ใช้จำลองแสงแดดแรงๆ หรือยิงแสงจากระยะไกลให้ยังสว่างเพียงพอ</li>
          </ul>`},
        {b:'Lightstar', m:'150w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ Fresnel กำลัง 150W ควบคุมทิศทางลำแสงได้ (โฟกัสแคบ-กว้าง) เหมาะเป็นไฟเสริมหรือไฟหลักฉากเล็ก</li>
            <li>น้ำหนักเบากว่ารุ่นกำลังสูง ติดตั้งง่าย</li>
          </ul>`},
        {b:'Lightstar', m:'300w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ Fresnel กำลัง 300W ควบคุมทิศทางลำแสงได้ สว่างกว่ารุ่น 150W เหมาะเป็นไฟหลักฉากขนาดกลาง</li>
            <li>ปรับโฟกัสลำแสงแคบ-กว้างได้ด้วยเลนส์ Fresnel</li>
          </ul>`},
        {b:'Lightstar', m:'650w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ Fresnel กำลัง 650W ให้แสงสว่างจัดจ้าน เหมาะเป็นไฟหลักของฉากขนาดกลาง–ใหญ่</li>
            <li>ปรับโฟกัสลำแสงแคบ-กว้างได้ด้วยเลนส์ Fresnel</li>
          </ul>`},
        {b:'Lightstar', m:'1000w',
          desc:`<ul class="im-spec-list">
            <li>ไฟ Fresnel กำลังสูงสุดในกลุ่ม 1000W ให้แสงสว่างจัดจ้านที่สุด เหมาะกับฉากขนาดใหญ่</li>
            <li>ปรับโฟกัสลำแสงแคบ-กว้างได้ด้วยเลนส์ Fresnel</li>
          </ul>`},
        {b:'Aputure', m:'LS 600x Pro',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED COB กำลังสูง 600W รุ่น Bi-color ปรับอุณหภูมิสีได้ 2700–6500K สีสมจริงสูง</li>
            <li>ให้แสงสว่างจัดจ้านระดับมืออาชีพ เหมาะเป็นไฟหลักของฉากขนาดใหญ่ ประหยัดไฟกว่า HMI/ทังสเตน</li>
          </ul>`},
        {b:'Aputure', m:'Light Storm 1200d Pro',
          desc:`<ul class="im-spec-list">
            <li>ไฟ LED COB กำลังสูง 1200W แสงเดย์ไลท์ ให้ความสว่างจัดจ้านระดับใกล้เคียง HMI แต่ประหยัดไฟกว่า</li>
            <li>เหมาะเป็นไฟหลักของฉากขนาดใหญ่มาก หรือใช้แทนแสงแดดในที่ร่ม</li>
          </ul>`},
        {b:'Tungsten', m:'หัวเหลือง 2000w',
          desc:`<ul class="im-spec-list">
            <li>ไฟทังสเตน (หลอดไส้) กำลัง 2000W ให้แสงโทนอุ่น (~3200K) แบบดั้งเดิม สีผิวดูอบอุ่นเป็นธรรมชาติ</li>
            <li>ความร้อนสูงและกินไฟมากกว่า LED แต่ราคาประหยัดและหาอะไหล่ง่าย</li>
          </ul>`},
        {b:'Tungsten', m:'ส้ม 800w',
          desc:`<ul class="im-spec-list">
            <li>ไฟทังสเตน (หลอดไส้) กำลัง 800W ให้แสงโทนอุ่นแบบดั้งเดิม เหมาะเป็นไฟเสริมหรือไฟหลักฉากเล็ก</li>
            <li>ความร้อนสูง ควรระวังเรื่องการระบายความร้อนเวลาใช้งานนาน</li>
          </ul>`},
        {b:'Tungsten', m:'แดง 800w',
          desc:`<ul class="im-spec-list">
            <li>ไฟทังสเตน (หลอดไส้) กำลัง 800W ให้แสงโทนอุ่นแบบดั้งเดิม เหมาะเป็นไฟเสริมหรือไฟหลักฉากเล็ก</li>
            <li>ความร้อนสูง ควรระวังเรื่องการระบายความร้อนเวลาใช้งานนาน</li>
          </ul>`},
        {b:'Kino', m:'4 Bank 220w',
          desc:`<ul class="im-spec-list">
            <li>ไฟฟลูออเรสเซนต์ 4 หลอด ให้แสงนุ่มสม่ำเสมอทั่วทั้งดวง ความร้อนต่ำกว่าทังสเตนมาก</li>
            <li>เหมาะกับงานสัมภาษณ์ โปรดักต์ หรือฉากที่ต้องอยู่ใกล้ไฟนานๆ เพราะไม่ร้อน</li>
          </ul>`},
        {b:'Kino', m:'2 Bank 110w',
          desc:`<ul class="im-spec-list">
            <li>ไฟฟลูออเรสเซนต์ 2 หลอด ให้แสงนุ่มสม่ำเสมอ ขนาดเล็กกว่ารุ่น 4 Bank ความร้อนต่ำ</li>
            <li>เหมาะเป็นไฟเสริมหรือไฟหลักฉากเล็ก ที่ต้องการแสงนุ่มไม่ร้อน</li>
          </ul>`},
      ]},
    ]
  },
  { id:'accessories', label:'Accessories', accent:'--violet',
    groups:[
      { name:'Accessories — Lights', items:[
        {b:'—', m:'Grip Head 2.5',
          desc:`<ul class="im-spec-list">
            <li>อุปกรณ์หนีบยึด ใช้ต่อขาตั้งไฟเข้ากับแขนจับ Flag หรืออุปกรณ์กริปอื่นๆ ปรับมุมได้อิสระ</li>
            <li>เป็นอุปกรณ์พื้นฐานที่ต้องมีติดกองถ่ายเสมอ ใช้คู่กับ Frame หรือ Arm ต่างๆ</li>
          </ul>`},
        {b:'Frame', m:'Diffuser',
          desc:`<ul class="im-spec-list">
            <li>กรอบผ้ากระจายแสง ช่วยลดความจัดของแสงและทำให้เงาบนตัวแบบนุ่มขึ้น</li>
            <li>วางระหว่างไฟกับตัวแบบ ใช้คู่กับขาตั้ง Grip Head และแขนจับ</li>
          </ul>`},
        {b:'Frame', m:'Gobo',
          desc:`<ul class="im-spec-list">
            <li>กรอบสำหรับกั้นหรือบังคับทิศทางแสง ใช้สร้างเงาลวดลายหรือกันแสงไม่ให้ไปโดนจุดที่ไม่ต้องการ</li>
            <li>เป็นอุปกรณ์พื้นฐานสำหรับควบคุมทิศทางแสงในฉาก</li>
          </ul>`},
        {b:'Frame', m:'Soft',
          desc:`<ul class="im-spec-list">
            <li>กรอบผ้าซอฟท์ ช่วยกระจายแสงให้นุ่มขึ้นคล้าย Diffuser แต่มักบางกว่า ลดความจัดของแสงเล็กน้อย</li>
            <li>ใช้คู่กับขาตั้ง Grip Head และแขนจับ วางระหว่างไฟกับตัวแบบ</li>
          </ul>`},
        {b:'Frame', m:'Cutter',
          desc:`<ul class="im-spec-list">
            <li>กรอบสำหรับตัด/กั้นแสงไม่ให้ล้นไปยังจุดที่ไม่ต้องการ เช่น กันแสงเข้าเลนส์กล้อง</li>
            <li>ใช้ควบคุมขอบเขตของแสงให้ตรงตามที่ต้องการในฉาก</li>
          </ul>`},
        {b:'Frame', m:'Scrim Soft Light',
          desc:`<ul class="im-spec-list">
            <li>กรอบผ้าสครีม ช่วยลดความสว่างของแสงลงโดยไม่เปลี่ยนโทนสี ใช้ควบคุมปริมาณแสงแบบละเอียด</li>
            <li>เหมาะเมื่อไฟสว่างเกินไปแต่ไม่อยากลดกำลังไฟจากตัวเครื่อง</li>
          </ul>`},
        {b:'Lights Stand', m:'Standard',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งไฟทั่วไป ใช้ตั้งไฟหรืออุปกรณ์กริปต่างๆ ให้ได้ระดับความสูงที่ต้องการ</li>
            <li>เป็นอุปกรณ์พื้นฐานที่ต้องมีติดกองถ่ายเสมอ</li>
          </ul>`},
        {b:'Lights Stand', m:'C-Stand',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งมาตรฐานวงการภาพยนตร์ (Century Stand) แข็งแรง มั่นคง ปรับความสูงและมุมแขนจับได้หลากหลาย</li>
            <li>ใช้ได้ทั้งตั้งไฟ ตั้ง Flag/Gobo หรือยึดอุปกรณ์กริปต่างๆ เป็นขาตั้งที่ขาดไม่ได้ในกองถ่ายมืออาชีพ</li>
          </ul>`},
        {b:'Lights Stand', m:'Baby Stand',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งไฟขนาดเล็ก เตี้ยกว่าขาตั้งทั่วไป เหมาะตั้งไฟระดับต่ำหรือพื้นที่แคบ</li>
            <li>น้ำหนักเบา พกพาสะดวก เหมาะกับฉากที่ต้องการไฟจากมุมต่ำ</li>
          </ul>`},
        {b:'Lights Stand', m:'Junior Stand',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งไฟขนาดกลาง รับน้ำหนักได้มากกว่า Baby Stand เหมาะกับไฟหรืออุปกรณ์ที่หนักขึ้น</li>
            <li>มั่นคงกว่าขาตั้งทั่วไป ใช้ในกองถ่ายที่ต้องการความมั่นใจเรื่องความปลอดภัย</li>
          </ul>`},
        {b:'Lights Stand', m:'Combo Stand',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งอเนกประสงค์ ปรับใช้ได้ทั้งตั้งไฟระดับสูงและระดับต่ำในตัวเดียว รับน้ำหนักได้ดี</li>
            <li>เหมาะกับกองถ่ายที่ต้องการความยืดหยุ่นสูงโดยไม่ต้องพกขาตั้งหลายแบบ</li>
          </ul>`},
        {b:'Lights Stand', m:'Boom Stand',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งไฟแบบมีแขนยื่น (บูม) ใช้ยื่นไฟออกไปเหนือหัวตัวแบบหรือมุมที่ขาตั้งทั่วไปเข้าไม่ถึง</li>
            <li>ต้องใช้ถ่วงน้ำหนักฝั่งตรงข้ามเพื่อความสมดุลเวลายื่นแขนออกไปไกล</li>
          </ul>`},
        {b:'ผ้าเขียว', m:'Green Screen',
          desc:`<ul class="im-spec-list">
            <li>ผ้าฉากเขียวสำหรับถ่ายแล้วคีย์สีออกทีหลัง (Chroma Key) เพื่อใส่ฉากหลังอื่นในขั้นตอนตัดต่อ</li>
            <li>ควรจัดแสงให้สม่ำเสมอทั่วผ้าเพื่อให้คีย์สีออกมาคมชัด ไม่มีขอบเขียวติดตัวแบบ</li>
          </ul>`},
        {b:'ผ้าดำ', m:'Black Cloth',
          desc:`<ul class="im-spec-list">
            <li>ผ้าฉากดำ ใช้เป็นฉากหลังทึบแสง หรือกันแสงสะท้อนไม่ให้รบกวนฉาก</li>
            <li>ใช้ได้ทั้งเป็นแบ็คดรอปถ่ายภาพและเป็นตัวกันแสงในจุดที่ไม่ต้องการให้สว่าง</li>
          </ul>`},
        {b:'Back Drop', m:'Green Screen',
          desc:`<ul class="im-spec-list">
            <li>ฉากหลังสีเขียวพร้อมโครงตั้ง สำหรับงาน Chroma Key ติดตั้งและเก็บได้สะดวกกว่าผ้าแขวนทั่วไป</li>
            <li>เหมาะกับสตูดิโอหรือพื้นที่ที่ต้องติดตั้ง-รื้อฉากบ่อย</li>
          </ul>`},
      ]},
      { name:'Accessories — Cinema Camera', items:[
        {b:'—', m:'Slide Page Mini',
          desc:`<ul class="im-spec-list">
            <li>รางเลื่อนกล้องขนาดเล็ก (Slider) ใช้เคลื่อนกล้องแนวนอนอย่างนุ่มนวล สร้างช็อตที่มีการเคลื่อนไหว</li>
            <li>พกพาสะดวกกว่าราง Dolly Track เหมาะกับงานที่ต้องเคลื่อนย้ายบ่อย</li>
          </ul>`},
        {b:'—', m:'Modular Dolly Track',
          desc:`<ul class="im-spec-list">
            <li>รางสำหรับเลื่อนรถเข็นกล้อง (Dolly) ระยะไกลกว่า Slider ให้การเคลื่อนกล้องนุ่มนวลต่อเนื่อง</li>
            <li>ต่อรางเพิ่มความยาวได้ตามพื้นที่หน้างาน เหมาะกับช็อตที่ต้องเคลื่อนกล้องระยะไกล</li>
          </ul>`},
        {b:'—', m:'Mini JIB',
          desc:`<ul class="im-spec-list">
            <li>แขนยกกล้อง (จิ๊บ/เครน) ขนาดเล็ก ใช้ถ่ายมุมสูงหรือเคลื่อนกล้องขึ้น-ลงอย่างนุ่มนวล</li>
            <li>ต้องใช้ตุ้มถ่วงน้ำหนักฝั่งตรงข้ามกล้องเพื่อสมดุล ให้ภาพนิ่งขณะเคลื่อนไหว</li>
          </ul>`},
        {b:'—', m:'Magic Arm',
          desc:`<ul class="im-spec-list">
            <li>แขนจับปรับมุมได้อิสระ (ล็อกด้วยข้อต่อบอลหรือแบบข้อพับ) ใช้ยึดจอมอนิเตอร์ ไมค์ หรืออุปกรณ์เสริมเข้ากับริกกล้อง</li>
            <li>เป็นอุปกรณ์พื้นฐานที่ใช้บ่อยในการจัดวางอุปกรณ์รอบตัวกล้อง</li>
          </ul>`},
      ]},
      { name:'Monitor Camera', items:[
        {b:'Atomos', m:'Ninja 5"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์+เครื่องบันทึกนอกกล้อง หน้าจอ 5 นิ้ว สว่างพอมองเห็นได้ชัดแม้กลางแดด รองรับบันทึกวิดีโอคุณภาพสูง (ProRes/RAW ตามรุ่นกล้อง)</li>
            <li>มีเครื่องมือช่วยถ่าย เช่น Waveform, Focus Peaking, False Color ช่วยเช็คโฟกัสและแสงได้แม่นยำ</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Atomos</div>`},
        {b:'Atomos', m:'Shinobi 5.2" SDI',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ (ไม่บันทึกไฟล์) หน้าจอ 5.2 นิ้ว สว่างสูง เชื่อมต่อผ่านสาย SDI เหมาะกับกล้อง Cinema ที่มีช่อง SDI</li>
            <li>มีเครื่องมือช่วยถ่ายครบ เช่น Waveform, Focus Peaking, False Color</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Atomos</div>`},
        {b:'Atomos', m:'Shinobi 5.2" HDMI',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ (ไม่บันทึกไฟล์) หน้าจอ 5.2 นิ้ว สว่างสูง เชื่อมต่อผ่านสาย HDMI เหมาะกับกล้อง Mirrorless/DSLR</li>
            <li>มีเครื่องมือช่วยถ่ายครบ เช่น Waveform, Focus Peaking, False Color</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Atomos</div>`},
        {b:'Atomos', m:'Shogun 7"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์+เครื่องบันทึก+สวิตช์ภาพ 3-in-1 หน้าจอ 7 นิ้ว สว่างจัดมาก (ระดับพันนิตขึ้นไป) มองเห็นชัดกลางแดด</li>
            <li>รองรับบันทึก ProRes RAW ความละเอียดสูง และสลับภาพหลายกล้องได้ในตัวเดียว เหมาะกับงานโปรดักชันใหญ่</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Atomos</div>`},
        {b:'Hollyland', m:'Pyro 7"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ 7 นิ้ว ความสว่างสูง มองเห็นชัดกลางแจ้ง เชื่อมต่อผ่าน HDMI/SDI</li>
            <li>มีเครื่องมือช่วยถ่ายพื้นฐานครบ เหมาะเป็นจอมอนิเตอร์หลักติดริกกล้อง</li>
          </ul>`},
        {b:'Feelworld', m:'7"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ 7 นิ้ว ราคาประหยัด เหมาะเป็นจอช่วยดูภาพให้ทีมงานหรือผู้กำกับขณะถ่าย</li>
            <li>มีเครื่องมือช่วยถ่ายพื้นฐาน เช่น Focus Peaking, Histogram</li>
          </ul>`},
        {b:'Lilliput', m:'7"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ 7 นิ้ว คุณภาพสีดี เหมาะเป็นจอมอนิเตอร์ติดริกกล้องหรือจอดูภาพสำหรับทีมงาน</li>
            <li>มีเครื่องมือช่วยถ่ายพื้นฐานครบ เช่น Waveform, Focus Assist</li>
          </ul>`},
      ]},
      { name:'Monitor Director', items:[
        {b:'SWIT', m:'21.5" 4K',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ขนาดใหญ่ 21.5 นิ้ว รองรับความละเอียด 4K สำหรับให้ผู้กำกับ/ทีมงานดูภาพจากกล้องแบบเรียลไทม์ (Video Village)</li>
            <li>สีสมจริง เหมาะตั้งจอที่โต๊ะควบคุมข้างกองถ่าย ให้หลายคนดูพร้อมกันได้สบายตา</li>
          </ul>`},
        {b:'Panasonic', m:'18.5"',
          desc:`<ul class="im-spec-list">
            <li>จอมอนิเตอร์ขนาดใหญ่ 18.5 นิ้ว ให้ผู้กำกับ/ทีมงานดูภาพจากกล้องแบบเรียลไทม์ (Video Village)</li>
            <li>เหมาะตั้งจอที่โต๊ะควบคุมข้างกองถ่าย สีสมจริงเหมาะสำหรับเช็คงานภาพ</li>
          </ul>`},
      ]},
      { name:'Wireless Video', items:[
        {b:'SWIT', m:'FLOW500',
          desc:`<ul class="im-spec-list">
            <li>ระบบส่งสัญญาณภาพไร้สายจากกล้องไปจอมอนิเตอร์หรืออุปกรณ์อื่น ไม่ต้องเดินสาย HDMI/SDI ยาวๆ</li>
            <li>เหมาะกับงานที่กล้องต้องเคลื่อนที่ (กิมบอล/โดรน) หรือต้องการให้หลายจุดดูภาพพร้อมกัน</li>
          </ul>`},
        {b:'Hollyland', m:'Mars 400S',
          desc:`<ul class="im-spec-list">
            <li>ระบบส่งสัญญาณภาพไร้สาย ระยะทำการไกลระดับร้อยเมตรขึ้นไป หน่วงสัญญาณต่ำ เหมาะกับงานถ่ายจริงที่ต้องดูภาพเรียลไทม์</li>
            <li>ตัวรับสามารถต่อจอมอนิเตอร์หลายจอพร้อมกันได้ เหมาะกับทีมงานที่ต้องดูภาพหลายจุด</li>
          </ul>`},
        {b:'Accsoon', m:'CineView SE',
          desc:`<ul class="im-spec-list">
            <li>ระบบส่งสัญญาณภาพไร้สาย ขนาดเล็ก น้ำหนักเบา ใช้งานง่าย เหมาะกับกองถ่ายขนาดเล็ก–กลาง</li>
            <li>รองรับการรับสัญญาณผ่านมือถือ/แท็บเล็ตได้ด้วยแอปเฉพาะของแบรนด์</li>
          </ul>`},
      ]},
      { name:'Follow Focus', items:[
        {b:'TILTA', m:'Nucleus-M (Wireless)',
          desc:`<ul class="im-spec-list">
            <li>ระบบโฟกัสไร้สาย ควบคุมโฟกัสเลนส์จากระยะไกลผ่านมือหมุนไร้สาย ไม่ต้องยืนติดกล้อง</li>
            <li>เหมาะกับงานที่ต้องปรับโฟกัสขณะกล้องเคลื่อนที่ เช่น บนกิมบอลหรือรางเลื่อน</li>
          </ul>`},
        {b:'TILTA', m:'Manual',
          desc:`<ul class="im-spec-list">
            <li>ระบบโฟกัสแบบใช้มือหมุนต่อผ่านเฟือง ให้ผู้ช่วยกล้อง (AC) ปรับโฟกัสได้แม่นยำระหว่างถ่าย</li>
            <li>ราคาประหยัดกว่าระบบไร้สาย เหมาะกับงานที่กล้องอยู่กับที่หรือมีผู้ช่วยยืนประกบตลอด</li>
          </ul>`},
        {b:'SmallRig', m:'Manual',
          desc:`<ul class="im-spec-list">
            <li>ระบบโฟกัสแบบใช้มือหมุนต่อผ่านเฟือง ให้ผู้ช่วยกล้อง (AC) ปรับโฟกัสได้แม่นยำระหว่างถ่าย</li>
            <li>ราคาประหยัด เหมาะกับงานที่กล้องอยู่กับที่หรือมีผู้ช่วยยืนประกบตลอด</li>
          </ul>`},
      ]},
      { name:'Matte Box', items:[
        {b:'TILTA', m:'Mini',
          desc:`<ul class="im-spec-list">
            <li>บังแดดหน้าเลนส์ขนาดเล็ก กันแสงแฟลร์ (Flare) ไม่ให้แสงจากด้านข้างเข้าไปรบกวนภาพ</li>
            <li>ใส่ฟิลเตอร์สี่เหลี่ยม (ND/Diffusion) เพิ่มด้านหน้าได้ เหมาะกับกล้องขนาดเล็ก–กลาง</li>
          </ul>`},
        {b:'TILTA', m:'For FX6',
          desc:`<ul class="im-spec-list">
            <li>บังแดดหน้าเลนส์ ออกแบบมาพอดีกับตัวกล้อง Sony FX6 กันแสงแฟลร์และใส่ฟิลเตอร์เพิ่มได้</li>
            <li>ช่วยให้ภาพคอนทราสต์ดีขึ้นเมื่อถ่ายย้อนแสงหรือมีแหล่งแสงด้านข้าง</li>
          </ul>`},
        {b:'TILTA', m:'For RED',
          desc:`<ul class="im-spec-list">
            <li>บังแดดหน้าเลนส์ ออกแบบมาพอดีกับตัวกล้อง RED กันแสงแฟลร์และใส่ฟิลเตอร์เพิ่มได้</li>
            <li>ช่วยให้ภาพคอนทราสต์ดีขึ้นเมื่อถ่ายย้อนแสงหรือมีแหล่งแสงด้านข้าง</li>
          </ul>`},
        {b:'TILTA', m:'For FS7',
          desc:`<ul class="im-spec-list">
            <li>บังแดดหน้าเลนส์ ออกแบบมาพอดีกับตัวกล้อง Sony FS7 กันแสงแฟลร์และใส่ฟิลเตอร์เพิ่มได้</li>
            <li>ช่วยให้ภาพคอนทราสต์ดีขึ้นเมื่อถ่ายย้อนแสงหรือมีแหล่งแสงด้านข้าง</li>
          </ul>`},
      ]},
      { name:'Power Box', items:[
        {b:'EcoFlow', m:'1050W',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่สำรองไฟฟ้าแบบพกพา (Power Station) จ่ายไฟให้อุปกรณ์กองถ่ายในที่ไม่มีปลั๊กไฟ เช่น ไฟ LED หรือเครื่องชาร์จแบต</li>
            <li>มีทั้งช่องเสียบปลั๊กบ้าน (AC) และ USB ในตัวเดียว พกพาสะดวกกว่าเครื่องปั่นไฟ</li>
          </ul>`},
        {b:'Bluetti', m:'600W',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่สำรองไฟฟ้าแบบพกพา (Power Station) จ่ายไฟให้อุปกรณ์กองถ่ายในที่ไม่มีปลั๊กไฟ</li>
            <li>ขนาดกำลังรองลงมาจาก EcoFlow เหมาะกับอุปกรณ์ที่กินไฟไม่มากนัก</li>
          </ul>`},
      ]},
      { name:'Battery', items:[
        {b:'Canon', m:'R6 Battery',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่สำรองสำหรับกล้อง Canon EOS R-series ใช้ต่ออายุการถ่ายเมื่อแบตในตัวกล้องใกล้หมด</li>
            <li>ควรเตรียมสำรองอย่างน้อย 1–2 ก้อนสำหรับงานถ่ายวันยาว</li>
          </ul>`},
        {b:'Panasonic', m:'Lumix Battery',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่สำรองสำหรับกล้อง Panasonic Lumix S-series ใช้ต่ออายุการถ่ายเมื่อแบตในตัวกล้องใกล้หมด</li>
            <li>ควรเตรียมสำรองอย่างน้อย 1–2 ก้อนสำหรับงานถ่ายวันยาว</li>
          </ul>`},
        {b:'SWIT', m:'V-Mount Battery',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่ขนาดใหญ่มาตรฐาน V-Mount ใช้จ่ายไฟให้กล้อง Cinema จอมอนิเตอร์ หรืออุปกรณ์ริกต่างๆ ให้ทำงานได้นานหลายชั่วโมง</li>
            <li>เป็นแบตมาตรฐานของวงการโปรดักชัน ใช้ร่วมกับ Plate ยึดด้านหลังกล้องหรือริก</li>
          </ul>`},
        {b:'Sony', m:'NP-F (L) Battery',
          desc:`<ul class="im-spec-list">
            <li>แบตเตอรี่ทรงแท่งมาตรฐาน NP-F ใช้จ่ายไฟให้จอมอนิเตอร์ ไฟ LED ขนาดเล็ก หรืออุปกรณ์เสริมต่างๆ</li>
            <li>หาซื้อและชาร์จง่าย เป็นแบตยอดนิยมในอุปกรณ์ถ่ายทำขนาดเล็ก–กลาง</li>
          </ul>`},
      ]},
      { name:'Gimbal Stabilizer', items:[
        {b:'DJI', m:'RS 4',
          desc:`<ul class="im-spec-list">
            <li>กิมบอลกันสั่น 3 แกน รองรับน้ำหนักที่ทดสอบแล้วสูงสุด <b>3kg</b> และหมุนแกน Pan ได้ต่อเนื่อง 360°</li>
            <li>แบตเตอรี่ 3000mAh ใช้งานสูงสุดประมาณ <b>12 ชั่วโมง</b> เมื่อบาลานซ์และวางนิ่ง · รองรับ Bluetooth 5.1</li>
            <li>มีพอร์ต RSA/NATO, USB-C สำหรับควบคุมกล้องและ Focus Motor รวมถึงจุดยึด 1/4&quot;-20 และ Cold Shoe</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DJI</div>`},
      ]},
      { name:'Action Camera', items:[
        {b:'Canon', m:'PowerShot V10',
          desc:`<ul class="im-spec-list">
            <li>กล้องวล็อกขนาดพกพา บันทึกวิดีโอ 4K มีขาตั้งในตัว เปิดใช้งานง่าย เหมาะกับการถ่ายวล็อกเดี่ยว</li>
            <li>มีระบบกันสั่นในตัว ให้ภาพนิ่งขณะถือถ่ายเดินไปมา</li>
          </ul>`},
        {b:'DJI', m:'Osmo Pocket 3',
          desc:`<ul class="im-spec-list">
            <li>กล้องพกพาพร้อมกิมบอลกันสั่น 3 แกนในตัว เซนเซอร์ใหญ่ 1 นิ้ว ถ่ายในที่แสงน้อยได้ดี บันทึก 4K สูงสุด 120fps</li>
            <li>ภาพนิ่งมากแม้เดินถ่ายเร็วๆ เหมาะกับวล็อกหรือสารคดีที่ต้องเคลื่อนที่ตลอด</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DJI</div>`},
        {b:'Insta360', m:'GO Ultra',
          desc:`<ul class="im-spec-list">
            <li>กล้องจิ๋วขนาดเท่านิ้วโป้ง ติดตัวหรือติดของได้แทบทุกที่ มีระบบกันสั่นในซอฟต์แวร์ทำให้ภาพนิ่ง</li>
            <li>เหมาะกับมุมกล้องที่กล้องใหญ่เข้าไม่ถึง เช่น มุมมองบุคคลที่หนึ่ง (POV) หรือซ่อนมุมกล้อง</li>
          </ul>`},
        {b:'Insta360', m:'X4',
          desc:`<ul class="im-spec-list">
            <li>กล้อง 360 องศา ถ่ายรอบตัวได้ทุกทิศทางพร้อมกัน แล้วมาเลือกมุมมองทีหลังตอนตัดต่อ ความละเอียดสูงถึง 8K</li>
            <li>เหมาะกับงานที่ไม่แน่ใจว่าจะโฟกัสมุมไหน หรือต้องการเอฟเฟกต์ภาพหมุนรอบตัว</li>
          </ul>`},
        {b:'GoPro', m:'Hero 9 Black',
          desc:`<ul class="im-spec-list">
            <li>กล้องแอ็กชันกันน้ำในตัว บันทึก 5K ทนทานเหมาะกับกิจกรรมผาดโผนหรือถ่ายใต้น้ำ</li>
            <li>มีระบบกันสั่นดิจิทัล (HyperSmooth) ให้ภาพนิ่งแม้ถ่ายขณะเคลื่อนไหวเร็ว</li>
          </ul>`},
        {b:'GoPro', m:'Hero 12 Black',
          desc:`<ul class="im-spec-list">
            <li>กล้องแอ็กชันกันน้ำในตัว รุ่นใหม่กว่า Hero 9 ระบบกันสั่นดีขึ้นและแบตอึดขึ้น บันทึกภาพนิ่งได้ดีในที่แสงน้อยกว่าเดิม</li>
            <li>เหมาะกับงานถ่ายกิจกรรมผาดโผน กีฬา หรือมุมกล้องที่ต้องการความทนทาน</li>
          </ul>`},
      ]},
      { name:'Tripod', items:[
        {b:'Ulanzi', m:'JJ06 GlideGo Video Tripod',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งคาร์บอนไฟเบอร์พร้อมหัววิดีโอ หมุน Pan 360° และ Tilt -50° ถึง +60° · ระบบ Quick Release รองรับ Uka/F38</li>
            <li>ความสูงใช้งาน <b>44–187cm</b> พับเหลือ 51.5cm น้ำหนัก 1.76kg · ขารับโครงสร้างได้ 18kg แต่หัวรองรับการใช้งานจริงสูงสุด <b>5kg</b></li>
            <li>มีแกนกลางสองตอนสำหรับมุมสูง–ต่ำ และด้ามไขควงพร้อมหัวเปลี่ยน 7 แบบติดตั้งในตัว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Ulanzi</div>`},
        {b:'Manfrotto', m:'Monopod',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งกล้องขาเดียว ช่วยพยุงน้ำหนักกล้องและลดการสั่นไหวขณะถ่าย โดยยังเคลื่อนที่ได้คล่องกว่าขาตั้ง 3 ขา</li>
            <li>เหมาะกับงานถ่ายกีฬา งานอีเวนต์ หรือสถานการณ์ที่ต้องเคลื่อนที่ตามตัวแบบตลอดเวลา</li>
          </ul>`},
        {b:'Sachtler', m:'FSB 6',
          desc:`<ul class="im-spec-list">
            <li>หัวขาตั้งกล้องแบบไฮดรอลิก (Fluid Head) แพนกล้องซ้าย-ขวา หรือก้ม-เงย ได้นุ่มนวลไม่กระตุก</li>
            <li>รับน้ำหนักกล้องได้ระดับ Cinema Camera ขนาดกลาง เหมาะกับงานที่ต้องแพนกล้องตามตัวแบบ</li>
          </ul>`},
        {b:'Sachtler', m:'Ace M GS',
          desc:`<ul class="im-spec-list">
            <li>หัวขาตั้งกล้องแบบไฮดรอลิก (Fluid Head) รุ่นเริ่มต้น เคลื่อนกล้องนุ่มนวล เหมาะกับกล้อง Mirrorless ถึง Cinema ขนาดเล็ก-กลาง</li>
            <li>มาพร้อมขาตั้งแบบสปริง (GS) ช่วยกันกระแทกเวลาตั้งขาบนพื้นแข็ง</li>
          </ul>`},
        {b:'E-IMAGE', m:'GH08',
          desc:`<ul class="im-spec-list">
            <li>หัวขาตั้งกล้องแบบไฮดรอลิก (Fluid Head) เคลื่อนกล้องนุ่มนวล ราคาประหยัดกว่าแบรนด์พรีเมียม</li>
            <li>เหมาะกับกล้อง Mirrorless ถึง Cinema ขนาดเล็ก-กลาง ใช้งานทั่วไปในกองถ่าย</li>
          </ul>`},
        {b:'Sachtler', m:'Camera Tripod Bowl 75',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งกล้อง 3 ขา แบบ Bowl 75mm มาตรฐานวงการภาพยนตร์ ใช้คู่กับหัว Fluid Head ที่มีฐาน Bowl ขนาดเดียวกัน</li>
            <li>ปรับระดับได้เร็วด้วยระบบ Bowl แข็งแรงมั่นคง เหมาะกับกล้อง Cinema ขนาดกลาง-ใหญ่</li>
          </ul>`},
        {b:'MILLER', m:'Camera Tripod Bowl 75',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งกล้อง 3 ขา แบบ Bowl 75mm มาตรฐานวงการภาพยนตร์ ใช้คู่กับหัว Fluid Head ที่มีฐาน Bowl ขนาดเดียวกัน</li>
            <li>แข็งแรงมั่นคง เหมาะกับกล้อง Cinema ขนาดกลาง-ใหญ่</li>
          </ul>`},
        {b:'—', m:'Baby Tripod',
          desc:`<ul class="im-spec-list">
            <li>ขาตั้งกล้องเตี้ยพิเศษ สำหรับถ่ายมุมต่ำระดับพื้น เช่น ช็อตมุมเงย หรือถ่ายวัตถุขนาดเล็กบนโต๊ะ</li>
            <li>ใช้ร่วมกับหัว Fluid Head ได้เหมือนขาตั้งปกติ เพียงแต่ความสูงต่ำกว่ามาก</li>
          </ul>`},
      ]},
      { name:'Power Plug', items:[
        {b:'—', m:'ปลั๊กไฟ โรลเก็บสายไฟ',
          desc:`<ul class="im-spec-list">
            <li>ปลั๊กไฟพร้อมสายยาวแบบม้วนเก็บได้ ใช้ต่อไฟจากจุดปลั๊กไปยังอุปกรณ์ที่อยู่ไกลออกไป</li>
            <li>ม้วนเก็บสายสะดวก ลดปัญหาสายพันกันหลังใช้งานเสร็จ</li>
          </ul>`},
        {b:'—', m:'ปลั๊กไฟ AC',
          desc:`<ul class="im-spec-list">
            <li>ปลั๊กพ่วงไฟบ้านทั่วไป เพิ่มจำนวนช่องเสียบให้พอกับอุปกรณ์หลายชิ้นในกองถ่าย</li>
            <li>เป็นอุปกรณ์พื้นฐานที่ต้องมีติดกองถ่ายเสมอ</li>
          </ul>`},
      ]},
      { name:'Maglinier', items:[
        {b:'—', m:'Maglinier Cart',
          desc:`<ul class="im-spec-list">
            <li>รถเข็นอุปกรณ์แบบพับได้ ใช้ขนย้ายอุปกรณ์กองถ่าย (ไฟ ขาตั้ง กล่องอุปกรณ์) เข้า-ออกสถานที่ถ่ายทำ</li>
            <li>ล้อใหญ่ทนทาน เข็นได้บนพื้นผิวหลากหลาย ประหยัดแรงทีมงานเวลาขนของ</li>
          </ul>`},
      ]},
    ]
  },
  { id:'sound', label:'เสียง (Sound)', accent:'--green',
    groups:[
      { name:'Field Recorder', items:[
        {b:'Zoom', m:'H6', image:'assets/images/equipment/zoom-h6-transparent-fit.png', imageAlt:'เครื่องบันทึกเสียง Zoom H6 Handy Recorder', role:'recorder', channels:4, connector:'combo',
          desc:`<ul class="im-spec-list">
            <li><b>4 อินพุต XLR/TRS Combo</b> (Phantom +12/+24/+48V) + ไมค์ X/Y ในตัวอีก 2 ช่อง รวมบันทึกได้สูงสุด 6 แทร็กพร้อมกัน</li>
            <li>บันทึกสูงสุด <b>24-bit/96kHz</b> · เปลี่ยนหัวไมค์ (Capsule) ได้ตามงาน (X/Y, Shotgun, MS ฯลฯ)</li>
            <li>ใช้เป็น USB Audio Interface ได้ (6-in/2-out)</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Zoom</div>`},
        {b:'Zoom', m:'H8', image:'assets/images/equipment/zoom-h8-local.png', imageAlt:'เครื่องบันทึกเสียง Zoom H8 Handy Recorder', role:'recorder', channels:6, connector:'combo',
          desc:`<ul class="im-spec-list">
            <li>รวม <b>8 อินพุต</b> (4 XLR + 2 XLR/TRS Combo A/B + ไมค์ในตัว 2 ช่อง) บันทึกได้สูงสุด 12 แทร็กพร้อมกัน (รวม Backup)</li>
            <li>บันทึกสูงสุด <b>24-bit/96kHz</b> · ระบบ Capsule System 2.0 เปลี่ยนหัวไมค์ได้หลายแบบ</li>
            <li>มีโหมดแอปสำเร็จรูป Podcast / Music / Field ในตัว พร้อมจอสัมผัส</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Zoom</div>`},
        {b:'Zoom', m:'F4', image:'assets/images/equipment/zoom-f4-transparent-fit.png', imageAlt:'เครื่องบันทึกเสียงภาคสนาม Zoom F4 MultiTrack Field Recorder', role:'recorder', channels:4, connector:'combo',
          desc:`<ul class="im-spec-list">
            <li><b>4 อินพุต XLR/TRS Combo</b> พรีแอมป์คุณภาพสูง (EIN -127dBu, เกนสูงสุด 75dB) บันทึกได้สูงสุด 8 แทร็ก</li>
            <li>บันทึกสูงสุด <b>24-bit/192kHz</b> · มี Timecode I/O ผ่าน BNC ความแม่นยำ 0.2ppm พร้อม Jam Sync</li>
            <li>เหมาะกับงานที่ต้อง sync เสียง-ภาพกับกล้องหลายตัว</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Zoom</div>`},
        {b:'Zoom', m:'F6', image:'assets/images/equipment/zoom-f6-local.png', imageAlt:'เครื่องบันทึกเสียงภาคสนาม Zoom F6 MultiTrack Field Recorder', role:'recorder', channels:6, connector:'combo',
          desc:`<ul class="im-spec-list">
            <li><b>6 อินพุต XLR</b> (ไม่ใช่ Combo — เฉพาะ XLR เท่านั้น) พรีแอมป์ noise floor ต่ำมาก (EIN -127dBu)</li>
            <li>เครื่องแรกที่บันทึก <b>32-bit Float</b> พร้อม Dual A/D Converter ไม่ต้องปรับเกนกันเสียงแตก · รองรับ 24-bit/192kHz</li>
            <li>Timecode ผ่าน 3.5mm TRS ความแม่นยำ 0.2ppm · บันทึกได้สูงสุด 14 แทร็ก</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Zoom</div>`},
        {b:'Zoom', m:'L8', image:'assets/images/equipment/zoom-l8-transparent-fit.png', imageAlt:'ดิจิทัลมิกเซอร์และเครื่องบันทึกเสียง Zoom LiveTrak L-8', role:'recorder', channels:8, connector:'combo',
          desc:`<ul class="im-spec-list">
            <li>มิกเซอร์ + เครื่องบันทึก <b>8 ช่องอินพุต</b> (6 XLR/TRS Combo + 2 Line) บันทึกได้สูงสุด 12 แทร็กพร้อมกัน</li>
            <li>บันทึกสูงสุด <b>24-bit/96kHz</b> · ใช้เป็น USB Audio Interface 12-in/4-out ได้พร้อมกับบันทึกลง SD Card</li>
            <li>มี Sound Pad และ Monitor Mix แยก 3 ชุด เหมาะกับงาน Podcast/Live</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Zoom</div>`},
      ]},
      { name:'Wireless Mic System', items:[
        {b:'RØDE', m:'Wireless GO II', image:'assets/images/equipment/rode-wireless-go-ii-fit.png', imageAlt:'ชุดไมโครโฟนไร้สาย RØDE Wireless GO II', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ระบบไมค์ไร้สาย <b>Dual-channel</b> (เครื่องส่ง 2 + เครื่องรับ 1) ใช้คลื่น 2.4GHz Series IV เข้ารหัส 128-bit</li>
            <li>ระยะสัญญาณสูงสุด <b>200 เมตร</b> (แนวสายตา) · บันทึกในตัวเครื่องส่งได้นานกว่า 40 ชั่วโมงต่อครั้ง (กันสัญญาณหลุด)</li>
            <li>เอาต์พุต 3.5mm TRS (Analog) และ USB-C (Digital) — ต้องใช้สายแปลงหากต่อเข้าเครื่องบันทึกที่เป็น XLR/6.3mm</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RØDE</div>`},
        {b:'DJI', m:'Mic 3', image:'assets/images/equipment/dji-mic-3-fit.png', imageAlt:'ชุดไมโครโฟนไร้สาย DJI Mic 3 พร้อมกล่องชาร์จ', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ชุดมาตรฐานมี <b>1 เครื่องรับ + 2 เครื่องส่ง</b> บันทึกเสียงคนพูด 2 คนพร้อมกันได้ในตัว · เครื่องรับ 1 ตัวเชื่อมต่อเพิ่มเครื่องส่งได้สูงสุด <b>4 ตัว</b> (ซื้อเพิ่มแยกได้)</li>
            <li>ระยะสัญญาณสูงสุด <b>400 เมตร</b> สลับคลื่น 2.4GHz/5GHz อัตโนมัติกันสัญญาณรบกวน</li>
            <li>บันทึกในตัวเครื่องส่งแบบ <b>32-bit Float</b> (Dual-file) พร้อม Timecode ในตัว · เอาต์พุต 3.5mm ที่เครื่องรับ</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ DJI</div>`},
        {b:'Saramonic', m:'Blink 500 Pro', image:'assets/images/equipment/saramonic-blink-500-prox-fit.png', imageAlt:'ชุดไมโครโฟนไร้สาย Saramonic Blink 500 Pro พร้อมกล่องชาร์จ', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ระบบไมค์ไร้สาย <b>Dual-channel</b> เลือกโหมด Mono/Stereo ได้ที่ตัวเครื่องรับ ใช้คลื่น 2.4GHz</li>
            <li>ระยะสัญญาณสูงสุด <b>100 เมตร</b> (แนวสายตา) · ส่งสัญญาณเสียงที่ 48kHz/16-bit</li>
            <li>เอาต์พุต 3.5mm พร้อมสาย TRS/TRRS สำหรับกล้องและมือถือในกล่อง — ต้องใช้สายแปลงหากต่อเข้าเครื่องบันทึกที่เป็น XLR/6.3mm</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Saramonic</div>`},
        {b:'Sennheiser', m:'EW (Bodypack Set)', image:'assets/images/equipment/sennheiser-ew-g4-fit.png', imageAlt:'ชุดไมโครโฟนไร้สาย Sennheiser EW แบบบอดี้แพ็ก', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ระบบไมค์ไร้สายแบบ <b>Wideband FM ย่าน UHF</b> ในตระกูล Evolution Wireless G4 สำหรับงานบอดี้แพ็กและไมค์ลาวาเลียร์</li>
            <li>แบนด์วิดท์การสวิตช์สูงสุด <b>42MHz</b> และเลือกความถี่ได้สูงสุด 1,680 ความถี่ตามย่านความถี่ของชุด</li>
            <li>เครื่องรับบอดี้แพ็ก EK 100 G4 ใช้เอาต์พุตเสียง 3.5mm แบบล็อกเกลียว — เลือกสายต่อให้ตรงกับอินพุตของกล้องหรือเครื่องบันทึก</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Sennheiser</div>`},
      ]},
      { name:'Boom Setup', items:[
        {b:'RØDE', m:'NTG3 (Shotgun Mic)', role:'source', channels:1, connector:'xlr',
          desc:`<ul class="im-spec-list">
            <li>ไมค์ Shotgun ระดับ Broadcast ทิศทางรับเสียงแบบ <b>Super-cardioid</b> ให้เสียงอุ่นและธรรมชาติ</li>
            <li>ย่านความถี่ 40Hz–20kHz · Self-noise ต่ำมากเพียง 13dBA (เงียบกว่าไมค์ Shotgun ทั่วไป)</li>
            <li>เทคโนโลยี RF-bias ทนความชื้น เหมาะถ่ายนอกสถานที่ · เอาต์พุต XLR ต้องใช้ Phantom Power 48V</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RØDE</div>`},
        {b:'RØDE', m:'PG2-R Shock Mount',
          desc:`<ul class="im-spec-list">
            <li>ด้ามจับปืน (Pistol Grip) สำหรับไมค์ Shotgun ใช้ระบบกันสั่น <b>Rycote Lyre คู่</b> ลดเสียงจากการจับถือ</li>
            <li>มี 4 จุดยึดไมค์ รองรับไมค์ Shotgun ของ RØDE ได้หลายรุ่น</li>
            <li>เกลียว 3/8" ที่ฐาน ต่อเข้า Boompole หรือขาตั้งไมค์ได้ — เป็นอุปกรณ์กันสั่น ไม่ใช่ตัวไมค์</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RØDE</div>`},
        {b:'RØDE', m:'Blimp',
          desc:`<ul class="im-spec-list">
            <li>ชุดกันลม + กันสั่นแบบเต็มระบบสำหรับไมค์ Shotgun ความยาวไม่เกิน 325mm ใช้ระบบ <b>Rycote Lyre</b></li>
            <li>มาพร้อมปลอกขน "Dead Wombat" กันเสียงลมสำหรับถ่ายนอกสถานที่</li>
            <li>ยึดกับ Boompole มาตรฐานผ่านเกลียว 3/8" ที่ฐาน</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RØDE</div>`},
        {b:'—', m:'Windshield / Dead Cat',
          desc:`<ul class="im-spec-list">
            <li>ปลอกกันลม/กันเสียงปะทะสำหรับไมค์ Shotgun หรือไมค์บูม ลดเสียงลมและลมหายใจปะทะไมค์</li>
            <li>แบบขนยาว (Dead Cat/Fur) ให้การกันลมสูงสุด เหมาะถ่ายกลางแจ้งหรือที่มีลมแรง</li>
            <li>สวมทับปลอกโฟมหรือ Blimp เดิมได้ ไม่กระทบคุณภาพเสียงหลักของไมค์</li>
          </ul>`},
        {b:'RØDE', m:'Boompole',
          desc:`<ul class="im-spec-list">
            <li>บูมอลูมิเนียม 5 ท่อน ยืดได้ตั้งแต่ <b>0.84m ถึง 3.3m</b> ล็อกแบบบิด (Twist-lock) แน่นทุกความยาว</li>
            <li>เดินสาย XLR ภายในท่อได้ (Internal Cable Routing) ลดปัญหาสายพันกันเวลาบูม</li>
            <li>เกลียว 3/8" มาตรฐาน ใช้ร่วมกับ Shock Mount หรือ Blimp ของ RØDE และแบรนด์อื่นได้</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ RØDE</div>`},
      ]},
      { name:'Lavalier Mic', items:[
        {b:'BOYA', m:'BY-M1S', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ไมค์ Lavalier แบบ Condenser ทิศทางรับเสียงรอบตัว <b>Omnidirectional</b> ย่านความถี่ 50Hz–20kHz</li>
            <li>Signal-to-Noise Ratio 78dB · ใช้ไฟเลี้ยงจากกล้อง/เครื่องบันทึกโดยตรง ไม่ต้องใส่ถ่าน (ต่างจากรุ่น BY-M1 เดิม)</li>
            <li>เอาต์พุต 3.5mm — ต้องใช้สายแปลงหากต่อเข้าเครื่องบันทึกที่เป็น XLR/6.3mm</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ BOYA</div>`},
        {b:'Tentacle', m:'Sync Lavalier', role:'source', channels:1, connector:'3.5mm',
          desc:`<ul class="im-spec-list">
            <li>ไมค์ Lavalier แบบ Condenser <b>Omnidirectional</b> ย่านความถี่ 50Hz–20kHz</li>
            <li>หัวต่อ 3.5mm แบบล็อก (Locking) กันสายหลุดขณะเคลื่อนไหว ใช้ร่วมกับ Tentacle TRACK E ได้โดยตรง</li>
            <li>ใช้กับเครื่องบันทึก/เครื่องส่งไร้สายยี่ห้ออื่นที่จ่ายไฟ 5V ผ่านขั้ว 3.5mm แบบ Sennheiser ได้เช่นกัน — ต้องใช้สายแปลงหากต่อเข้าเครื่องบันทึกที่เป็น XLR/6.3mm</li>
          </ul>
          <div class="im-spec-source">อ้างอิงข้อมูลจากเว็บไซต์ทางการ Tentacle Sync</div>`},
      ]},
    ]
  },
];

  const EQUIPMENT_IMAGES = [
    ['mirrorless','กล้อง (Camera)','Canon','EOS R6 Mark II','assets/images/equipment/catalog-2026/กล้อง DSLR/Canon EOS R6 Mark ii.png'],
    ['mirrorless','กล้อง (Camera)','Canon','EOS R7','assets/images/equipment/catalog-2026/กล้อง DSLR/Canon EOS R7.png'],
    ['mirrorless','กล้อง (Camera)','Canon','EOS RP','assets/images/equipment/catalog-2026/กล้อง DSLR/Canon EOS RP.png'],
    ['mirrorless','กล้อง (Camera)','Panasonic','Lumix S5 II','assets/images/equipment/catalog-2026/กล้อง DSLR/Panasonic Lumix S5 II.png'],
    ['mirrorless','กล้อง (Camera)','Panasonic','Lumix S5','assets/images/equipment/catalog-2026/กล้อง DSLR/Panasoinc S5.png'],
    ['mirrorless','เลนส์ Canon','Canon','kit 24-105mm F4-7.1','assets/images/equipment/catalog-2026/Lens/Canon 24-105mm F4-7.1.png'],
    ['mirrorless','เลนส์ Canon','Canon','kit 70-200mm F4','assets/images/equipment/catalog-2026/Lens/Canon 70-200mm f4L.png'],
    ['mirrorless','เลนส์ Canon','Canon','35mm F1.8','assets/images/equipment/catalog-2026/Lens/Canon 35mm F1.8.png'],
    ['mirrorless','เลนส์ Canon','Canon','50mm F1.8','assets/images/equipment/catalog-2026/Lens/Canon 50mm F1.8.png'],
    ['mirrorless','เลนส์ Canon','Canon','85mm F2.0','assets/images/equipment/catalog-2026/Lens/Canon 85mm F2.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','kit 24-105mm F4','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 24-105mm f4.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','18mm F1.8','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 18mm f1.8.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','24mm F1.8','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 24mm f1.8.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','50mm F1.8','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 50mm f1.8.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','85mm F1.8','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 85mm f1.8.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','20-60mm F3.5-5.6','assets/images/equipment/catalog-2026/Lens/Panasonic Lumix S 20-60mm f3.5-5.6.png'],
    ['cinema','Cinema Camera','Sony','FX6','assets/images/equipment/catalog-2026/Cinema Camera/Sony-FX6-Full-Frame-Cinema-Camera-Body-Only.png'],
    ['cinema','Cinema Camera','Sony','FS7','assets/images/equipment/catalog-2026/Cinema Camera/Sony FS7.png'],
    ['cinema','Cinema Camera','Sony','FS5','assets/images/equipment/catalog-2026/Cinema Camera/Sony FS5.png'],
    ['cinema','Cinema Camera','RED','DRAGON','assets/images/equipment/catalog-2026/Cinema Camera/red dragon camera.png'],
    ['cinema','Cinema Camera','Blackmagic','Pocket 4K','assets/images/equipment/catalog-2026/Cinema Camera/Blackmagic-Design-Pocket-Cinema-Camera-4K.png'],
    ['cinema','Cinema Lens — Sony E Mount','Sony','E Mount 28-135mm','assets/images/equipment/catalog-2026/Cinema Camera/Sony E Mount 28-135mm.png'],
    ['cinema','Cinema Lens — Sigma (PL Mount)','Sigma','35mm T1.5','assets/images/equipment/catalog-2026/Cinema Camera/Sigma 35mm T1.5.png'],
    ['cinema','Cinema Lens — Sigma (PL Mount)','Sigma','50mm T1.5','assets/images/equipment/catalog-2026/Cinema Camera/Sigma 50mm T1.5.png'],
    ['cinema','Cinema Lens — Sigma (PL Mount)','Sigma','105mm T1.5','assets/images/equipment/catalog-2026/Cinema Camera/Sigma 105mm T1.5.png'],
    ['cinema','Cinema Lens — Tokina (PL Mount)','Tokina','16-28mm T3','assets/images/equipment/catalog-2026/Cinema Camera/Tokina 16-28mm T3 PL Mount.png'],
    ['cinema','Cinema Lens — Tokina (PL Mount)','Tokina','50-135mm T3','assets/images/equipment/catalog-2026/Cinema Camera/Tokina 50-135mm T3 PL Mount.png'],
    ['cinema','Cinema Lens — Tokina (EF Mount)','Tokina','16-28mm T3','assets/images/equipment/catalog-2026/Cinema Camera/Tokina 16-18mm T3 EF Mount.png'],
    ['cinema','Cinema Lens — Tokina (EF Mount)','Tokina','50-135mm T3','assets/images/equipment/catalog-2026/Cinema Camera/Tokina 50-135mm T3 EF Mount.png'],
    ['cinema','Cinema Lens — Dzofilm (PL Mount)','Dzofilm','12mm T2.8','assets/images/equipment/catalog-2026/Cinema Camera/Dzofilm 12mm T2.8 PL Mount.png'],
    ['cinema','Cinema Lens — Dzofilm (PL Mount)','Dzofilm','25mm T2.1','assets/images/equipment/catalog-2026/Cinema Camera/Dzofilm 25mm T2.1 PL Mount.png'],
    ['cinema','Cinema Lens — Dzofilm (PL Mount)','Dzofilm','35mm T2.1','assets/images/equipment/catalog-2026/Cinema Camera/Dzofilm 35mm T2.1 PL Mount.png'],
    ['cinema','Cinema Lens — Dzofilm (PL Mount)','Dzofilm','50mm T2.1','assets/images/equipment/catalog-2026/Cinema Camera/Dzofilm 50mm T2.1 PL Mount.png'],
    ['cinema','Cinema Lens — Dzofilm (PL Mount)','Dzofilm','100mm T2.1','assets/images/equipment/catalog-2026/Cinema Camera/Dzofilm 100mm T2.1 PL Mount.png'],
    ['cinema','Cinema Lens — ATHENA (E Mount)','ATHENA','14mm T2.4','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 14mm T2.4 E Mount.png'],
    ['cinema','Cinema Lens — ATHENA (E Mount)','ATHENA','25mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 25mm T1.9 E Mount.png'],
    ['cinema','Cinema Lens — ATHENA (E Mount)','ATHENA','35mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 35mm T1.9 E Mount.png'],
    ['cinema','Cinema Lens — ATHENA (E Mount)','ATHENA','50mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 50mm T1.9 E Mount.png'],
    ['cinema','Cinema Lens — ATHENA (E Mount)','ATHENA','85mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 85mm T1.9 E Mount.png'],
    ['cinema','Cinema Lens — ATHENA (PL Mount)','ATHENA','14mm T2.4','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 14mm T2.4 PL Mount.png'],
    ['cinema','Cinema Lens — ATHENA (PL Mount)','ATHENA','25mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 25mm T1.9 PL Mount.png'],
    ['cinema','Cinema Lens — ATHENA (PL Mount)','ATHENA','35mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 35mm T1.9 PL Mount.png'],
    ['cinema','Cinema Lens — ATHENA (PL Mount)','ATHENA','50mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 50mm T1.9 PL Mount.png'],
    ['cinema','Cinema Lens — ATHENA (PL Mount)','ATHENA','85mm T1.9','assets/images/equipment/catalog-2026/Cinema Camera/ATHENA 85mm T1.9 PL Mount.png'],
    ['lights','Video Lights','Aputure','MC 4-Kit','assets/images/equipment/catalog-2026/Video Lights/Aputure MC 4- kit.png'],
    ['lights','Video Lights','Amaran','300c','assets/images/equipment/catalog-2026/Video Lights/Amaran 300c.png'],
    ['lights','Video Lights','Nanlite','Fs-60','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-60.png'],
    ['lights','Video Lights','Nanlite','Fs-150','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-150.png'],
    ['lights','Video Lights','Nanlite','Fs-150 B','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-150B.png'],
    ['lights','Video Lights','Nanlite','Fs-200','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-200.png'],
    ['lights','Video Lights','Nanlite','Fs-300 B','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-300 B.png'],
    ['lights','Video Lights','Nanlite','Fs-300 C','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fs-300 C.png'],
    ['lights','Video Lights','Nanlite','Fc-300 B','assets/images/equipment/catalog-2026/Video Lights/Nanlite Fc-300B.png'],
    ['lights','Video Lights','Godox','TL120 LED Tube Light','assets/images/equipment/catalog-2026/Video Lights/Godox TL120 LED Tube.png'],
    ['lights','Video Lights','SmallRig','Vibe P108 RGB','assets/images/equipment/catalog-2026/Video Lights/SmallRig Vibe P108 RGB.png'],
    ['lights','Video Lights','Ulanzi','VL119','assets/images/equipment/catalog-2026/Video Lights/Ulanzi VL119.png'],
    ['lights','Video Lights','—','LED Light Stick','assets/images/equipment/catalog-2026/Video Lights/LED Light Stick.png'],
    ['lights','Video Lights','NanGuang','CN-600HS','assets/images/equipment/catalog-2026/Video Lights/NanGuang CN-600HS.png'],
    ['lights','Video Lights','—','Ring Light 60w','assets/images/equipment/catalog-2026/Video Lights/Ring Light 60 w.png'],
    ['lights','Video Lights','Nicefoto','100w','assets/images/equipment/catalog-2026/Video Lights/Nicefoto 100w.png'],
    ['lights','Softbox','Nicefoto','Lantern 60','assets/images/equipment/catalog-2026/Softbox/Nicefoto lantern 60.png'],
    ['lights','Softbox','Nanlite','Lantern 80','assets/images/equipment/catalog-2026/Softbox/Nanlite lantern 80.png'],
    ['lights','Softbox','Aputure','Lantern 90','assets/images/equipment/catalog-2026/Softbox/Aputure lantern 90.png'],
    ['lights','Softbox','Aputure','Octadome 120','assets/images/equipment/catalog-2026/Softbox/Aputure Octadome 120.png'],
    ['lights','Softbox','Nanlite','Parabolic 60','assets/images/equipment/catalog-2026/Softbox/Nanlite Parabolic 60.png'],
    ['lights','Softbox','Nanlite','Parabolic 90','assets/images/equipment/catalog-2026/Softbox/Nanlite Parabolic 90.png'],
    ['lights','Reflector','Godox','110','assets/images/equipment/catalog-2026/Reflector/Godox Reflector 110cm.png'],
    ['lights','Reflector','Godox','100x150','assets/images/equipment/catalog-2026/Reflector/Godox Reflector 100x150.png'],
    ['accessories','Battery','Canon','R6 Battery','assets/images/equipment/catalog-2026/BATTERY/BATTERY Canon R6.png'],
    ['accessories','Battery','Panasonic','Lumix Battery','assets/images/equipment/catalog-2026/BATTERY/BATTERY Lumix.png'],
    ['accessories','Gimbal Stabilizer','DJI','RS 4','assets/images/equipment/catalog-2026/Gimbal Stabilizers/DJI Ronin RS4.png'],
    ['accessories','Action Camera','Canon','PowerShot V10','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/Canon PowerShot V10.png'],
    ['accessories','Action Camera','DJI','Osmo Pocket 3','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/DJI Osmo Pocket 3.png'],
    ['accessories','Action Camera','Insta360','GO Ultra','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/Insta360 GO Ultra.png'],
    ['accessories','Action Camera','Insta360','X4','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/Insta360 X4.png'],
    ['accessories','Action Camera','GoPro','Hero 9 Black','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/Gopro Hero 9 Black.png'],
    ['accessories','Action Camera','GoPro','Hero 12 Black','assets/images/equipment/catalog-2026/กล้อง Action Camera - Mirrorless/Gopro Hero 12 Black.png'],
    ['accessories','Tripod','Ulanzi','JJ06 GlideGo Video Tripod','assets/images/equipment/catalog-2026/Tripod/Ulanzi JJ06.png'],
    ['accessories','Tripod','Manfrotto','Monopod','assets/images/equipment/catalog-2026/Tripod/Manfrotto Monopod.png'],
    ['accessories','Tripod','Sachtler','FSB 6','assets/images/equipment/catalog-2026/Tripod/Sachtler FSB 6.png'],
    ['accessories','Tripod','Sachtler','Ace M GS','assets/images/equipment/catalog-2026/Tripod/Sachtler Ace M GS.png'],
    ['accessories','Tripod','E-IMAGE','GH08','assets/images/equipment/catalog-2026/Tripod/E-IMAGE GH08.png'],
    ['accessories','Power Plug','—','ปลั๊กไฟ โรลเก็บสายไฟ','assets/images/equipment/catalog-2026/Power plug/โรลเก็บสายไฟ.png'],
    ['accessories','Power Plug','—','ปลั๊กไฟ AC','assets/images/equipment/catalog-2026/Power plug/AC.png']
  ];

  // SET 2 transparent cutouts. These entries only override image paths;
  // the original equipment brands and model names above remain unchanged.
  EQUIPMENT_IMAGES.push(
    ['accessories','Wireless Video','Accsoon','CineView SE','assets/images/equipment/set-2-transparent/Accsoon CineView SE.png'],
    ['lights','Cinema Lights','Aputure','Light Storm 1200d Pro','assets/images/equipment/set-2-transparent/Aputure Light Storm 1200d Pro.png'],
    ['lights','Cinema Lights','Aputure','LS 600x Pro','assets/images/equipment/set-2-transparent/Aputure LS 600x Pro.png'],
    ['accessories','Monitor Camera','Atomos','Ninja 5"','assets/images/equipment/set-2-transparent/Atomos Ninja 5.png'],
    ['accessories','Monitor Camera','Atomos','Shinobi 5.2" HDMI','assets/images/equipment/set-2-transparent/Atomos Shinobi 5.2 HDMI.png'],
    ['accessories','Monitor Camera','Atomos','Shinobi 5.2" SDI','assets/images/equipment/set-2-transparent/Atomos Shinobi 5.2.png'],
    ['accessories','Monitor Camera','Atomos','Shogun 7"','assets/images/equipment/set-2-transparent/Atomos Shogun 7.png'],
    ['accessories','Tripod','—','Baby Tripod','assets/images/equipment/set-2-transparent/Baby Tripod.png'],
    ['accessories','Accessories — Lights','Back Drop','Green Screen','assets/images/equipment/set-2-transparent/Back Drop Green Screen.png'],
    ['accessories','Power Box','Bluetti','600W','assets/images/equipment/set-2-transparent/Bluetti 600W.png'],
    ['mirrorless','เลนส์ Canon','Canon','RF-S 18-150mm F3.5-6.3','assets/images/equipment/set-2-transparent/Canon RF-S 18-150mm F3.5-6.3.png'],
    ['accessories','Power Box','EcoFlow','1050W','assets/images/equipment/set-2-transparent/EcoFlow 1050W.png'],
    ['accessories','Monitor Camera','Feelworld','7"','assets/images/equipment/set-2-transparent/Feelworld 7.png'],
    ['lights','Cinema Lights','Filmgear','1200w','assets/images/equipment/set-2-transparent/Filmgear 1200w.png'],
    ['lights','Cinema Lights','Filmgear','2000w','assets/images/equipment/set-2-transparent/Filmgear 2000w.png'],
    ['lights','Cinema Lights','Filmgear','575w','assets/images/equipment/set-2-transparent/Filmgear 575w.png'],
    ['accessories','Accessories — Lights','Frame','Cutter','assets/images/equipment/set-2-transparent/Frame Cutter.png'],
    ['accessories','Accessories — Lights','Frame','Diffuser','assets/images/equipment/set-2-transparent/Frame Diffuser.png'],
    ['accessories','Accessories — Lights','Frame','Gobo','assets/images/equipment/set-2-transparent/Frame Gobo.png'],
    ['accessories','Accessories — Lights','Frame','Scrim Soft Light','assets/images/equipment/set-2-transparent/Frame Scrim Soft Light.png'],
    ['accessories','Accessories — Lights','Frame','Soft','assets/images/equipment/set-2-transparent/Frame Soft.png'],
    ['accessories','Accessories — Lights','—','Grip Head 2.5','assets/images/equipment/set-2-transparent/Grip Head 2.5.png'],
    ['accessories','Wireless Video','Hollyland','Mars 400S','assets/images/equipment/set-2-transparent/Hollyland Mars 400S.png'],
    ['accessories','Monitor Camera','Hollyland','Pyro 7"','assets/images/equipment/set-2-transparent/Hollyland Pyro 7.png'],
    ['lights','Cinema Lights','Kino','2 Bank 110w','assets/images/equipment/set-2-transparent/Kino 2 Bank 110w.png'],
    ['lights','Cinema Lights','Kino','4 Bank 220w','assets/images/equipment/set-2-transparent/Kino 4 Bank 220w.png'],
    ['accessories','Accessories — Lights','Lights Stand','Baby Stand','assets/images/equipment/set-2-transparent/Lights Stand Baby Stand.png'],
    ['accessories','Accessories — Lights','Lights Stand','Boom Stand','assets/images/equipment/set-2-transparent/Lights Stand Boom Stand.png'],
    ['accessories','Accessories — Lights','Lights Stand','C-Stand','assets/images/equipment/set-2-transparent/Lights Stand C-Stand.png'],
    ['accessories','Accessories — Lights','Lights Stand','Combo Stand','assets/images/equipment/set-2-transparent/Lights Stand Combo Stand.png'],
    ['accessories','Accessories — Lights','Lights Stand','Junior Stand','assets/images/equipment/set-2-transparent/Lights Stand Junior Stand.png'],
    ['accessories','Accessories — Lights','Lights Stand','Standard','assets/images/equipment/set-2-transparent/Lights Stand Standard.png'],
    ['lights','Cinema Lights','Lightstar','1000w','assets/images/equipment/set-2-transparent/Lightstar 1000w.png'],
    ['lights','Cinema Lights','Lightstar','150w','assets/images/equipment/set-2-transparent/Lightstar 150w.png'],
    ['lights','Cinema Lights','Lightstar','300w','assets/images/equipment/set-2-transparent/Lightstar 300w.png'],
    ['lights','Cinema Lights','Lightstar','650w','assets/images/equipment/set-2-transparent/Lightstar 650w.png'],
    ['accessories','Monitor Camera','Lilliput','7"','assets/images/equipment/set-2-transparent/Lilliput 7.png'],
    ['accessories','Accessories — Cinema Camera','—','Magic Arm','assets/images/equipment/set-2-transparent/Magic Arm.png'],
    ['accessories','Maglinier','—','Maglinier Cart','assets/images/equipment/set-2-transparent/Maglinier Cart.png'],
    ['accessories','Tripod','MILLER','Camera Tripod Bowl 75','assets/images/equipment/set-2-transparent/MILLER Camera Tripod Bowl 75.png'],
    ['accessories','Accessories — Cinema Camera','—','Mini JIB','assets/images/equipment/set-2-transparent/Mini JIB.png'],
    ['accessories','Accessories — Cinema Camera','—','Modular Dolly Track','assets/images/equipment/set-2-transparent/Modular Dolly Track.png'],
    ['lights','Cinema Lights','MOVMAX','Slide Page','assets/images/equipment/set-2-transparent/MOVMAX Slide Page.png'],
    ['accessories','Monitor Director','Panasonic','18.5"','assets/images/equipment/set-2-transparent/Panasonic 18.5.png'],
    ['mirrorless','เลนส์ Panasonic','Panasonic','70-200mm F4','assets/images/equipment/set-2-transparent/Panasonic 70-200mm F4.png'],
    ['accessories','Tripod','Sachtler','Camera Tripod Bowl 75','assets/images/equipment/set-2-transparent/Sachtler Camera Tripod Bowl 75.png'],
    ['accessories','Accessories — Cinema Camera','—','Slide Page Mini','assets/images/equipment/set-2-transparent/Slide Page Mini.png'],
    ['accessories','Follow Focus','SmallRig','Manual','assets/images/equipment/set-2-transparent/SmallRig Manual.png'],
    ['accessories','Battery','Sony','NP-F (L) Battery','assets/images/equipment/set-2-transparent/Sony NP-F (L) Battery.png'],
    ['accessories','Monitor Director','SWIT','21.5" 4K','assets/images/equipment/set-2-transparent/SWIT 21.5 4K.png'],
    ['accessories','Wireless Video','SWIT','FLOW500','assets/images/equipment/set-2-transparent/SWIT FLOW500.png'],
    ['accessories','Battery','SWIT','V-Mount Battery','assets/images/equipment/set-2-transparent/SWIT V-Mount Battery.png'],
    ['accessories','Matte Box','TILTA','For FS7','assets/images/equipment/set-2-transparent/TILTA For FS7.png'],
    ['accessories','Matte Box','TILTA','For FX6','assets/images/equipment/set-2-transparent/TILTA For FX6.png'],
    ['accessories','Matte Box','TILTA','For RED','assets/images/equipment/set-2-transparent/TILTA For RED.png'],
    ['accessories','Follow Focus','TILTA','Manual','assets/images/equipment/set-2-transparent/TILTA Manual.png'],
    ['accessories','Matte Box','TILTA','Mini','assets/images/equipment/set-2-transparent/TILTA Mini.png'],
    ['accessories','Follow Focus','TILTA','Nucleus-M (Wireless)','assets/images/equipment/set-2-transparent/TILTA Nucleus-M (Wireless).png'],
    ['lights','Cinema Lights','Tungsten','ส้ม 800w','assets/images/equipment/set-2-transparent/Tungsten ส้ม 800w.png'],
    ['lights','Cinema Lights','Tungsten','หัวเหลือง 2000w','assets/images/equipment/set-2-transparent/Tungsten หัวเหลือง 2000w.png'],
    ['lights','Video Lights','Yongnuo','YN 600L II','assets/images/equipment/set-2-transparent/Yongnuo YN 600L ii.png'],
    ['accessories','Accessories — Lights','ผ้าเขียว','Green Screen','assets/images/equipment/set-2-transparent/ผ้าเขียว Green Screen.png'],
    ['accessories','Accessories — Lights','ผ้าดำ','Black Cloth','assets/images/equipment/set-2-transparent/ผ้าดำ Black Cloth.png']
  );

  const EQUIPMENT_IMAGE_MAP = new Map(EQUIPMENT_IMAGES.map(function(entry){
    return [[entry[0],entry[1],entry[2],entry[3]].join('|'),entry[4]];
  }));


  const CATEGORY_META = {
    all: { label: 'ทั้งหมด', code: 'ALL' },
    mirrorless: { label: 'Mirrorless / DSLR', code: 'CAM' },
    cinema: { label: 'Cinema Camera', code: 'CIN' },
    lights: { label: 'Lights', code: 'LGT' },
    accessories: { label: 'Accessories', code: 'ACC' },
    sound: { label: 'เสียง (Sound)', code: 'SND' }
  };

  const catalog = document.getElementById('equipmentCatalog');
  if(!catalog) return;

  const elements = {
    search: document.getElementById('equipmentSearch'),
    categoryTabs: document.getElementById('equipmentCategoryTabs'),
    sections: document.getElementById('equipmentSections'),
    empty: document.getElementById('equipmentEmpty'),
    resultCount: document.getElementById('equipmentResultCount'),
    selectionButton: document.getElementById('equipmentSelectionButton'),
    selectionCount: document.getElementById('equipmentSelectionCount'),
    compatibility: document.getElementById('equipmentCompatibility'),
    drawer: document.getElementById('equipmentDrawer'),
    drawerOverlay: document.getElementById('equipmentDrawerOverlay'),
    drawerClose: document.getElementById('equipmentDrawerClose'),
    drawerBody: document.getElementById('equipmentDrawerBody'),
    drawerTotal: document.getElementById('equipmentSelectedTotal'),
    clearSelection: document.getElementById('equipmentClearSelection'),
    printOpen: document.getElementById('equipmentPrintSelection'),
    printOverlay: document.getElementById('equipmentPrintPreview'),
    printDialog: document.getElementById('equipmentPrintDialog'),
    printClose: document.getElementById('equipmentPrintClose'),
    printCancel: document.getElementById('equipmentPrintCancel'),
    printConfirm: document.getElementById('equipmentPrintConfirm'),
    printDocument: document.getElementById('equipmentPrintDocument'),
    modal: document.getElementById('equipmentItemModal'),
    modalOverlay: document.getElementById('equipmentItemOverlay'),
    modalClose: document.getElementById('equipmentItemClose'),
    modalPhoto: document.getElementById('equipmentItemPhoto'),
    modalBadge: document.getElementById('equipmentItemBadge'),
    modalTitle: document.getElementById('equipmentItemTitle'),
    modalSub: document.getElementById('equipmentItemSub'),
    modalSpecs: document.getElementById('equipmentItemSpecs'),
    modalDescription: document.getElementById('equipmentItemDescription'),
    modalQuantity: document.getElementById('equipmentItemQuantity'),
    modalMinus: document.getElementById('equipmentItemMinus'),
    modalPlus: document.getElementById('equipmentItemPlus')
  };

  const flatItems = [];
  const itemMap = new Map();
  DATA.forEach(function(category){
    category.groups.forEach(function(group){
      group.items.forEach(function(item, index){
        const id = [category.id, group.name, item.b, item.m, index].join('|');
        const imagePath = EQUIPMENT_IMAGE_MAP.get([category.id,group.name,item.b,item.m].join('|'));
        const imageData = imagePath ? {image:imagePath,imageAlt:'รูปอุปกรณ์ ' + item.b + ' ' + item.m} : {};
        const record = Object.assign({}, item, imageData, {
          id: id,
          category: category.id,
          categoryTitle: category.label,
          group: group.name
        });
        flatItems.push(record);
        itemMap.set(id, record);
      });
    });
  });

  let activeCategory = 'all';
  let searchTerm = '';
  let activeItemId = '';
  let drawerReturnFocus = null;
  let modalReturnFocus = null;
  let printReturnFocus = null;
  let printRequested = false;
  const selected = new Map();

  function focusWithoutScroll(element){
    if(!element || typeof element.focus !== 'function') return;
    try{ element.focus({preventScroll:true}); }
    catch(error){ element.focus(); }
  }

  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(character){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character];
    });
  }

  function normalize(value){
    return String(value || '').toLocaleLowerCase('th-TH').trim();
  }

  function sanitizeDescription(html){
    const parser = new DOMParser();
    const documentFragment = parser.parseFromString('<div>' + String(html || '') + '</div>', 'text/html');
    const root = documentFragment.body.firstElementChild;
    if(!root) return '';
    const allowed = new Set(['B','STRONG','EM','I','BR','P','UL','OL','LI']);
    Array.from(root.querySelectorAll('*')).forEach(function(node){
      Array.from(node.attributes).forEach(function(attribute){ node.removeAttribute(attribute.name); });
      if(!allowed.has(node.tagName)){
        node.replaceWith(documentFragment.createTextNode(node.textContent || ''));
      }
    });
    return root.innerHTML;
  }

  function getQuantity(id){
    return selected.get(id) || 0;
  }

  function setQuantity(id, quantity){
    const next = Math.max(0, Number(quantity) || 0);
    if(next === 0) selected.delete(id);
    else selected.set(id, next);
    updateAllQuantities();
    renderSelection();
    renderCompatibility();
  }

  function totalQuantity(){
    let total = 0;
    selected.forEach(function(quantity){ total += quantity; });
    return total;
  }

  function renderTabs(){
    const counts = flatItems.reduce(function(result, item){
      result[item.category] = (result[item.category] || 0) + 1;
      return result;
    }, {});
    const keys = ['all'].concat(DATA.map(function(category){ return category.id; }));
    elements.categoryTabs.innerHTML = keys.map(function(key){
      const meta = CATEGORY_META[key] || {label:key,code:key.slice(0,3).toUpperCase()};
      const count = key === 'all' ? flatItems.length : (counts[key] || 0);
      return '<button class="equipment-category-tab" type="button" data-equipment-category="' + escapeHtml(key) + '" aria-pressed="' + String(activeCategory === key) + '">' +
        '<span>' + escapeHtml(meta.label) + '</span><small>' + count + '</small></button>';
    }).join('');
  }

  function matchesItem(item){
    const inCategory = activeCategory === 'all' || item.category === activeCategory;
    if(!inCategory) return false;
    if(!searchTerm) return true;
    const haystack = normalize([item.b,item.m,item.group,item.categoryTitle,item.role,item.mount,item.connector,item.desc].join(' '));
    return haystack.indexOf(searchTerm) !== -1;
  }

  function cardTemplate(item){
    const quantity = getQuantity(item.id);
    const photo = item.image
      ? '<span class="equipment-card-photo has-image" aria-hidden="true"><img src="' + escapeHtml(item.image) + '" alt="" loading="lazy" decoding="async"></span>'
      : '<span class="equipment-card-photo" aria-hidden="true"><b>' + escapeHtml((item.b || 'NCL').slice(0,2).toUpperCase()) + '</b><small>PHOTO COMING SOON</small></span>';
    return '<article class="equipment-card" data-equipment-id="' + escapeHtml(item.id) + '">' +
      '<button class="equipment-card-info" type="button" data-equipment-detail="' + escapeHtml(item.id) + '" aria-label="ดูรายละเอียด ' + escapeHtml(item.b + ' ' + item.m) + '">' +
        photo +
        '<span class="equipment-card-copy"><span class="equipment-card-brand">' + escapeHtml(item.b) + '</span>' +
        '<strong>' + escapeHtml(item.m) + '</strong><small>' + escapeHtml(item.group) + '</small></span>' +
        '<span class="equipment-card-open">ดูรายละเอียด <span aria-hidden="true">↗</span></span>' +
      '</button>' +
      '<div class="equipment-card-actions" aria-label="จำนวนที่เลือกสำหรับ ' + escapeHtml(item.b + ' ' + item.m) + '">' +
        '<button type="button" data-equipment-minus="' + escapeHtml(item.id) + '" aria-label="ลดจำนวน"' + (quantity === 0 ? ' disabled' : '') + '>−</button>' +
        '<output aria-live="polite">' + quantity + '</output>' +
        '<button type="button" data-equipment-plus="' + escapeHtml(item.id) + '" aria-label="เพิ่มจำนวน">+</button>' +
      '</div>' +
    '</article>';
  }

  function renderCatalog(){
    let visibleCount = 0;
    const html = DATA.map(function(category){
      if(activeCategory !== 'all' && activeCategory !== category.id) return '';
      const groups = category.groups.map(function(group){
        const items = group.items.map(function(original, index){
          const id = [category.id, group.name, original.b, original.m, index].join('|');
          return itemMap.get(id);
        }).filter(matchesItem);
        if(!items.length) return '';
        visibleCount += items.length;
        return '<section class="equipment-group" aria-labelledby="equipment-group-' + escapeHtml(slug(category.id + '-' + group.name)) + '">' +
          '<div class="equipment-group-head"><h5 id="equipment-group-' + escapeHtml(slug(category.id + '-' + group.name)) + '">' + escapeHtml(group.name) + '</h5>' +
          '<span>' + items.length + ' รายการ</span></div>' +
          '<div class="equipment-grid">' + items.map(cardTemplate).join('') + '</div></section>';
      }).join('');
      if(!groups) return '';
      const meta = CATEGORY_META[category.id] || {code:'NCL'};
      return '<section class="equipment-category-section" data-category="' + escapeHtml(category.id) + '">' +
        '<div class="equipment-category-head"><span>' + escapeHtml(meta.code) + '</span><div><h4>' + escapeHtml(category.label) + '</h4><p>เลือกการ์ดเพื่อดูสเปกและรายละเอียดเพิ่มเติม</p></div></div>' +
        groups + '</section>';
    }).join('');
    elements.sections.innerHTML = html;
    elements.resultCount.textContent = String(visibleCount);
    elements.empty.hidden = visibleCount !== 0;
    updateAllQuantities();
  }

  function slug(value){
    return normalize(value).replace(/[^a-z0-9ก-๙]+/gi,'-').replace(/^-+|-+$/g,'');
  }

  function updateAllQuantities(){
    catalog.querySelectorAll('.equipment-card').forEach(function(card){
      const id = card.getAttribute('data-equipment-id');
      const quantity = getQuantity(id);
      const output = card.querySelector('output');
      const minus = card.querySelector('[data-equipment-minus]');
      if(output) output.textContent = String(quantity);
      if(minus) minus.disabled = quantity === 0;
      card.classList.toggle('is-selected', quantity > 0);
    });
    if(activeItemId && elements.modalQuantity){
      elements.modalQuantity.textContent = String(getQuantity(activeItemId));
      elements.modalMinus.disabled = getQuantity(activeItemId) === 0;
    }
    const total = totalQuantity();
    elements.selectionCount.textContent = String(total);
    elements.selectionButton.classList.toggle('has-items', total > 0);
    elements.selectionButton.setAttribute('aria-label','เปิดรายการอุปกรณ์ที่เลือก ' + total + ' ชิ้น');
  }

  function selectedRecords(){
    return Array.from(selected.entries()).map(function(entry){
      return {item:itemMap.get(entry[0]), quantity:entry[1]};
    }).filter(function(record){ return record.item; });
  }

  function groupedSelectedRecords(records){
    return DATA.map(function(category){
      const categoryRecords = records.filter(function(record){ return record.item.category === category.id; });
      if(!categoryRecords.length) return null;
      const quantity = categoryRecords.reduce(function(total, record){ return total + record.quantity; }, 0);
      return {
        category: category,
        meta: CATEGORY_META[category.id] || {label:category.label,code:category.id.slice(0,3).toUpperCase()},
        records: categoryRecords,
        quantity: quantity
      };
    }).filter(Boolean);
  }

  function formatThaiDate(date){
    try{
      return new Intl.DateTimeFormat('th-TH',{
        day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'
      }).format(date);
    }catch(error){
      return date.toLocaleString('th-TH');
    }
  }

  function renderPrintDocument(){
    if(!elements.printDocument) return;
    const records = selectedRecords();
    const groups = groupedSelectedRecords(records);
    const categoryHtml = groups.map(function(group){
      const rows = group.records.map(function(record, index){
        return '<tr>' +
          '<td>' + (index + 1) + '</td>' +
          '<td><b>' + escapeHtml(record.item.b + ' ' + record.item.m) + '</b><small>' + escapeHtml(record.item.categoryTitle) + '</small></td>' +
          '<td>' + escapeHtml(record.item.group) + '</td>' +
          '<td><b>' + record.quantity + '</b></td>' +
        '</tr>';
      }).join('');
      return '<section class="equipment-print-category">' +
        '<div class="equipment-print-category-head"><div><span>' + escapeHtml(group.meta.code) + '</span><h5>' + escapeHtml(group.category.label) + '</h5></div><strong>' + group.quantity + ' ชิ้น</strong></div>' +
        '<table class="equipment-print-table"><thead><tr><th>#</th><th>รายการอุปกรณ์</th><th>หมวดย่อย</th><th>จำนวน</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '</section>';
    }).join('');
    elements.printDocument.innerHTML =
      '<header class="equipment-print-paper-head">' +
        '<div class="equipment-print-brand"><span class="equipment-print-brand-mark">NCL</span><div><b>Nitade Creator Lab</b><small>EQUIPMENT DOCUMENT · CA DPU</small></div></div>' +
        '<div class="equipment-print-date">จัดทำเมื่อ<br><b>' + escapeHtml(formatThaiDate(new Date())) + '</b></div>' +
      '</header>' +
      '<div class="equipment-print-title"><span>SELECTION LIST</span><h4>รายการอุปกรณ์ที่เลือก</h4><p>จัดกลุ่มตามประเภทอุปกรณ์ เพื่อใช้ตรวจสอบและจัดเตรียมรายการ</p></div>' +
      (categoryHtml || '<p class="equipment-print-note">ยังไม่มีรายการอุปกรณ์</p>') +
      '<div class="equipment-print-total"><span>จำนวนอุปกรณ์รวมทั้งหมด</span><strong>' + totalQuantity() + ' ชิ้น</strong></div>' +
      '<p class="equipment-print-note">เอกสารนี้เป็นรายการสำหรับตรวจสอบและจัดเตรียมอุปกรณ์ กรุณาตรวจสอบจำนวนและความพร้อมใช้งานอีกครั้งก่อนนำไปใช้งานจริง</p>' +
      '<p class="equipment-print-warning"><strong>เอกสารฉบับนี้ไม่ใช่เอกสารการยืมอุปกรณ์</strong> เป็นเพียงสำหรับการตรวจสอบเท่านั้น หากต้องการยืมอุปกรณ์ให้ติดต่อพี่ๆทีมLab อีกครั้ง</p>';
  }

  function renderSelection(){
    const records = selectedRecords();
    if(!records.length){
      elements.drawerBody.innerHTML = '<div class="equipment-drawer-empty"><b>ยังไม่มีรายการอุปกรณ์</b><span>กดปุ่ม + ที่การ์ดเพื่อจัดรายการสำหรับตรวจสอบ</span></div>';
    }else{
      elements.drawerBody.innerHTML = groupedSelectedRecords(records).map(function(group){
        const items = group.records.map(function(record){
          return '<article class="equipment-drawer-item">' +
            '<button class="equipment-drawer-name" type="button" data-equipment-detail="' + escapeHtml(record.item.id) + '">' +
              '<span>' + escapeHtml(record.item.b) + ' · ' + escapeHtml(record.item.group) + '</span><strong>' + escapeHtml(record.item.m) + '</strong></button>' +
            '<div class="equipment-mini-stepper"><button type="button" data-equipment-minus="' + escapeHtml(record.item.id) + '" aria-label="ลดจำนวน ' + escapeHtml(record.item.b + ' ' + record.item.m) + '">−</button>' +
            '<output aria-label="จำนวน ' + escapeHtml(record.item.b + ' ' + record.item.m) + '">' + record.quantity + '</output><button type="button" data-equipment-plus="' + escapeHtml(record.item.id) + '" aria-label="เพิ่มจำนวน ' + escapeHtml(record.item.b + ' ' + record.item.m) + '">+</button></div>' +
          '</article>';
        }).join('');
        return '<section class="equipment-drawer-category" aria-label="หมวด ' + escapeHtml(group.category.label) + '">' +
          '<div class="equipment-drawer-category-head"><div class="equipment-drawer-category-title"><span class="equipment-drawer-category-code">' + escapeHtml(group.meta.code) + '</span><h4>' + escapeHtml(group.category.label) + '</h4></div><strong>' + group.quantity + ' ชิ้น</strong></div>' +
          items + '</section>';
      }).join('');
    }
    elements.drawerTotal.textContent = String(totalQuantity());
    elements.clearSelection.disabled = records.length === 0;
    if(elements.printOpen) elements.printOpen.disabled = records.length === 0;
    if(elements.printOverlay && !elements.printOverlay.hidden) renderPrintDocument();
    updateAllQuantities();
  }

  const MOUNT_LABEL = {
    'canon-rf':'Canon RF', 'canon-ef':'Canon EF', 'l-mount':'L-Mount', 'sony-e':'Sony E-Mount', 'pl':'PL-Mount'
  };

  function compatibleMount(cameraMount, lensMount){
    if(!cameraMount || !lensMount) return {ok:true, adapter:false};
    if(cameraMount === lensMount) return {ok:true, adapter:false};
    if(cameraMount === 'canon-rf' && lensMount === 'canon-ef') return {ok:true, adapter:true};
    return {ok:false, adapter:false};
  }

  function compatibilityMessages(){
    const records = selectedRecords();
    const cameras = records.filter(function(record){ return record.item.role === 'camera'; });
    const lenses = records.filter(function(record){ return record.item.role === 'lens'; });
    const selectedIds = new Set(records.map(function(record){ return record.item.id; }));
    const messages = [];
    cameras.forEach(function(camera){
      lenses.forEach(function(lens){
        const result = compatibleMount(camera.item.mount, lens.item.mount);
        if(!result.ok){
          const suggestions = flatItems.filter(function(candidate){
            return candidate.role === 'lens' && !selectedIds.has(candidate.id) && compatibleMount(camera.item.mount, candidate.mount).ok;
          }).slice(0,3).map(function(candidate){ return candidate.b + ' ' + candidate.m; });
          let text = camera.item.b + ' ' + camera.item.m + ' (' + (MOUNT_LABEL[camera.item.mount] || camera.item.mount) + ') ไม่รองรับเมาท์ของ ' + lens.item.b + ' ' + lens.item.m + ' (' + (MOUNT_LABEL[lens.item.mount] || lens.item.mount) + ')';
          if(suggestions.length) text += ' · เลนส์ที่ใช้ได้: ' + suggestions.join(', ');
          messages.push({type:'error', text:text});
        }else if(result.adapter){
          messages.push({type:'note', text:camera.item.b + ' ' + camera.item.m + ' ใช้กับ ' + lens.item.m + ' ได้เมื่อมีอะแดปเตอร์ EF–RF'});
        }
      });
    });

    const recorders = records.filter(function(record){ return record.item.role === 'recorder'; });
    const sources = records.filter(function(record){ return record.item.role === 'source'; });
    if(recorders.length && sources.length){
      const capacity = recorders.reduce(function(total, recorder){ return total + (Number(recorder.item.channels) || 0) * recorder.quantity; }, 0);
      const needed = sources.reduce(function(total, source){ return total + (Number(source.item.channels) || 1) * source.quantity; }, 0);
      if(needed > capacity){
        const suggestions = flatItems.filter(function(candidate){
          return candidate.role === 'recorder' && !selectedIds.has(candidate.id) && (Number(candidate.channels) || 0) >= needed;
        }).sort(function(a,b){ return Number(a.channels) - Number(b.channels); }).slice(0,3).map(function(candidate){ return candidate.b + ' ' + candidate.m; });
        let text = 'แหล่งเสียงที่เลือกต้องใช้ ' + needed + ' ช่อง แต่เครื่องบันทึกที่เลือกรองรับรวม ' + capacity + ' ช่อง';
        if(suggestions.length) text += ' · รุ่นที่รองรับ: ' + suggestions.join(', ');
        messages.push({type:'error', text:text});
      }
    }
    recorders.forEach(function(recorder){
      sources.forEach(function(source){
        const recorderConnector = normalize(recorder.item.connector);
        const sourceConnector = normalize(source.item.connector);
        if(sourceConnector.indexOf('3.5') !== -1 && recorderConnector && recorderConnector.indexOf('3.5') === -1){
          const quantityNote = source.quantity > 1 ? ' จำนวน ' + source.quantity + ' เส้น' : '';
          messages.push({type:'note', text:source.item.m + ' ต้องใช้สายแปลง 3.5 มม. → 6.3 มม. (TRS)' + quantityNote + ' สำหรับเชื่อมต่อกับ ' + recorder.item.m});
        }
      });
    });
    return messages.slice(0,8);
  }

  function renderCompatibility(){
    const messages = compatibilityMessages();
    if(!messages.length){
      elements.compatibility.hidden = true;
      elements.compatibility.innerHTML = '';
      return;
    }
    elements.compatibility.hidden = false;
    elements.compatibility.innerHTML = '<div class="equipment-compatibility-head"><strong>COMPATIBILITY CHECK</strong><span>' + messages.length + ' ข้อสังเกต</span></div>' +
      '<ul>' + messages.map(function(message){
        return '<li class="' + (message.type === 'error' ? 'is-error' : 'is-note') + '"><span aria-hidden="true">' + (message.type === 'error' ? '!' : 'i') + '</span>' + escapeHtml(message.text) + '</li>';
      }).join('') + '</ul>';
  }

  function buildSpecChips(item){
    const specs = [
      ['หมวด', item.categoryTitle],
      ['กลุ่ม', item.group]
    ];
    if(item.mount) specs.push(['Mount', item.mount]);
    if(item.channels) specs.push(['Channels', item.channels]);
    if(item.connector) specs.push(['Connector', item.connector]);
    return specs.map(function(spec){
      return '<span class="equipment-spec-chip"><small>' + escapeHtml(spec[0]) + '</small><b>' + escapeHtml(spec[1]) + '</b></span>';
    }).join('');
  }

  function openItemModal(id, trigger){
    const item = itemMap.get(id);
    if(!item) return;
    activeItemId = id;
    modalReturnFocus = trigger || document.activeElement;
    elements.modalPhoto.classList.toggle('has-image', Boolean(item.image));
    elements.modalPhoto.innerHTML = item.image
      ? '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.imageAlt || ('รูปอุปกรณ์ ' + item.b + ' ' + item.m)) + '" decoding="async">'
      : '<b>' + escapeHtml((item.b || 'NCL').slice(0,2).toUpperCase()) + '</b><small>PHOTO COMING SOON</small>';
    elements.modalBadge.textContent = (CATEGORY_META[item.category] || {code:'NCL'}).code + ' · ' + item.categoryTitle;
    elements.modalTitle.textContent = item.b + ' ' + item.m;
    elements.modalSub.textContent = item.group;
    elements.modalSpecs.innerHTML = buildSpecChips(item);
    elements.modalDescription.innerHTML = sanitizeDescription(item.desc) || '<p>รายละเอียดรอการอัปเดต</p>';
    elements.modal.hidden = false;
    elements.modalOverlay.hidden = false;
    elements.modal.setAttribute('aria-hidden','false');
    document.body.classList.add('equipment-layer-open');
    updateAllQuantities();
    requestAnimationFrame(function(){
      elements.modal.classList.add('is-open');
      elements.modalOverlay.classList.add('is-open');
      focusWithoutScroll(elements.modalClose);
    });
  }

  function closeItemModal(){
    if(elements.modal.hidden) return;
    elements.modal.classList.remove('is-open');
    elements.modalOverlay.classList.remove('is-open');
    elements.modal.setAttribute('aria-hidden','true');
    window.setTimeout(function(){
      elements.modal.hidden = true;
      elements.modalOverlay.hidden = true;
      activeItemId = '';
      if(elements.drawer.hidden) document.body.classList.remove('equipment-layer-open');
      focusWithoutScroll(modalReturnFocus);
      modalReturnFocus = null;
    }, 220);
  }

  function openDrawer(){
    drawerReturnFocus = document.activeElement;
    renderSelection();
    elements.drawer.hidden = false;
    elements.drawerOverlay.hidden = false;
    elements.drawer.setAttribute('aria-hidden','false');
    document.body.classList.add('equipment-layer-open');
    requestAnimationFrame(function(){
      elements.drawer.classList.add('is-open');
      elements.drawerOverlay.classList.add('is-open');
      focusWithoutScroll(elements.drawerClose);
    });
  }

  function closeDrawer(){
    if(elements.drawer.hidden) return;
    elements.drawer.classList.remove('is-open');
    elements.drawerOverlay.classList.remove('is-open');
    elements.drawer.setAttribute('aria-hidden','true');
    window.setTimeout(function(){
      elements.drawer.hidden = true;
      elements.drawerOverlay.hidden = true;
      if(elements.modal.hidden) document.body.classList.remove('equipment-layer-open');
      focusWithoutScroll(drawerReturnFocus);
      drawerReturnFocus = null;
    }, 220);
  }

  function openPrintPreview(){
    if(!elements.printOverlay || !selectedRecords().length) return;
    printReturnFocus = document.activeElement;
    renderPrintDocument();
    elements.printOverlay.hidden = false;
    elements.printOverlay.removeAttribute('inert');
    elements.printOverlay.setAttribute('aria-hidden','false');
    if(elements.drawer && !elements.drawer.hidden){
      elements.drawer.setAttribute('inert','');
      elements.drawer.setAttribute('aria-hidden','true');
    }
    requestAnimationFrame(function(){
      elements.printOverlay.classList.add('is-open');
      focusWithoutScroll(elements.printClose);
    });
  }

  function closePrintPreview(){
    if(!elements.printOverlay || elements.printOverlay.hidden) return;
    elements.printOverlay.classList.remove('is-open');
    elements.printOverlay.setAttribute('aria-hidden','true');
    elements.printOverlay.setAttribute('inert','');
    window.setTimeout(function(){
      elements.printOverlay.hidden = true;
      if(elements.drawer && !elements.drawer.hidden){
        elements.drawer.removeAttribute('inert');
        elements.drawer.setAttribute('aria-hidden','false');
      }
      focusWithoutScroll(printReturnFocus || elements.printOpen);
      printReturnFocus = null;
    }, 220);
  }

  function printSelection(){
    if(!selectedRecords().length) return;
    renderPrintDocument();
    printRequested = true;
    document.body.classList.add('equipment-printing');
    requestAnimationFrame(function(){
      try{ window.print(); }
      finally{
        window.setTimeout(function(){
          printRequested = false;
          document.body.classList.remove('equipment-printing');
        }, 0);
      }
    });
  }

  function handleAction(event){
    const detail = event.target.closest('[data-equipment-detail]');
    if(detail){
      openItemModal(detail.getAttribute('data-equipment-detail'), detail);
      return;
    }
    const plus = event.target.closest('[data-equipment-plus]');
    if(plus){
      const id = plus.getAttribute('data-equipment-plus');
      setQuantity(id, getQuantity(id) + 1);
      return;
    }
    const minus = event.target.closest('[data-equipment-minus]');
    if(minus){
      const id = minus.getAttribute('data-equipment-minus');
      setQuantity(id, getQuantity(id) - 1);
    }
  }

  function keepFocusInside(event, container){
    if(event.key !== 'Tab' || !container || container.hidden) return;
    const focusable = Array.from(container.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')).filter(function(element){
      return !element.hidden && element.getAttribute('aria-hidden') !== 'true';
    });
    if(!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if(event.shiftKey && document.activeElement === first){ event.preventDefault(); focusWithoutScroll(last); }
    else if(!event.shiftKey && document.activeElement === last){ event.preventDefault(); focusWithoutScroll(first); }
  }

  elements.categoryTabs.addEventListener('click', function(event){
    const button = event.target.closest('[data-equipment-category]');
    if(!button) return;
    activeCategory = button.getAttribute('data-equipment-category') || 'all';
    renderTabs();
    renderCatalog();
  });

  elements.search.addEventListener('input', function(){
    searchTerm = normalize(elements.search.value);
    renderCatalog();
  });

  elements.sections.addEventListener('click', handleAction);
  elements.drawerBody.addEventListener('click', handleAction);
  elements.modalPlus.addEventListener('click', function(){ setQuantity(activeItemId, getQuantity(activeItemId) + 1); });
  elements.modalMinus.addEventListener('click', function(){ setQuantity(activeItemId, getQuantity(activeItemId) - 1); });
  elements.selectionButton.addEventListener('click', openDrawer);
  elements.drawerClose.addEventListener('click', closeDrawer);
  elements.drawerOverlay.addEventListener('click', closeDrawer);
  if(elements.printOpen) elements.printOpen.addEventListener('click', openPrintPreview);
  if(elements.printClose) elements.printClose.addEventListener('click', closePrintPreview);
  if(elements.printCancel) elements.printCancel.addEventListener('click', closePrintPreview);
  if(elements.printConfirm) elements.printConfirm.addEventListener('click', printSelection);
  if(elements.printOverlay) elements.printOverlay.addEventListener('click', function(event){
    if(event.target === elements.printOverlay) closePrintPreview();
  });
  elements.modalClose.addEventListener('click', closeItemModal);
  elements.modalOverlay.addEventListener('click', closeItemModal);
  elements.clearSelection.addEventListener('click', function(){
    selected.clear();
    updateAllQuantities();
    renderSelection();
    renderCompatibility();
  });

  document.addEventListener('keydown', function(event){
    if(event.key === 'Tab'){
      if(elements.printOverlay && !elements.printOverlay.hidden) keepFocusInside(event, elements.printDialog);
      else if(!elements.modal.hidden) keepFocusInside(event, elements.modal);
      else if(!elements.drawer.hidden) keepFocusInside(event, elements.drawer);
      return;
    }
    if(event.key !== 'Escape') return;
    if(elements.printOverlay && !elements.printOverlay.hidden) closePrintPreview();
    else if(!elements.modal.hidden) closeItemModal();
    else if(!elements.drawer.hidden) closeDrawer();
  });

  window.addEventListener('beforeprint', function(){
    if(!printRequested) return;
    renderPrintDocument();
    document.body.classList.add('equipment-printing');
  });
  window.addEventListener('afterprint', function(){
    printRequested = false;
    document.body.classList.remove('equipment-printing');
  });

  renderTabs();
  renderCatalog();
  renderSelection();
  renderCompatibility();
})();
