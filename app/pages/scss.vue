<script lang="ts">
interface CarInfo { subject: string, value: string }
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'imageCarousel',
    data() {
        const carDetail: CarInfo[] = [
            { subject: 'Type:', value: 'GY' },
            { subject: 'Version:', value: '35 TFSI' },
            { subject: 'Master Number:', value: '137749178' },
            { subject: 'Type Approval Number', value: '1AC270' },
            { subject: 'Production From / To:', value: '2020 -' },
            { subject: 'Engine Power (Kw/Ps):', value: '110/150' },
            { subject: 'System Power (Kw/Ps):', value: '180/210' },
            { subject: 'PCD:', value: '5/112' },
            { subject: 'Center Bore', value: '57,1 Mm' },
            { subject: 'Fuel', value: 'Hybrid Gasoline/E' },
            { subject: 'Axis Load Front:', value: '1145 Kg' },
            { subject: 'Axis Load Rear:', value: '1250 Kg' },
            { subject: 'Max Speed:', value: '232' },
        ];
        return {
            images: [
                "/pic-1.jpg",
                "/pic-2.jpg",
                "/pic-3.jpg",
                "/pic-4.jpg",
                "/pic-5.jpg",
                "/pic-6.jpg",
                "/pic-1.jpg",
                "/pic-2.jpg",
                "/pic-3.jpg",
            ],
            currentIndex: 0,
            carDetail,
            thumbRefs: [] as (HTMLElement | null)[],
        }
    },
    watch: {
        currentIndex() {
            this.$nextTick(() => {
                const el = this.thumbRefs[this.currentIndex];
                if (!el) return;

                el.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                })
            })
        }
    },
    methods: {
        setThumbRef(el: Element | ComponentPublicInstance | null, index: number) {
            this.thumbRefs[index] = el instanceof HTMLElement ? el : null;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prev() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        goTo(index: number) {
            this.currentIndex = index;
        }
    }
})
</script>

<template>
    <section>
        <div class="carousel">
            <img class="show-image" :src="images[currentIndex]" :alt="`product-image-${currentIndex}`" />

            <div class="other-images-box">
                <div class="btn-box left">
                    <button v-on:click="prev" class="icon-btn">
                        < </button>
                </div>
                <div class="other-images">
                    <div v-for="(image, index) in images" :class="{ active: index === currentIndex }"
                        class="image-thumnail" :ref="(el) => setThumbRef(el, index)">
                        <button :class="{ active: index === currentIndex }" v-on:click="goTo(index)">
                            <img :src="image" alt="product-image">
                        </button>
                    </div>
                </div>
                <div class="btn-box right">
                    <button v-on:click="next" class="icon-btn">
                        >
                    </button>
                </div>
            </div>
        </div>
        <div class="detail-box">
            <div class="detail-header">
                <h3>Mercedes-Benz</h3>
                <p>E200 AMG Line</p>
            </div>

            <div class="detail-informations-wrapper">
                <div v-for="detail in carDetail" :key="detail.subject" class="detail-informations">
                    <div>
                        <p>{{ detail.subject }}</p>
                    </div>
                    <div>
                        <p>{{ detail.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
$blackText: black;
$grayText: gray;
$lightGrayText: lightgray;

$whiteBg: #ffffff;
$lightGrayBg: rgb(242, 242, 242);
$buttonBg: #acdad7;
$hoverButtonBg: #87a8a6;

$lightGrayBorderColor: #e7ecef;

$imageShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
$tableShadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@mixin text-style($size, $color, $weight) {
    font-size: $size;
    color: $color;
    font-weight: $weight;
}

section {
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: 16px 32px;
    display: flex;
    justify-content: center;
    gap: 3rem;

    .carousel,
    .detail-box {
        flex: 1 1 auto;
        width: 100%;
    }

    .carousel {
        min-width: 0;
        max-width: 800px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-inline: 1.5rem;

        .show-image {
            width: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
            object-position: center;
            border-radius: 8px;
            display: block;
        }

        .other-images-box {
            width: 100%;
            min-width: 0;
            position: relative;

            .other-images {
                width: 100%;
                min-width: 0;
                padding-bottom: 6px;
                display: flex;
                justify-content: center;
                gap: 8px;
                overflow-x: auto;
                overscroll-behavior-x: contain;
                scroll-snap-type: x mandatory;
                anchor-name: --carousel;
            }

            .btn-box {
                margin-bottom: 10px;
                position: absolute;
                position-anchor: --carousel;
            }

            .left {
                margin-right: 1rem;
                position-area: center left;
            }

            .right {
                margin-left: 1rem;
                position-area: center right;
            }

            .icon-btn {
                width: 24px;
                height: 24px;
                border: 0;
                border-radius: 50%;
                background: $buttonBg;
                color: white;
                cursor: pointer;
            }

            .image-thumnail {
                flex: 0 0 auto;
                width: 120px;
                border-radius: 4px;
                border: 1px solid $lightGrayBorderColor;
                box-shadow: $imageShadow;
                scroll-snap-align: center;

                button {
                    cursor: pointer;
                    background: $whiteBg;
                    border: none;
                    transition: border-color 0.15s ease, background 0.15s ease;
                }

                img {
                    width: 100%;
                    padding: 8px;
                    -o-object-fit: cover;
                    object-fit: contain;
                    object-position: center;
                }
            }

            button.active {
                filter: brightness(0.5);
            }

            .image-thumnail.active {
                border: 2px solid $buttonBg
            }
        }
    }

    .detail-box {
        min-width: 0;
        display: flex;
        flex-direction: column;

        .detail-header {
            display: flex;
            flex-direction: column;

            h3 {
                @include text-style(32px, $blackText, bold)
            }

            p {
                @include text-style(24px, $grayText, normal)
            }
        }

        .detail-informations-wrapper {
            margin-top: 8px;
            display: flex;
            flex-direction: column;

            .detail-informations {
                width: 100%;
                height: 35px;
                padding: 8px;
                display: flex;
                justify-content: space-between;
                border-radius: 4px;
                transition: all 0.2s ease-in-out;

                div:last-child {
                    p {
                        @include text-style(16, $grayText, normal)
                    }
                }
            }

            .detail-informations:nth-child(odd) {
                background-color: $lightGrayBg;
            }

            .detail-informations:hover {
                transform: scale(1.01);
                box-shadow: $tableShadow 
            }
        }
    }
}

@media screen and (max-width: 900px) {
    section {
        display: flex;
        flex-direction: column;
    }
}
</style>