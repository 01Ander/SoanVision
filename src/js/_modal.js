import { closeBtn, modal, modalImg, captionText } from "./_var";

export function openModal(imageSrc, imageTitle) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerText = `Author: ${imageTitle}`;

}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener('click', closeModal);