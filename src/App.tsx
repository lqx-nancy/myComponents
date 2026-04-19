import Button from './components/Button/Button'
import Alert from './components/Alert/Alert.tsx'
import Menu from './components/Menu/Menu.tsx'
import { useState } from 'react'
import Multiselect from './components/Multiselect/mutiselect.tsx'
import Icon from './components/Icon/Icon.tsx'
import Input from './components/Input/Input.tsx'
import Tabs from './components/Tabs/Tabs.tsx'
import Select from './components/Select/Select.tsx'
import Upload from './components/Upload/Upload.tsx'
import Form from './components/Form/Form.tsx'
import type { UploadFileItem } from './components/Upload/Upload'
export default function App() {
  const [selected, setSelected] = useState<string[]>(['react'])
  const [activeTabKey, setActiveTabKey] = useState('overview');
  const [selectValue, setSelectValue] = useState<string | number>('zwz')
  const [uploadFiles, setUploadFiles] = useState<UploadFileItem[]>([])
  return (
    <div style={{ padding: '24px' }}>
      <h1>组件库</h1>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button>默认</Button>
        <Button type="primary">主要</Button>
        <Button type="danger">危险</Button>
        <Button size="large">大大大大</Button>
      </div>

      <h2 style={{ marginTop: '24px' }}>Alert</h2>
      <div style={{ display: 'grid', gap: '12px' }}>
        <Alert
          type="info"
          title="提示信息"
          description="仅仅展示。"
          closable
        />
        <Alert
          type="success"
          title="操作成功"
          description="操作已经成功！！"
          closable
        />
        <Alert
          type="warning"
          title="警告信息"
          description="Warning！Warning！Warning！"
          closable
        />
        <Alert
          type="error"
          title="错误信息"
          description="臭狗屎！失！败！"
          closable
        />
      </div>

      <h2 style={{ marginTop: '24px' }}>Menu</h2>
      <Menu
        activeKey="1"
        items={[
          { key: '1', label: '首页' },
          { key: '3', label: 'xxxxxxxeg' },
          { key: '2', label: 'warning', disabled: true },
        ]}
      />

      <h2 style={{ marginTop: '24px' }}>Multiselect</h2>
      <Multiselect
        value={selected}
        onChange={setSelected}
        options={[
          { label: '蒲熠星', value: 'pyx' },
          { label: '赵卫中', value: 'zwz' },
          { label: '臭老太', value: 'badbad' },
        ]}
      />

      <h2>Icon</h2>
      <div
        style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap',
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name='search' />
        </div>
      </div>

      <h2>Input</h2>
      <div>
        <input
          placeholder="输入框" />
      </div>

      <h2>Tabs</h2>
      <Tabs
        activeKey={activeTabKey}
        onChange={setActiveTabKey}
        items={[
          {
            key: 'overview',
            label: '概览',
            content: <div>总。</div>,
          },

          {
            key: 'examples',
            label: '示例',
            content: <div>xxxxx。</div>,
          },
          {
            key: 'disabled',
            label: '禁用项',
            content: <div>⚠️</div>,
            disabled: true,
          },
        ]}
      />
      <div style={{ marginTop: 8, color: '#666' }}>
        当前激活标签：{activeTabKey}
      </div>

      <h2>Select</h2>
      <div>
        <Select
          options={[
            { label: '数据结构', value: 'zwz' },
            { label: '狗屎高数💩👎👎👎👎👎👎👎', value: '臭狗屎', disabled: true },
            { label: '蒲熠星啊蒲熠星🌟', value: 'star' },
          ]}
          placeholder="请选择"
          value={selectValue}
          onChange={setSelectValue}
        />
      </div>
      <div style={{ marginTop: 8, color: '#666' }}>
        当前选择：{String(selectValue)}
      </div>

      <h2>Upload</h2>
      <div>
        <Upload
          value={uploadFiles}
          onChange={setUploadFiles}
          multiple
          maxCount={10}
          buttonText='上传'
        />

      </div>
      <div style={{ marginTop: 8, color: '#666' }}>
        当前文件数：{uploadFiles.length}
      </div>

      <h2>Form</h2>
      <Form/>
    </div>
  )
}
