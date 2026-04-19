import './Form.scss'
import { useForm, Controller } from 'react-hook-form'
import Select from '../Select/Select'
import Upload from '../Upload/Upload'
import type { UploadFileItem } from '../Upload/Upload'

interface FormValues {
  item: string
  attachments: UploadFileItem[]
}

const Options = [
  { label: '数据结构', value: 'zwz' },
  { label: '狗屎高数💩👎👎👎👎👎👎👎', value: '臭狗屎'},
  { label: '蒲熠星啊蒲熠星🌟', value: 'star' }
]

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      item: '',
      attachments: [],
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('submit data:', data)
    alert(
      JSON.stringify(
        {
          item: data.item,
          attachments: data.attachments.map((item) => ({
            name: item.name,
            size: item.size,
            type: item.type,
          })),
        },
        null,
        2,
      ),
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <label className="form-label">Item</label>
        <Controller
          name="item"
          control={control}
          rules={{ required: 'Please select a fruit' }}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              options={Options}
              placeholder="Please select"
            />
          )}
        />
        {errors.item && <div className="form-error">{errors.item.message}</div>}
      </div>

      <div className="form-item">
        <label className="form-label">👋</label>
        <Controller
          name="attachments"
          control={control}
          rules={{
            validate: (files) => files.length > 0 || 'Please upload at least one file',
          }}
          render={({ field }) => (
            <Upload
              value={field.value}
              onChange={field.onChange}
              multiple
              maxCount={3}
              buttonText="Upload file"
            />
          )}
        />
        {errors.attachments && (
          <div className="form-error">{errors.attachments.message}</div>
        )}
      </div>

      <div className="form-actions">
        <button className="form-button form-button-primary" type="submit">
          上传
        </button>
        <button
          className="form-button"
          type="button"
          onClick={() =>
            reset({
              item: '',
              attachments: [],
            })
          }
        >
          重置
        </button>
      </div>
    </form>
  )
}