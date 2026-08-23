# Chương 17 — Vì sao phổ biến quy trình mới thường trượt

Một tổ chức quyết định áp một phương pháp thiết kế mới. Có ngân sách, có người đứng đầu, có tài liệu, có buổi đào tạo, có biểu mẫu. Sáu tháng sau, hồ sơ đầy đủ hơn hẳn trước đó, và cách người ta thật sự ra quyết định thiết kế không đổi một ly. Đây là chế độ hỏng phổ biến nhất của mọi thứ cuốn sách này đã mô tả — và nó không phải chuyện thiếu quyết tâm. Nó là hệ quả tính được từ hai chương trước. Thiếu chương này, người đọc rời cuốn sách với một bảng xếp hạng công cụ mà không biết vì sao chính hành động triển khai bảng xếp hạng ấy lại là thứ dễ trượt nhất trong tất cả.

Chương 16 xếp toàn bộ công cụ — ma trận hình thái, Pugh, VDI 2225, chữ V, bảy bước, bảy công cụ ICDM — theo tầng đòn bẩy, và đo khoảng cách giữa tầng thật với tầng mà công cụ tự nhận. Bảng đó có một ô trống mà Chương 16 cố ý không điền: bản thân **hành động phổ biến** — việc mang một quy trình mới vào một tổ chức đang chạy — nằm ở tầng nào? Đây là chương điền ô đó. Và khi ô đó được điền, nó khép vòng lập luận của cả cuốn sách: vế một của luận đề nói phương pháp là một **canh bạc đặt vào một tổ chức không tồn tại** (Chương 13 liệt kê năm khoản đặt cược); vế hai nói gần như mọi cải tiến can thiệp ở **tầng đòn bẩy thấp** (Chương 15 và 16 dựng thang đo). Hai vế đó gặp nhau ở đúng một chỗ: cuộc phổ biến.

Ba thứ chương này giao. Thứ nhất, một câu nguyên văn từ corpus — do chính tuyến hệ thống viết về chính nó — nói thẳng rằng triển khai thất bại nếu hệ hình không đổi, kèm ngữ cảnh đầy đủ của câu đó để không bị đọc quá tay. Thứ hai, ánh xạ từng giả định tổ chức của Chương 13 sang tầng đòn bẩy tương ứng, kèm khai báo rõ chỗ nào là ánh xạ của sách. Thứ ba — phần có giá trị hành động cao nhất — một bộ **dấu hiệu sớm**: những thứ quan sát được trong vòng vài tuần đầu, trước khi con số tuân thủ kịp đẹp lên và che mất sự thật.

---

## Ranh giới phải nhắc lại trước khi bắt đầu

Meadows và Goldratt không viết một chữ nào về thiết kế kỹ thuật. Thang mười hai tầng đòn bẩy là công cụ phân tích hệ thống nói chung; năm bước tập trung là công cụ quản trị vận hành. Không nguồn nào trong sáu mươi sáu tài liệu của corpus đặt hai người này cạnh Pahl-Beitz. Việc dùng thang đòn bẩy để giải thích vì sao một cuộc phổ biến quy trình thiết kế trượt là **thao tác của cuốn sách này**, không phải phát hiện của nguồn nào.

Điều đó không làm lập luận vô giá trị. Nó xác định giá trị đó thuộc loại nào: một **lăng kính** cho phép nhìn thấy cấu trúc của thất bại, chứ không phải **bằng chứng** rằng thất bại đã xảy ra theo đúng cơ chế ấy trong một dự án thiết kế cụ thể. Bằng chứng về mặt tiếp giáp giữa phương pháp và tổ chức nằm ở Chương 13 và Chương 14, lấy từ tuyến phê bình và từ chính các tác giả phương pháp. Chương này mượn lăng kính để sắp xếp lại những bằng chứng đó, không để thay thế chúng.

Một nhắc nhở kỹ thuật đi kèm: quy ước của thang là **số nhỏ = đòn bẩy lớn**. L12 là thông số, đáy bảng, yếu nhất. L2 là hệ hình tư duy, gần đỉnh. Thứ tự ngược với trực giác đánh số thông thường, và đọc nhầm chiều là cách nhanh nhất để rút ra kết luận ngược hẳn.

---

## Một cuộc phổ biến nhìn từ bên trong

Cuộc phổ biến nào cũng bắt đầu bằng một chẩn đoán đúng. Ai đó thấy hồ sơ thiết kế lộn xộn, thấy quyết định không truy được về căn cứ, thấy lỗi lặp lại ở sản phẩm sau đúng như sản phẩm trước. Chẩn đoán đúng dẫn tới một can thiệp có vẻ hiển nhiên: có sẵn một phương pháp chuẩn hoá được viết ra cho đúng vấn đề đó, mang nó về, dạy, và bắt tuân thủ.

Đường đi từ đó gần như không đổi giữa các tổ chức.

```mermaid
flowchart TD
    A["Chẩn đoán đúng: hồ sơ lộn xộn, quyết định không truy được"] --> B["Chọn một phương pháp chuẩn hoá có sẵn"]
    B --> C["Tài liệu hoá: biểu mẫu, quy trình, checklist"]
    C --> D["Đào tạo: buổi giảng, ví dụ mẫu, người vô địch nội bộ"]
    D --> E["Bắt tuân thủ: cổng ký, chỉ số hoàn thành biểu mẫu"]
    E --> F["Chỉ số tuân thủ tăng đều"]
    F --> G["Hồ sơ đẹp hơn thật"]

    E --> H["Công việc thật vẫn chạy theo lối cũ, song song"]
    H --> I["Biểu mẫu điền sau khi quyết định đã ra"]
    I --> F

    G --> J["Dự án gấp đầu tiên"]
    J --> K["Xin miễn trừ 'lần này thôi'"]
    K --> L["Miễn trừ thành tiền lệ"]
    L --> M["Hệ hình cũ tái lập nguyên trạng"]
    M --> N["Kết luận sai: 'phương pháp này không hợp với ta'"]
    N --> B

    style H fill:#fde2e2,stroke:#c0392b
    style I fill:#fde2e2,stroke:#c0392b
    style M fill:#fde2e2,stroke:#c0392b
    style N fill:#fde2e2,stroke:#c0392b
```

Ba chỗ đáng dừng lại trên sơ đồ này.

**Nhánh phải là nhánh quyết định, và nó chạy im lặng.** Công việc thật không dừng lại để chờ quy trình mới. Nó tiếp tục theo lối cũ, và biểu mẫu được điền **sau** khi quyết định đã ra. Từ ngoài nhìn vào, nhánh này không phân biệt được với nhánh trái: cả hai đều sinh ra hồ sơ đầy đủ đúng hạn. Chỉ số tuân thủ không thể tách hai nhánh, vì nó đo cùng một thứ ở cả hai — sự tồn tại của tài liệu, không phải trình tự sinh ra nó.

**Vòng lặp dưới cùng là vòng lặp giết chết cuộc phổ biến, và nó tự khép.** Kết luận "phương pháp này không hợp với ta" đẩy tổ chức quay lại bước chọn phương pháp — lần sau sẽ chọn một cái khác, phổ biến lại theo đúng đường cũ, và trượt lại ở đúng chỗ cũ. Đây là lý do nhiều tổ chức có một nghĩa địa phương pháp: không phải vì họ chọn sai bốn lần liên tiếp, mà vì cả bốn lần đều can thiệp ở cùng một tầng.

**Điểm gãy không phải dự án gấp.** Dự án gấp chỉ là chỗ vết nứt lộ ra. Vết nứt đã có từ bước bắt tuân thủ, khi thứ được đo là sự tồn tại của biểu mẫu chứ không phải thứ tự các bước tư duy. Meadows mô tả chính xác cơ chế này khi nói về các can thiệp phi cấu trúc: `"Blaming, disciplining, firing, twisting policy levers harder, hoping for a more favorable sequence of driving events, tinkering at the margins—these standard responses will not fix structural problems."` [61] Siết chặt tuân thủ khi thấy trượt là "twisting policy levers harder" — đúng phản xạ mà nguồn liệt kê là vô hiệu.

---

## Câu mà corpus tự viết về chính mình

Bản phân tích Theory of Constraints trong corpus làm một việc hiếm: nó tự chấm tầng đòn bẩy của chính phương pháp nó trình bày, rồi liệt kê những chỗ phương pháp ấy mù.

Tự chấm tầng:

> `"TOC emerges as primarily an L10-level intervention methodology (physical structure) that gains transformational power when integrated with higher-leverage thinking (L1-L5)."` [65]

Và trong bảng khoảng trống, dòng đầu tiên:

> `"Mental model resistance L2 (Paradigm) Implementation fails if paradigm unchanged"` [65]

Đây là câu mà cả Phần V dẫn tới, nên phải trích đủ ngữ cảnh của nó, không chỉ đủ chữ.

**Ngữ cảnh thứ nhất: đây là một dòng bảng, không phải một câu văn.** Ba mảnh — tên khoảng trống, mã tầng, hệ quả — nằm trên cùng một hàng của bảng *Gaps Identified*, và khi trích ra thành một dòng liền, nó đọc như một câu tuyên ngôn hùng hồn hơn bản gốc. Bốn dòng còn lại của bảng cùng cấu trúc: `"Goal appropriateness L3 (Goals) Is "profit" the right goal?"`, `"Information quality L6 Garbage in → wrong constraint identified"`, `"Feedback loop blindness L7-L8 Doesn't explicitly model R/B loop dynamics"`, `"Self-organization potential L4 Relies on external consultant vs. built capability"` [65]. Đọc cả bảng thì rõ: đây là danh mục điểm mù của một phương pháp, do người phân tích phương pháp ấy lập, không phải một định luật.

**Ngữ cảnh thứ hai: nó nói về TOC, không nói về Pahl-Beitz.** Chủ ngữ ẩn của "Implementation" là việc triển khai năm bước tập trung trong một tổ chức sản xuất. Việc mở rộng câu này sang việc triển khai một phương pháp thiết kế là **suy luận của cuốn sách**. Cơ sở của phép mở rộng: cả hai đều là việc mang một quy trình chuẩn hoá vào một tổ chức đang chạy, và cả hai đều đụng cùng một lớp — lớp người phải đổi cách nghĩ để quy trình có nghĩa. Cơ sở đó hợp lý, và nó vẫn là suy luận.

**Ngữ cảnh thứ ba, và là ngữ cảnh làm câu trích mạnh lên chứ không yếu đi:** cùng tài liệu liệt kê bốn chế độ hỏng của TOC, và chế độ thứ tư nói lại đúng điều ấy bằng ngôn ngữ hành vi:

| Chế độ hỏng | Nguyên văn [65] | Đọc sang ngôn ngữ phổ biến quy trình |
|---|---|---|
| 1 | `"Failure Mode 1: Wrong Constraint Identified"` | Phổ biến quy trình để chữa một ràng buộc không phải ràng buộc thật |
| 2 | `"Failure Mode 2: Constraint Shifts Unpredictably"` | Quy trình vừa cài xong thì chỗ nghẽn đã dời sang khâu khác |
| 3 | `"Failure Mode 3: Financial Benefits Don't Materialize"` | Hồ sơ đẹp lên, chi phí và lỗi bảo hành không đổi |
| 4 | `"Failure Mode 4: Organization Reverts to Old Behavior"` | Sau đợt cao điểm, mọi người quay về lối cũ nguyên vẹn |

Chế độ 4 là vòng lặp dưới cùng của sơ đồ trên. Nguồn ghi lý do của nó là hệ hình chưa dịch chuyển. Đó là mảnh bằng chứng gần nhất mà corpus có cho luận điểm của chương này — và nó là bằng chứng về **triển khai TOC**, không phải về triển khai một phương pháp thiết kế. Ranh giới đó phải giữ nguyên.

---

## Câu hỏi bị bỏ qua: ràng buộc thật nằm ở đâu

Trước khi hỏi cuộc phổ biến can thiệp ở tầng nào, có một câu hỏi đến trước mà hầu như không cuộc phổ biến nào đặt: **chỗ nghẽn thật của tổ chức này có phải là thiếu quy trình không?**

Tuyến Goldratt trong corpus đặt câu hỏi ấy thành bước đầu tiên và không cho phép bỏ qua. Năm bước tập trung, nguyên văn: `"Step 1: IDENTIFY the current constraint"`, `"Step 2: EXPLOIT the constraint"`, `"Step 3: SUBORDINATE everything else"`, `"Step 4: ELEVATE the constraint"`, `"Step 5: REPEAT"` [60,65]. Nền tảng của cả năm bước là một mệnh đề: `"At any time, ONE factor is most limiting."` [60]

Một cuộc phổ biến bình thường bắt đầu ở bước 4 — nâng cấp năng lực bằng cách đầu tư vào một quy trình mới — mà chưa làm bước 1. Nó **giả định** rằng ràng buộc là năng lực quy trình. Đôi khi đúng. Thường thì chỗ nghẽn thật nằm ở nơi khác, và nguồn liệt kê chính chế độ hỏng này ở vị trí đầu bảng: `"Failure Mode 1: Wrong Constraint Identified"` [65].

Bốn ứng viên thay thế cho vị trí ràng buộc thật, tất cả đều quan sát được trước khi phổ biến bất cứ thứ gì:

| Ràng buộc thật có thể là | Triệu chứng phân biệt | Nếu đúng thì phổ biến quy trình sẽ |
|---|---|---|
| Năng lực quy trình — không ai biết làm có hệ thống | Người có kinh nghiệm cũng ra quyết định không nhất quán giữa hai dự án tương tự | Ăn. Đây là trường hợp cuộc phổ biến đúng thuốc |
| Năng lực người — thiếu người đủ trình ở một miền | Một miền luôn là khâu chậm nhất bất kể quy trình nào | Thêm thủ tục lên đúng khâu đang nghẽn, làm chậm hơn |
| Thông tin — quyết định ra khi chưa có dữ liệu cần | Quyết định phải làm lại sau khi số đo thật về | Không đổi gì; hồ sơ ghi lại đầy đủ hơn cùng những quyết định thiếu căn cứ ấy |
| Mục tiêu — tổ chức đang thưởng cho tốc độ ra hàng | Ai chạy tắt được khen, ai làm kỹ bị coi là chậm | Bị vô hiệu trong vòng một quý, vì nó chống lại cái đang được thưởng |

Cột giữa và cột phải là suy luận của tôi; nguồn chỉ cung cấp mệnh đề về ràng buộc duy nhất và danh sách chế độ hỏng.

Ba dòng dưới cùng của bảng đáng chú ý vì chúng có chung một tính chất: **cuộc phổ biến vẫn sẽ tạo ra chỉ số tuân thủ đẹp trong cả ba trường hợp.** Chỉ số ấy không biết phân biệt "quy trình đang chữa đúng chỗ nghẽn" với "quy trình đang chạy song song bên cạnh chỗ nghẽn". Đây là lý do bước 1 không bỏ được: bỏ nó thì mọi phản hồi sau đó đều không cho biết mình đang ở trường hợp nào.

Còn một chi tiết trong năm bước mà người phổ biến quy trình hay bỏ: bước 5 không phải "lặp lại" đơn thuần. Nguồn mô tả nội dung thật của nó là **ngăn quán tính trở thành ràng buộc mới** — vô hiệu hoá các chính sách và thước đo vốn được dựng để phục vụ chỗ nghẽn cũ. Áp vào bối cảnh này: một quy trình được phổ biến thành công và giữ nguyên trong năm năm sẽ tự trở thành chỗ nghẽn tiếp theo. Điều đó không phải nghịch lý; đó là bước 5 đang nói.

---

## Phổ biến quy trình là can thiệp ở tầng nào

Đặt một cuộc phổ biến điển hình lên thang mười hai tầng, từng hoạt động một.

| Hoạt động trong cuộc phổ biến | Nó thay đổi cái gì | Tầng | Căn cứ |
|---|---|---|---|
| Viết biểu mẫu, checklist, mẫu hồ sơ | Số lượng và định dạng tài liệu | **L12** | Ánh xạ của sách. Meadows định nghĩa L12 là `"Constants, parameters, numbers"` [62] |
| Quy định số bước bắt buộc, số cổng ký | Tham số của quy trình | **L12** | Ánh xạ của sách |
| Đặt thời hạn đệm cho pha ý tưởng | Kích thước kho đệm | **L11** | Ánh xạ của sách. `"L11: Buffers—Stabilizing Stock Sizes"` [62] |
| Đổi trình tự bàn giao giữa các bộ phận | Cấu trúc dòng chảy vật lý của công việc | **L10** | Ánh xạ của sách. `"L10: Stock-and-Flow Structures—Physical Architecture"` [62] |
| Buổi đào tạo, tài liệu hướng dẫn | Ai biết cái gì | **L6** | Ánh xạ của sách. `"L6: Information Flows—Who Knows What When"` [62] |
| Đổi tiêu chí qua cổng, đổi cái được thưởng | Luật chơi | **L5** | Ánh xạ của sách. `"L5: Rules—Incentives, Constraints, Decision Criteria"` [62] |
| Đổi thứ mà dự án bị chấm điểm | Mục tiêu thật của hệ thống | **L3** | Ánh xạ của sách. `"L3: Goals—System Purpose"` [62] |
| Đổi niềm tin về *thiết kế là gì* | Hệ hình | **L2** | Ánh xạ của sách. `"L2: Paradigms—Mental Models"` [62] |

Toàn bộ cột "Tầng" trong bảng này là **thao tác của cuốn sách**. Nguồn cung cấp định nghĩa từng tầng; việc gán hoạt động phổ biến vào tầng là của tôi. Cột "Căn cứ" nói rõ chỗ nào là định nghĩa nguồn và chỗ nào là gán.

Bảng cho thấy điều mà một cuộc phổ biến bình thường không tự thấy: **nó không nằm ở một tầng, nó rải từ L12 đến L2.** Nhưng khối lượng công sức không rải đều. Ngân sách, thời gian, sự chú ý của người tổ chức dồn vào bốn dòng đầu — biểu mẫu, số bước, thời hạn, trình tự bàn giao. Dòng cuối cùng, dòng L2, thường không có ai được giao, không có ngân sách, và không có cách đo.

Đây là bản sao chính xác của điều Meadows đo được ở quy mô chung:

> `"Probably 90—no 95, no 99 percent—of our attention goes to parameters, but there's not a lot of leverage in them."` [62]

Câu này là một ước lượng tu từ của chính tác giả, không phải một phép đo có phương pháp — bản thân nó tự sửa số ba lần trong một câu. Trích nó như một thống kê là xuyên tạc; trích nó như điều nó là — lời thú nhận của một người trong nghề về chỗ nỗ lực thực tế đổ vào — thì đúng.

Và Meadows nói thêm một câu làm cuộc phổ biến khó hơn nữa, chứ không dễ hơn:

> `"People deeply involved in a system often know intuitively where to find leverage points, more often than not they push the change in the wrong direction."` [62]

Người tổ chức cuộc phổ biến thường **biết** vấn đề nằm ở cách nghĩ chứ không ở biểu mẫu. Họ vẫn làm biểu mẫu, vì biểu mẫu là thứ làm được trong quý này, đo được, báo cáo được. Đây không phải sự ngu ngốc. Đây là cấu trúc khuyến khích đang làm đúng việc của nó.

Đặt bảng này cạnh bảng của Chương 16 thì thấy một sự trùng lặp không phải ngẫu nhiên. Chương 16 đo khoảng cách giữa **tầng thật** của một công cụ và **tầng nó tự nhận**: ma trận hình thái tự nhận là công cụ mở rộng không gian giải pháp nhưng vận hành như một thủ tục sinh tổ hợp; các phương pháp chấm điểm tự nhận là công cụ ra quyết định khách quan nhưng vận hành như cơ chế đàm phán để hợp thức hoá một quyết định đã có. Cuộc phổ biến lặp lại đúng mẫu hình ấy ở một cấp cao hơn: nó **tự nhận** là can thiệp vào cách tổ chức thiết kế — tức tầng hệ hình — trong khi hầu hết khối lượng của nó nằm ở bốn dòng đầu bảng trên.

Nghĩa là khoảng cách tầng-thật / tầng-tự-nhận không phải khuyết tật của từng công cụ riêng lẻ mà Chương 16 tình cờ bắt được. Nó là khuyết tật của cả lớp can thiệp: **thứ đo được thì nông, thứ sâu thì không đo được, và ngân sách luôn chảy về phía đo được.** Cuốn sách này gọi tên khoảng cách đó ở từng công cụ trong Chương 16 và ở chính hành động triển khai trong chương này. Cách gọi tên là như nhau; chỉ khác cấp.

> **Đào sâu: vì sao càng can thiệp sâu càng bị đẩy ra**
>
> Có một lý do cấu trúc khiến tầng L2 không chỉ khó chạm mà còn **chủ động kháng cự**. Meadows ghi nó như một vòng phản hồi cân bằng:
>
> `"Balancing Loop: Systems resist changes at high leverage points more than low ones— "societies often rub out truly enlightened beings.""` [62]
>
> Đọc dòng này cho đúng: đây là một mệnh đề định tính, minh hoạ bằng một câu nói hình tượng, không phải một quan hệ đo được. Nhưng hệ quả thực hành thì rõ. Nếu độ kháng cự tỷ lệ thuận với độ sâu của điểm can thiệp, thì phản hồi mà người tổ chức nhận được **cũng tỷ lệ nghịch với giá trị của việc họ đang làm**. Can thiệp ở L12 — phát biểu mẫu mới — nhận được sự hợp tác lịch sự và chỉ số đẹp trong hai tuần. Can thiệp ở L2 — chất vấn niềm tin rằng quyết định thiết kế là đặc quyền của người có thâm niên — nhận được sự chống đối lập tức từ đúng những người có quyền chấm dứt cuộc phổ biến.
>
> Nghĩa là tín hiệu phản hồi ngắn hạn **hướng người tổ chức đi sai đường một cách có hệ thống**. Ai điều chỉnh theo phản hồi sớm sẽ trôi dần về phía L12. Đó không phải yếu đuối cá nhân; đó là gradient của địa hình.
>
> Hệ quả cho việc lập kế hoạch: nếu một cuộc phổ biến gặp **quá ít** phản đối trong tháng đầu, đó không phải tin tốt. Đó là dấu hiệu nó chưa chạm tới chỗ nào có đòn bẩy.

---

## Năm giả định tổ chức, đọc lại bằng thang đòn bẩy

Chương 13 dựng năm giả định mà cả bốn thế hệ phương pháp cùng đặt vào tổ chức áp dụng. Con số năm là **phép gộp của cuốn sách** từ chỗ hội tụ của năm khối tài liệu độc lập — không nguồn nào trong corpus viết ra con số ấy, và không nguồn nào lập danh sách đó. Chương này không dựng lại bằng chứng cho từng giả định; nó làm một việc khác: hỏi mỗi giả định **vỡ ở tầng nào**, vì tầng vỡ quyết định cách chữa.

| # | Giả định (Ch13) | Điều kiện hỏng trong nguồn | Tầng vỡ | Vì sao gán tầng đó |
|---|---|---|---|---|
| 1 | Hợp tác liên ngành thông suốt | `"Sự cát cứ thông tin (Domain Silos)"` — kỹ sư phần cứng và phần mềm không tìm được ngôn ngữ chung, chữ V thành thủ tục đối phó [18,19,20,22,23,25,26,27] | **L6** | Vỡ ở chỗ *ai biết cái gì lúc nào*, không ở chỗ thiếu biểu mẫu |
| 2 | Đồng thuận văn hoá giữa kỹ sư và quản lý | Kỹ sư làm hệ thống nhưng quản lý mất kiên nhẫn đòi bản vẽ ngay; hoặc ngược lại [1] | **L2** | Hai bên đang giữ hai niềm tin khác nhau về *thiết kế là gì*. Không luật nào bắc cầu được chỗ này |
| 3 | Kỷ luật quy trình cao | Kỹ sư nhảy sang giải pháp vật lý cụ thể rất sớm; quy trình tuần tự bị "bỏ qua ngầm" [8,10,12,13,14,15,16] | **L2** | Đây là hành vi nhận thức tự nhiên, không phải sự vô kỷ luật. Chữa bằng luật là chữa sai tầng |
| 4 | Nguồn lực dồi dào cho pha trừu tượng đầu dự án | Doanh nghiệp vừa và nhỏ: rào cản tài chính, áp lực thương mại hoá; bước trừu tượng thành gánh nặng thủ tục [1,43] | **L3** | Mục tiêu thật của hệ thống là *ra hàng trước đối thủ*. Pha trừu tượng thua vì nó không được mục tiêu ấy tính điểm |
| 5 | Thuật ngữ thống nhất giữa cơ – điện – phần mềm | Dữ liệu SysML không ánh xạ tự động sang bản vẽ cơ khí, phải nhập tay, sai lệch phiên bản [18,19,20,22,23,25,26,27] | **L10** | Đây là chỗ hiếm hoi vỡ ở tầng cấu trúc vật lý — hạ tầng dữ liệu — và vì thế là chỗ hiếm hoi mua được bằng tiền |

Cột "Tầng vỡ" là ánh xạ của cuốn sách. Nguồn mô tả điều kiện hỏng; việc gán chúng vào thang Meadows không có trong nguồn nào.

Bảng này đọc được theo hai chiều, và chiều thứ hai mới là chiều có ích.

**Chiều thứ nhất, hiển nhiên:** ba trong năm giả định vỡ ở tầng L2 hoặc L3 — tầng mà một cuộc phổ biến bình thường không chạm tới. Đó là lý do phổ biến trượt.

**Chiều thứ hai, có ích hơn:** hai giả định còn lại **không** vỡ ở tầng cao. Giả định 1 vỡ ở L6, giả định 5 vỡ ở L10. Với hai giả định này, can thiệp bằng tài liệu, bằng hạ tầng, bằng cách bố trí dòng thông tin **là đúng tầng** — và sẽ ăn. Kết luận "mọi thứ đều là chuyện hệ hình" sai không kém kết luận "chỉ cần đủ biểu mẫu". Meadows cảnh báo đúng chỗ này khi nói về L10:

> `"Physical structure is crucial in a system, but is rarely a leverage point, because changing it is rarely quick or simple."` [62]

Câu này thường bị đọc thành "đừng động vào cấu trúc vật lý". Nó không nói vậy. Nó nói cấu trúc vật lý **quan trọng** nhưng **hiếm khi là điểm đòn bẩy** vì đổi nó chậm và tốn — nghĩa là: khi đã xác định đúng rằng chỗ vỡ nằm ở L10, hãy đổi nó, và hãy tính trước rằng nó sẽ chậm và tốn. Với hạ tầng dữ liệu thiết kế, "chậm và tốn" là mô tả đúng, không phải lý do bỏ cuộc.

---

## Bốn nguyên mẫu bẫy mà cuộc phổ biến hay rơi vào

Tuyến Meadows liệt kê tám bẫy cấu trúc, và câu nguồn dùng để giới thiệu chúng cũng là câu cảnh báo cách dùng chúng:

> `"The power isn't in memorizing the eight archetypes—it's in developing the perceptual shift that allows you to see structure generating behavior rather than individuals causing problems."` [61]

Giá trị nằm ở chỗ chuyển góc nhìn, không ở chỗ thuộc danh sách. Bốn trong tám bẫy có hình dạng nhận ra được trong một cuộc phổ biến quy trình. Việc gán chúng vào bối cảnh này là **thao tác của cuốn sách** — nguồn mô tả các bẫy ở quy mô chính sách công và tổ chức nói chung, không nói gì về thiết kế kỹ thuật.

| Nguyên mẫu [61] | Hình dạng của nó trong một cuộc phổ biến | Lối thoát theo nguồn |
|---|---|---|
| `"Policy Resistance"` | Càng siết tuân thủ, đội càng giỏi tạo hồ sơ hợp lệ mà không đổi cách làm. Nỗ lực hai bên đều cao, trạng thái không đổi | L3 — hợp nhất mục tiêu, thay vì mỗi bên kéo một hướng |
| `"Shifting the Burden"` | Mỗi lần thiết kế hỏng, phản ứng là thêm một bước kiểm; năng lực phán đoán của người thiết kế teo dần vì đã có bước kiểm lo | L2/L4 — dựng năng lực nội tại thay vì phụ thuộc giải pháp triệu chứng |
| `"Drift to Low Performance"` | Mục tiêu tuân thủ hạ dần theo kết quả thực tế: 100% thành "80% là hợp lý với xưởng ta" rồi thành "có làm là tốt rồi" | L3 — neo mục tiêu vào chuẩn tuyệt đối hoặc vào thành tích tốt nhất từng đạt |
| `"Rule Beating"` | Đội tuân thủ đúng chữ, sai tinh thần: điền biểu mẫu sau khi quyết định đã ra, chia dự án nhỏ để né cổng | L5 — thiết kế lại luật để tinh thần của nó *chính là* con đường dễ nhất |

Ba chỗ đáng nói thêm.

**Shifting the Burden là bẫy đắt nhất, và nó trông giống thành công.** Mỗi bước kiểm thêm vào đều có lý do chính đáng — nó ra đời sau một sự cố thật. Vấn đề là hướng của mũi tên: bước kiểm bắt lỗi mà người thiết kế lẽ ra phải tự bắt, nên người thiết kế thôi tự bắt. Sau vài vòng, quy trình dày lên và năng lực phán đoán mỏng đi, và tổ chức không thể bỏ bớt bước kiểm nào nữa vì bây giờ nó phụ thuộc thật. Đây chính là nội dung mà một cuốn sách phương pháp không bao giờ tự cảnh báo, vì nó viết ra để bán thêm bước chứ không để bán bớt.

**Drift to Low Performance có triệu chứng đặc trưng là sự êm ái.** Nguồn mô tả nó là kiểu trượt *chậm rãi, êm ái, không gây ra phản ứng báo động nào*. Trong một cuộc phổ biến, nó nghe như những câu rất hợp lý: "quy trình đầy đủ là lý tưởng, thực tế thì phải linh hoạt". Câu ấy đúng — và cũng đúng là cách một mục tiêu bị hạ ba lần liên tiếp mà không lần nào có ai phản đối. Cách phân biệt: một tổ chức đang tailoring có ghi lại lý do cắt bước; một tổ chức đang trôi thì không ghi gì cả, mục tiêu chỉ đơn giản thấp dần trong các cuộc họp.

**Rule Beating không phải vấn đề đạo đức.** Nguồn ghi rõ phản xạ siết thực thi làm bẫy sâu thêm: `"Try to stamp out the self-organizing response by strengthening the rules or their enforcement... usually gives rise to still greater system distortion... That's the way further into the trap"` [61]. Khi thấy đội điền biểu mẫu sau khi quyết định đã ra, kết luận đúng không phải "đội thiếu ý thức" mà là "luật đang thưởng cho sự tồn tại của biểu mẫu". Sửa ở L5 — đổi cái được thưởng — chứ không sửa ở chỗ nhắc nhở.

Bẫy thứ tám trong danh sách của Meadows, `"Seeking Wrong Goal"`, không đứng riêng ở đây vì nó đã nằm sẵn trong ba bẫy trên: cả ba đều bắt đầu từ việc hệ thống đo tuân thủ thay vì đo chất lượng quyết định. Nguồn nói về nó bằng một câu quy tắc: `"Specify indicators and goals that reflect the real welfare of the system"` [61]. Ứng dụng của câu ấy nằm ở mục 5 của *Áp dụng ở Xưởng* cuối chương.

---

## Dấu hiệu sớm — nhận ra một cuộc phổ biến đang trượt

Đây là phần đáng mang ra khỏi chương này.

Vấn đề của việc phát hiện trượt là **độ trễ**. Chỉ số tuân thủ đẹp lên trước, sự thật lộ ra sau — thường sau sáu tháng đến một chu kỳ sản phẩm, và lúc đó chi phí chìm đã đủ lớn để không ai muốn gọi tên nó. Meadows dành cả một chương cho việc con người quản lý sai các hệ thống có độ trễ; ở đây độ trễ có tác dụng che, không chỉ tác dụng làm dao động.

Nên tín hiệu cần tìm không phải là số. Tín hiệu cần tìm là **điều kiện hỏng đang hiện diện** — bốn điều kiện mà tuyến hệ thống ghi ra như những chỗ phương pháp của chính nó sụp đổ. Mỗi điều kiện đều quan sát được sớm, và mỗi cái đều có một câu hỏi kiểm tra ngắn.

### Dấu hiệu 1 — Văn hoá trừng phạt: lỗi bị dùng làm bằng chứng

Giả định bị phá: thông tin lưu chuyển tự do và phản hồi lỗi được tôn trọng (L6). Cơ chế phá:

> `"EGO DEFENSE (Weak Balancing)... Failure experience → Threatens identity → Defense mechanisms → Blame external factors → No model correction..."` [63]

Khi một lỗi thiết kế bị coi là bằng chứng để quy trách nhiệm, người ta không ngừng phạm lỗi — người ta ngừng **báo cáo** lỗi. Đầu vào của mọi công cụ trong Chương 16 bị bóp méo ngay từ chỗ nhập liệu, và mọi phân tích sau đó chạy trên dữ liệu sai. Nguồn gọi hệ quả này là `"Garbage in → wrong constraint identified"` [65].

Meadows còn chỉ ra chỗ sâu hơn của cùng cơ chế: `"There is a systematic tendency on the part of human beings to avoid accountability for their own decisions. That's why there are so many missing feedback loops."` [62] Vòng phản hồi không chỉ bị chặn; nó **chưa bao giờ được nối** vì không ai muốn nối.

**Câu hỏi kiểm tra:** lần gần nhất một quyết định thiết kế sai được ghi vào hồ sơ *kèm tên người quyết định và lý do lúc đó*, mà không có ai chịu hậu quả về mặt nghề nghiệp — là bao giờ? Nếu không nhớ được một lần nào, dấu hiệu này đang bật.

Điều kiện ngược, cũng từ nguồn: `"Error-embracing is the condition for learning."` [63]

### Dấu hiệu 2 — Lãnh đạo không buông kiểm soát

Giả định bị phá: tổ chức sẵn sàng để các phân hệ tự tổ chức (L4). Cơ chế phá, nguyên văn:

> `"Encouraging variability and experimentation and diversity means 'losing control.' Let a thousand flowers bloom and anything could happen! Who wants that?"` [62]

Trong một cuộc phổ biến, dấu hiệu này có hình dạng rất cụ thể: quy trình mới được phát ra **cùng lúc** với yêu cầu rằng mọi đội áp dụng **giống hệt nhau**, và mọi sai khác phải xin phép. Đó là dấu hiệu người tổ chức đang dùng cuộc phổ biến để tăng tính đồng nhất chứ không để tăng chất lượng quyết định — và hai mục tiêu ấy khác nhau. Chương 5 đã cho thấy chính VDI 2221 bản 2019 phải thừa nhận điều ngược lại khi đưa **tailoring** vào trung tâm: quy trình phải cắt may theo bối cảnh, và bối cảnh khác nhau giữa các đội trong cùng một tổ chức.

Ép đồng nhất còn kích hoạt một bẫy có tên: `"Try to stamp out the self-organizing response by strengthening the rules or their enforcement... usually gives rise to still greater system distortion... That's the way further into the trap"` [61].

**Câu hỏi kiểm tra:** một quản đốc có được phép bỏ một bước của quy trình mới cho một dự án cụ thể, tự quyết, và chỉ ghi lại lý do — hay phải xin phê duyệt? Nếu phải xin, dấu hiệu này đang bật.

### Dấu hiệu 3 — Cát cứ thông tin giữa các miền kỹ thuật

Giả định bị phá: hợp tác liên ngành thông suốt (L6). Nguồn mô tả nó ở tuyến cơ điện tử: khi kỹ sư phần cứng và phần mềm không có ngôn ngữ giao diện chung, việc áp chữ V trở thành *"một thủ tục giấy tờ mang tính đối phó"*.

Dấu hiệu này khó thấy vì nó **không có triệu chứng tiêu cực ở giai đoạn đầu**. Mỗi miền vẫn giao đúng hạn phần của mình. Vấn đề chỉ hiện ra ở lần tích hợp đầu tiên, tức là muộn — và đến lúc đó nó sẽ được gọi tên là "lỗi tích hợp", không phải "phổ biến trượt".

**Câu hỏi kiểm tra:** lấy một thuật ngữ giao diện bất kỳ trong tài liệu quy trình mới, hỏi riêng một người bên cơ khí và một người bên phần mềm xem nó nghĩa là gì. Nếu hai câu trả lời khác nhau mà cả hai đều tự tin, dấu hiệu này đang bật. Đây là phép thử làm được trong một buổi chiều.

### Dấu hiệu 4 — Áp lực ngắn hạn và cái được nhìn thấy

Giả định bị phá: nguồn lực đủ cho pha trừu tượng đầu dự án (L3). Nguồn ghi cơ chế này ở một ví dụ ngoài ngành, nhưng cấu trúc thì trùng khít:

> `"Both policies exemplify L8 (strengthening balancing feedback) with feedback gain proportional to the problem. They failed because: Public mental models (L2) favor static, linear solutions; Politicians optimize for visibility (L12), not effectiveness (L8); Payback periods (L3 goal confusion) favor short-term"` [63]

Ba dòng lý do ấy dịch sang bối cảnh một xưởng thiết kế gần như nguyên vẹn: mô hình tâm trí ưa giải pháp tĩnh và tuyến tính; người ra quyết định tối ưu cho thứ **nhìn thấy được** chứ không cho thứ **hiệu quả**; và chu kỳ hoàn vốn ưu tiên ngắn hạn. Pha trừu tượng đầu dự án thua ở cả ba: nó không tạo ra vật thể nhìn thấy được, giá trị của nó chỉ hiện ra ở cuối, và nó là thứ đầu tiên bị cắt khi lịch siết.

Corpus có một con số đo được đúng hiện tượng "công việc thật chạy ngoài quy trình chính thức": trong một doanh nghiệp được nghiên cứu, `"...revealed that a large number of the company's projects (roughly 30%) were results of other initiatives than the formal technology planning."` [43] Chữ *roughly* là của nguồn, và đây là **một** doanh nghiệp, không phải một mẫu khảo sát. Trích nó như tỷ lệ chung là sai. Trích nó như bằng chứng rằng hiện tượng có thật và đã được đo ít nhất một lần thì đúng — và với người đang tổ chức một cuộc phổ biến, đó là câu hỏi cần đặt về chính tổ chức mình: bao nhiêu phần công việc đang đi ngoài quy trình chính thức, và ai biết con số đó?

**Câu hỏi kiểm tra:** trong quý vừa rồi, có dự án nào được cho miễn trừ khỏi quy trình mới không? Nếu có, miễn trừ ấy có thời hạn và điều kiện đóng, hay chỉ là một lần cho qua? Miễn trừ không có điều kiện đóng là tiền lệ, và tiền lệ là bước áp chót của vòng lặp dưới cùng trên sơ đồ đầu chương.

### Bảng gộp — bốn dấu hiệu

| Dấu hiệu | Quan sát ở đâu | Tầng đang vỡ | Nhìn thấy được sau | Nếu bỏ qua thì lộ ra dưới tên gì |
|---|---|---|---|---|
| Lỗi bị dùng làm bằng chứng | Hồ sơ quyết định sai gần nhất | L6 → L2 | 2–4 tuần | "Dữ liệu đầu vào không đáng tin" |
| Ép đồng nhất, không cho tailoring | Quyền bỏ bước của quản đốc | L4 | 2–4 tuần | "Quy trình quá nặng" |
| Hai miền hiểu khác nhau cùng một từ | Phỏng vấn chéo một thuật ngữ giao diện | L6 | 1 buổi | "Lỗi tích hợp" |
| Miễn trừ không có điều kiện đóng | Danh sách miễn trừ quý | L3 | 1 quý | "Phương pháp không hợp với ta" |

Cột "Tầng đang vỡ" là ánh xạ của sách. Cột "Nhìn thấy được sau" là ước lượng thực hành của tôi, không có căn cứ đo trong nguồn nào — nó ở đây vì thứ tự tương đối giữa bốn dòng mới là cái có ích, không phải trị số tuyệt đối.

---

> **Đào sâu: vì sao chỉ số tuân thủ không bao giờ báo động kịp**
>
> Tuyến hệ thống có một thang đo mức nhận thức, gọi là thang tảng băng, và nó giải thích chính xác vì sao bảng theo dõi của một cuộc phổ biến luôn báo bình an cho tới lúc quá muộn:
>
> `"EVENTS... What happened?... Very Low [predictive power]... BEHAVIOR... What patterns over time?... STRUCTURE... What stocks, flows, feedback?... High [predictive power]"` [60]
>
> Chỉ số tuân thủ là **sự kiện**: biểu mẫu này đã nộp, cổng kia đã ký. Nguồn xếp mức này ở *very low predictive power*. Muốn dự báo được, phải lên tới mức cấu trúc — kho chứa, dòng chảy, vòng phản hồi — và bốn dấu hiệu ở mục trên chính là bốn phép đọc ở mức đó. Đây là lý do chúng không phải con số: mức cấu trúc không đo bằng đếm sự kiện.
>
> Còn một cơ chế thứ hai làm việc phát hiện khó hơn nữa: **độ trễ**. Meadows chỉ ra rằng phản ứng nhanh hơn trong một hệ có độ trễ thường làm mọi thứ tệ hơn, kèm số đo từ mô hình: `"Shorten perception delay: 5 → 2 days? Result: Worse oscillation! Shorten response delay: 3 → 2 days? Result: Much worse oscillation! Lengthen response delay: 3 → 6 days? Result: Damped oscillation!"` [66]. Đây là kết quả **mô phỏng trên một mô hình kho–dòng**, không phải đo trên tổ chức thật — trích nó như bằng chứng về hành vi tổ chức là vượt quá điều nguồn nói.
>
> Nhưng hệ quả thực hành thì đáng giữ: khi thấy dấu hiệu trượt, phản xạ tăng tần suất họp kiểm điểm và siết nhắc nhở là phản xạ *rút ngắn độ trễ phản ứng* — thứ mà mô hình cho thấy làm dao động mạnh hơn. Cách làm khác là giữ nguyên nhịp, nhưng đổi **thứ được nhìn** từ mức sự kiện lên mức cấu trúc. Ít họp hơn, đọc sâu hơn.

---

## Điểm can thiệp thay thế

Chẩn đoán mà không có lối thoát thì chỉ là lời càu nhàu có cấu trúc. Sơ đồ dưới đây xếp các điểm can thiệp thay thế theo tầng, đọc từ dưới lên: mỗi tầng cao hơn đòi hỏi ít tiền hơn và nhiều can đảm hơn.

```mermaid
flowchart BT
    subgraph T12["L12–L11 · Thông số và kho đệm"]
        A1["Biểu mẫu, checklist, số bước bắt buộc"]
        A2["Thời hạn đệm cho pha ý tưởng"]
    end
    subgraph T10["L10 · Cấu trúc vật lý"]
        B1["Hạ tầng dữ liệu thiết kế dùng chung"]
        B2["Bố trí lại trình tự bàn giao giữa các miền"]
    end
    subgraph T6["L6 · Dòng thông tin"]
        C1["Ai thấy quyết định thiết kế, và thấy lúc nào"]
        C2["Nhật ký lý do: ghi căn cứ tại thời điểm quyết, không ghi lại sau"]
        C3["Từ điển giao diện chung cho cơ – điện – phần mềm"]
    end
    subgraph T5["L5 · Luật chơi"]
        D1["Đổi tiêu chí qua cổng: chấm căn cứ, không chấm độ dày hồ sơ"]
        D2["Quyền tailoring giao xuống quản đốc, kèm nghĩa vụ ghi lý do"]
        D3["Miễn trừ luôn có điều kiện đóng"]
    end
    subgraph T3["L3 · Mục tiêu"]
        E1["Đo lỗi truy được về pha thiết kế, thay vì đo tỷ lệ tuân thủ"]
    end
    subgraph T2["L2 · Hệ hình"]
        F1["Ai được quyền nói 'tôi chưa biết' mà không mất uy tín"]
        F2["Thiết kế là hoạt động học tập hay là hoạt động chứng minh năng lực"]
    end

    T12 --> T10 --> T6 --> T5 --> T3 --> T2

    G["Nỗ lực thực tế của một cuộc phổ biến bình thường"] -.-> T12
    H["Chỗ ba trong năm giả định của Ch13 thật sự vỡ"] -.-> T3
    H -.-> T2

    style T12 fill:#eef2f7,stroke:#7f8c8d
    style T2 fill:#e8f6ef,stroke:#16a085
    style T3 fill:#e8f6ef,stroke:#16a085
    style G fill:#fde2e2,stroke:#c0392b
```

Sơ đồ này là **thao tác của cuốn sách**: nguồn cung cấp định nghĩa các tầng và một số ví dụ can thiệp ngoài ngành thiết kế; việc điền nội dung từng ô bằng hành động cụ thể trong một xưởng thiết kế là của tôi.

Ba điều đọc ra được từ nó.

**Một.** Khoảng cách giữa mũi tên đỏ và hai ô xanh chính là toàn bộ luận đề của cuốn sách, vẽ trên một trang. Nỗ lực đổ vào đáy; chỗ quyết định nằm ở đỉnh.

**Hai.** Tầng L5 là tầng thoả hiệp tốt nhất cho một tổ chức không dám chạm L2 ngay. Ba ô trong đó — đổi tiêu chí cổng, giao quyền tailoring kèm nghĩa vụ ghi lý do, buộc mọi miễn trừ có điều kiện đóng — đều làm được bằng một văn bản, đều đo được, và cả ba đều **kéo theo** áp lực lên L3 và L2 mà không cần tuyên bố điều đó. Đây là cách vào hệ hình bằng cửa sau: đổi cái được thưởng, rồi để niềm tin đuổi theo.

**Ba.** Ô L3 chỉ có một dòng, và đó là dòng đắt nhất trong sơ đồ. Đổi từ đo tỷ lệ tuân thủ sang đo lỗi truy được về pha thiết kế nghĩa là chấp nhận rằng chỉ số sẽ **xấu đi** trong hai quý đầu — vì lỗi trước đó không được ghi thì nay được ghi. Tổ chức nào không chịu nổi hai quý số xấu thì không nên bắt đầu ở tầng này, và nên nói thẳng điều đó ra thay vì bắt đầu rồi bỏ giữa chừng.

Meadows tóm chỗ đến của cả đường đi này trong một dòng: `"Core Paradigm Shift: From "predict and control" → "dance with systems""` [63]. Câu ấy đẹp và mơ hồ ngang nhau. Phần dịch nó thành hành động cụ thể cho một tổ chức cụ thể là việc của Chương 18 — chương đóng cuốn sách bằng một quy trình quyết định: chấm tổ chức mình trên năm giả định, loại những phương pháp mà tổ chức ấy nuôi không nổi, rồi mới chọn công cụ trong phần còn lại theo tầng đòn bẩy. Chương này chỉ giao một tiền đề cho chương đó, và tiền đề ấy là: **cuộc phổ biến không phải bước cuối sau khi chọn phương pháp — nó là một phần của tiêu chí chọn.** Một phương pháp mà tổ chức không phổ biến nổi thì không phải phương pháp tốt hơn đang bị triển khai kém; với tổ chức ấy, nó là phương pháp sai.

---

## Áp dụng ở Xưởng

Bối cảnh giả định cho cả năm mục: một xưởng cơ khí — điện tử — phần mềm nhúng, vài chục người, có phân xưởng và quản đốc, đang muốn áp một quy trình thiết kế có hệ thống lên các sản phẩm đang phát triển. Mỗi mục mở bằng một câu nguyên văn từ nguồn, rồi đến việc phải làm.

### 1. Chạy phép thử từ điển giao diện trong tuần này

> `"Sự cát cứ thông tin (Domain Silos)"` — nguồn tuyến cơ điện tử ghi rằng khi các miền không có ngôn ngữ giao diện chung, việc áp chữ V trở thành thủ tục giấy tờ đối phó [18,19,20,22,23,25,26,27]

**Quyết định ra được trong tuần tới:** chọn năm thuật ngữ giao diện đang dùng trong tài liệu thiết kế hiện hành — những từ mà cả phần cơ, phần điện và phần mềm đều phải hiểu giống nhau. Hỏi riêng ba người, mỗi miền một người, viết định nghĩa của họ ra giấy, không cho xem của nhau. Đối chiếu.

**Vấn đề nó giải:** cho biết ngay trong tuần liệu giả định "thuật ngữ thống nhất" có đứng trong xưởng mình hay không, trước khi đổ công vào bất kỳ quy trình nào dựa trên giả định đó.

**Cách áp:** một buổi chiều, ba người, năm từ, giấy và bút. Kết quả không cần báo cáo — nó chỉ cần được người quyết định quy trình nhìn thấy tận mắt.

**Bẫy:** chọn năm từ dễ. Nếu cả ba trả lời giống nhau thì hoặc xưởng đang rất tốt, hoặc từ chọn quá hiển nhiên. Chọn từ nào mà mỗi miền đều nghĩ là "thuộc về mình".

### 2. Đổi tiêu chí qua cổng từ độ dày sang căn cứ

> `"Blaming, disciplining, firing, twisting policy levers harder... these standard responses will not fix structural problems."` [61]

**Vấn đề nó giải:** khi hồ sơ đủ mà quyết định vẫn tuỳ tiện, phản xạ tự nhiên là siết yêu cầu tài liệu — đúng thứ nguồn liệt kê là vô hiệu. Đổi tiêu chí cổng chuyển can thiệp từ L12 lên L5.

**Cách áp:** ở mỗi cổng, bỏ câu hỏi "đủ tài liệu chưa", thay bằng ba câu hỏi cố định: phương án nào **không** được chọn, ai quyết, và căn cứ lúc đó là gì. Hồ sơ đạt khi ba câu trả lời được, kể cả khi hồ sơ mỏng.

**Bẫy:** ba câu hỏi ấy sẽ bị trả lời hình thức sau vài vòng nếu người chủ trì cổng không đọc thật. Cổng do người không đọc chủ trì thì tệ hơn không có cổng, vì nó cấp giấy chứng nhận sai.

### 3. Giao quyền tailoring xuống quản đốc, kèm nghĩa vụ ghi lý do

> `"Encouraging variability and experimentation and diversity means 'losing control.' Let a thousand flowers bloom and anything could happen! Who wants that?"` [62]

**Vấn đề nó giải:** ép mọi phân xưởng chạy quy trình giống hệt nhau làm quy trình chết ở phân xưởng có bối cảnh khác — và làm mọi người học cách xin miễn trừ thay vì học cách cắt may.

**Cách áp:** quản đốc được bỏ hoặc gộp bước cho một dự án cụ thể, tự quyết, không xin phép; đổi lại phải ghi một dòng lý do vào nhật ký thiết kế. Tổng hợp các dòng lý do sau một quý cho biết bước nào của quy trình đang bị bỏ ở mọi nơi — đó là bước cần sửa, không phải người cần nhắc.

**Bẫy:** nếu dòng lý do bị dùng để đánh giá quản đốc, nó sẽ thành dòng vô nghĩa trong hai tháng. Nhật ký này phải nằm ngoài hệ thống đánh giá nhân sự, và điều đó phải được nói ra thành lời.

### 4. Buộc mọi miễn trừ có điều kiện đóng

> `"Failure Mode 4: Organization Reverts to Old Behavior"` [65]

**Vấn đề nó giải:** miễn trừ "lần này thôi" là cơ chế qua đó hệ hình cũ tái lập mà không ai phải tuyên bố từ bỏ quy trình mới. Nó là bước áp chót của vòng lặp trượt.

**Cách áp:** mỗi miễn trừ ghi kèm hai thứ — điều kiện để nó hết hiệu lực, và tên người sẽ kiểm điều kiện đó. Không có hai thứ ấy thì không phải miễn trừ, mà là sửa quy trình; và sửa quy trình thì phải sửa công khai.

**Bẫy:** đặt điều kiện đóng dạng thời gian ("hết quý này") thì nó tự gia hạn. Đặt điều kiện dạng sự kiện ("khi hạ tầng dữ liệu dùng chung chạy") thì nó có chỗ để đóng thật.

### 5. Đổi thứ được đo, và chấp nhận hai quý số xấu

> `"Probably 90—no 95, no 99 percent—of our attention goes to parameters, but there's not a lot of leverage in them."` [62]

**Vấn đề nó giải:** chừng nào thứ được báo cáo lên trên còn là tỷ lệ tuân thủ, mọi nỗ lực trong xưởng sẽ trôi về L12 bất kể ai muốn gì. Đổi thước đo là can thiệp ở L3, và là can thiệp sâu nhất mà một người quyết định quy trình có thể tự làm.

**Cách áp:** thay chỉ số "tỷ lệ hồ sơ hoàn thành đúng hạn" bằng "số lỗi phát hiện ở giai đoạn sau mà truy được về một quyết định ở pha thiết kế". Công bố trước rằng con số này sẽ **tăng** trong hai quý đầu vì trước đó nó không được ghi, và rằng việc nó tăng là dấu hiệu thước đo đang chạy.

**Bẫy:** nếu không công bố trước điều đó, quý đầu tiên có số xấu sẽ được đọc là bằng chứng quy trình mới làm hỏng việc — và cuộc phổ biến chết đúng ở chỗ nó bắt đầu có tác dụng.

---

## Sổ kiểm của chương

- **Neo luận đề:** *Tầng đòn bẩy* — nối ở mục *Phổ biến quy trình là can thiệp ở tầng nào* (bảng ánh xạ hoạt động → tầng), ở mục *Năm giả định tổ chức, đọc lại bằng thang đòn bẩy* (bảng tầng vỡ), và ở sơ đồ *Điểm can thiệp thay thế*. Neo *Canh bạc* được nối lại ở đoạn mở thứ hai và ở bảng năm giả định — đây là chương khép vòng giữa hai neo.
- **Nguồn đã dùng:** [1], [8], [10], [12], [13], [14], [15], [16], [18], [19], [20], [22], [23], [25], [26], [27], [43], [60], [61], [62], [63], [65], [66]
- **Con số có nguyên văn:**
  - 90 / 95 / 99 phần trăm — `"Probably 90—no 95..."` [62]; đã ghi rõ đây là ước lượng tu từ tự sửa ba lần, không phải phép đo
  - 30% dự án ngoài quy hoạch chính thức — `"...revealed that a large..."` [43]; đã ghi rõ chữ *roughly* là của nguồn và cỡ mẫu là **một** doanh nghiệp
  - L12 / L11 / L10 / L6 / L5 / L3 / L2 — `"L12: Numbers—Constants..."`, `"L11: Buffers—Stabilizing..."`, `"L10: Stock-and-Flow..."`, `"L6: Information Flows..."`, `"L5: Rules—Incentives..."`, `"L3: Goals—System..."`, `"L2: Paradigms—Mental..."` [62]
  - Bốn chế độ hỏng của TOC — `"Failure Mode 1: Wrong..."`, `"Failure Mode 2: Constraint..."`, `"Failure Mode 3: Financial..."`, `"Failure Mode 4: Organization..."` [65]
  - Năm dòng bảng khoảng trống TOC — `"Mental model resistance L2..."`, `"Goal appropriateness L3..."`, `"Information quality L6..."`, `"Feedback loop blindness L7-L8..."`, `"Self-organization potential L4..."` [65]
  - Năm bước tập trung — `"Step 1: IDENTIFY the..."` đến `"Step 5: REPEAT"` [60,65]; và mệnh đề nền `"At any time, ONE..."` [60]
  - Tám nguyên mẫu bẫy — `"The power isn't in..."` [61]; bốn tên bẫy dùng trong chương đều trích nguyên văn: `"Policy Resistance"`, `"Shifting the Burden"`, `"Drift to Low Performance"`, `"Rule Beating"`, cùng `"Seeking Wrong Goal"` [61]
  - Các trị số 5 → 2, 3 → 2, 3 → 6 ngày trong mục Đào sâu thứ hai — `"Shorten perception delay..."` [66]; đã ghi rõ đây là kết quả **mô phỏng trên mô hình kho–dòng**, không phải đo trên tổ chức thật
- **Con số đã BỎ vì không có nguyên văn:**
  - Con số **năm** trong "năm giả định tổ chức" — không nguồn nào viết con số này; đã ghi rõ trong văn bản rằng đây là phép gộp của cuốn sách từ chỗ hội tụ của các khối tài liệu, và Chương 13 là chương chủ của nó
  - Không đưa bất kỳ tỷ lệ nào về "bao nhiêu phần trăm cuộc phổ biến thất bại" — corpus không có con số ấy, và không được ước lượng
  - Cột *Nhìn thấy được sau* trong bảng bốn dấu hiệu: các trị số 1 buổi / 2–4 tuần / 1 quý **không có căn cứ đo trong nguồn**; đã ghi chú ngay dưới bảng rằng chỉ thứ tự tương đối là có ích
- **Chỗ là suy luận của tác giả, không phải của nguồn:**
  - Toàn bộ cột *Tầng* trong bảng ánh xạ hoạt động phổ biến → tầng đòn bẩy
  - Toàn bộ cột *Tầng vỡ* trong bảng năm giả định
  - Việc mở rộng câu `"Mental model resistance L2 (Paradigm) Implementation fails if paradigm unchanged"` từ ngữ cảnh triển khai TOC sang ngữ cảnh phổ biến một phương pháp thiết kế — đã nêu cơ sở của phép mở rộng và gọi tên nó là suy luận ngay tại chỗ
  - Nội dung từng ô trong sơ đồ *Điểm can thiệp thay thế*
  - Sơ đồ *đường đi của một cuộc phổ biến trượt* — cấu trúc vòng lặp là dựng theo lăng kính hệ thống, không có sơ đồ tương ứng trong nguồn nào
  - Nhận định "tín hiệu phản hồi ngắn hạn hướng người tổ chức đi sai đường một cách có hệ thống" trong mục Đào sâu thứ nhất — suy ra từ hai câu trích [62], nguồn không phát biểu hệ quả này
  - Toàn bộ bảng bốn ứng viên cho vị trí *ràng buộc thật*: cột triệu chứng và cột hệ quả là của tôi; nguồn chỉ cho mệnh đề ràng buộc duy nhất [60] và danh sách chế độ hỏng [65]
  - Việc gán bốn nguyên mẫu bẫy vào bối cảnh phổ biến quy trình thiết kế — nguồn mô tả chúng ở quy mô chính sách công và tổ chức nói chung
  - Suy luận "một quy trình phổ biến thành công và giữ nguyên năm năm sẽ tự trở thành chỗ nghẽn tiếp theo" — đọc bước 5 của TOC sang bối cảnh này, không có trong nguồn
  - Khuyến nghị "ít họp hơn, đọc sâu hơn" ở cuối mục Đào sâu thứ hai — suy ra từ kết quả mô phỏng [66], nguồn không nói về họp kiểm điểm
  - Bốn *câu hỏi kiểm tra* trong mục dấu hiệu sớm, và toàn bộ năm mục *Áp dụng ở Xưởng*
- **Nối chương:** nối ngược đích danh về Ch16 ở đoạn mở thứ hai và ở mục *Phổ biến quy trình là can thiệp ở tầng nào* (đoạn đối chiếu khoảng cách tầng-thật / tầng-tự-nhận); nối về Ch13 ở bảng năm giả định; nhắc Ch15 ở mục ranh giới; nhắc Ch5 (tailoring) ở dấu hiệu 2; nối xuôi tới Ch18 ở đoạn cuối mục *Điểm can thiệp thay thế*, giao cho Ch18 tiền đề "cuộc phổ biến là một phần của tiêu chí chọn phương pháp".
- **Sơ đồ:** 2 — *đường đi của một cuộc phổ biến trượt* (flowchart TD, có vòng lặp khép) và *điểm can thiệp thay thế theo tầng đòn bẩy* (flowchart BT, sáu tầng).
- **Cổng an ninh:** năm mục *Áp dụng ở Xưởng* không chứa tên riêng, mã sản phẩm, tên dự án, tên đơn vị, tên người, số liệu vận hành, tên nhà cung cấp, lịch giao hàng; bối cảnh viết ở mức loại tình huống.
- **Số dòng:** 450
